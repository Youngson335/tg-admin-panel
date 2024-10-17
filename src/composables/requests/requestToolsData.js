import axios from "axios";

export async function postToolsData(api, data) {
  console.log(data);
  try {
    const response = await axios.post(
      `${api.link}/start-broadcast`,
      JSON.stringify(data),
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": api.key,
        },
      }
    );
    console.log("Successful response:", response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Server error:", error.response.data);
      throw new Error(`Server error: ${error.response.data}`);
    } else if (error.request) {
      console.error("No response:", error.request);
      throw new Error("No response from server.");
    } else {
      console.error("Error:", error.message);
      throw new Error(error.message);
    }
  }
}

export async function getToolsData(api) {
  try {
    const response = await axios.get(`${api.link}/start-broadcast`, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": api.key,
      },
    });
    console.log("Successful response:", response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Server error:", error.response.data);
      throw new Error(`Server error: ${error.response.data}`);
    } else if (error.request) {
      console.error("No response:", error.request);
      throw new Error("No response from server.");
    } else {
      console.error("Error:", error.message);
      throw new Error(error.message);
    }
  }
}
