-- Reset by dropping existing types and tables
DROP TYPE IF EXISTS order_status CASCADE;
DROP TYPE IF EXISTS trx_status CASCADE;
DROP TYPE IF EXISTS delivery_status CASCADE;

DROP TABLE IF EXISTS order_details CASCADE;
DROP TABLE IF EXISTS deliveries CASCADE;
DROP TABLE IF EXISTS transactions CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS addresses CASCADE;
DROP TABLE IF EXISTS users CASCADE;

-- Create ENUM types
CREATE TYPE order_status AS ENUM ('unfulfilled', 'fulfilled', 'cancelled');
CREATE TYPE trx_status AS ENUM ('pending', 'completed', 'failed');
CREATE TYPE delivery_status AS ENUM ('preparing', 'shipped', 'delivered');

-- Create users table with index on email
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_users_email ON users (email);

-- Create addresses table with index on user_id
CREATE TABLE IF NOT EXISTS addresses (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    street VARCHAR(100) NOT NULL,
    suburb VARCHAR(100) NOT NULL,
    postcode INTEGER NOT NULL,
    country VARCHAR(100) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE INDEX idx_addresses_user_id ON addresses (user_id);

-- Create categories table with index on name
CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT NOT NULL
);
CREATE INDEX idx_categories_name ON categories (name);

-- Create products table with indexes on category_id and other potentially queried columns
CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    category_id INTEGER NOT NULL,
    name VARCHAR(100) NOT NULL,
    price DECIMAL NOT NULL,
    description TEXT NOT NULL,
    stock_quantity INTEGER NOT NULL,
    image_url TEXT[] NOT NULL,
    brand VARCHAR(100) NOT NULL,
    color TEXT[] NOT NULL,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);
CREATE INDEX idx_products_category_id ON products (category_id);

-- Create orders table with index on user_id
CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status order_status NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE INDEX idx_orders_user_id ON orders (user_id);

-- Create transactions table with index on order_id
CREATE TABLE IF NOT EXISTS transactions (
    id SERIAL PRIMARY KEY,
    order_id INTEGER NOT NULL,
    amount DECIMAL NOT NULL,
    payment_method VARCHAR(100) NOT NULL,
    trx_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status trx_status NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id)
);
CREATE INDEX idx_transactions_order_id ON transactions (order_id);

-- Create deliveries table with index on order_id
CREATE TABLE IF NOT EXISTS deliveries (
    id SERIAL PRIMARY KEY,
    order_id INTEGER NOT NULL,
    delivery_date TIMESTAMP NOT NULL,
    status delivery_status NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id)
);
CREATE INDEX idx_deliveries_order_id ON deliveries (order_id);

-- Create order_details table with primary key index (order_id, product_id)
CREATE TABLE IF NOT EXISTS order_details (
    order_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    PRIMARY KEY (order_id, product_id),
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);
