export const fetchRequest = async (url, method, payload) => {
  try {
    const res = await fetch(`http://localhost:9000/${url}`, {
      method: method, // HTTP method (GET, POST, PUT, DELETE, etc.)
      headers: {
        "Content-Type": "application/json", // Set the content type of the request body
        // Add any additional headers if required
      },
      body: JSON.stringify(payload), // Convert the data object to a JSON string
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
