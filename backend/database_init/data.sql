-- Populate categories table
INSERT INTO categories (name, description)
VALUES
    ('Electronics', 'Devices and gadgets powered by electricity'),
    ('Clothing', 'Apparel and garments for various occasions'),
    ('Home Decor', 'Items used to decorate homes and living spaces'),
    ('Books', 'Literature and educational materials'),
    ('Sports Equipment', 'Gear and accessories for sports activities');

-- Populate products table 
-- Electronics data
DO $$
DECLARE
    category_id INTEGER;
BEGIN
    SELECT id INTO category_id
    FROM categories
    WHERE name = 'Electronics';

    INSERT INTO products (category_id, name, price, description, stock_quantity, image_url, brand, color)
    VALUES
        (category_id, 'Laptop', 999.99, 'High-performance laptop with SSD storage', 10, ARRAY['http://example.com/image1.jpg', 'http://example.com/image2.jpg'], 'BrandX', ARRAY['Black', 'Silver']),
        (category_id, 'Smartphone', 699.99, 'Latest smartphone model with dual camera', 20, ARRAY['http://example.com/image3.jpg'], 'BrandY', ARRAY['Blue']),
        (category_id, 'Tablet', 399.99, 'Lightweight tablet for everyday use', 15, ARRAY['http://example.com/image4.jpg'], 'BrandZ', ARRAY['White']),
        (category_id, 'Headphones', 149.99, 'Noise-canceling headphones with Bluetooth', 30, ARRAY['http://example.com/image5.jpg'], 'BrandA', ARRAY['Black']),
        (category_id, 'Smartwatch', 199.99, 'Fitness tracker with heart rate monitor', 25, ARRAY['http://example.com/image6.jpg'], 'BrandB', ARRAY['Red']);

    RAISE NOTICE 'Inserted electronics products with category_id: %', category_id;
END $$;

-- Clothing data
DO $$
DECLARE
    category_id INTEGER;
BEGIN
    SELECT id INTO category_id
    FROM categories
    WHERE name = 'Clothing';

    INSERT INTO products (category_id, name, price, description, stock_quantity, image_url, brand, color)
    VALUES
        (category_id, 'T-Shirt', 19.99, 'T-Shirt porro quisquam est qui dolorem ipsum', 10, ARRAY['http://example.com/image1.jpg', 'http://example.com/image2.jpg'], 'BrandX', ARRAY['Black', 'Silver']),
        (category_id, 'Sweater', 99.99, 'Sweater porro quisquam est qui dolorem ipsum', 20, ARRAY['http://example.com/image3.jpg'], 'BrandY', ARRAY['Blue']),
        (category_id, 'Pants', 69.99, 'Pants porro quisquam est qui dolorem ipsum', 15, ARRAY['http://example.com/image4.jpg'], 'BrandZ', ARRAY['White']),
        (category_id, 'Shirt', 77.99, 'Shirt porro quisquam est qui dolorem ipsum', 30, ARRAY['http://example.com/image5.jpg'], 'BrandA', ARRAY['Black']),
        (category_id, 'Jacket', 199.99, 'Jacket porro quisquam est qui dolorem ipsum', 25, ARRAY['http://example.com/image6.jpg'], 'BrandB', ARRAY['Red']);

    RAISE NOTICE 'Inserted clothing products with category_id: %', category_id;
END $$;