const API_URL = "https://example.com/api"; // replace with your actual API URL

export const getTRLList = async () => {
  try {
    const response = await fetch(`${API_URL}/trl`);
    const data = await response.json();
    return data.trlList; // assuming that the TRL list is returned as an array of objects with `value` and `label` properties
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch TRL list.");
  }
};
