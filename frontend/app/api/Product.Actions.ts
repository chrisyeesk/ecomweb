'use server';

export async function getProducts() {
  const url = 'http://backend:8000/products';
  try {
    const response = await fetch(url);
    console.log('response', response);
    if (!response.ok) {
      throw new Error(
        `Error getting products with status code: ${response.status}`
      );
    }
    const json = await response.json();
    return json.message;
  } catch (error) {
    console.error(error);
  }
}
