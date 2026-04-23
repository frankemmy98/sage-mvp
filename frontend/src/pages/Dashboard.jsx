import { useEffect } from "react";
import { apiRequest } from "../utils/api";

export default function Dashboard() {
  useEffect(() => {
    const loadItems = async () => {
      const data = await apiRequest("/api/items");
      console.log(data);
    };

    loadItems();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}
