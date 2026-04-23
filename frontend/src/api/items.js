import { apiRequest } from "../utils/api";

export const addItem = async (title, description) => {
  return await apiRequest("/api/items/add", {
    method: "POST",
    body: JSON.stringify({ title, description }),
  });
};
