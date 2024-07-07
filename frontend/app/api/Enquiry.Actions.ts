'use server';

export async function submitEnquiry(enquiryData: any) {
    const url = 'http://localhost:8000/enquiry';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(enquiryData),
      });
      if (!response.ok) {
        throw new Error(`Error submitting enquiry with status code: ${response.status}`);
      }
      return response.json()
    } catch (error) {
      console.error(error);
    }
  }