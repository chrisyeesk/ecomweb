'use server';

export async function getProducts() {
  const url = '/products/';
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Error getting products with status code: ${response.status}`
      );
    }
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error);
  }
}
