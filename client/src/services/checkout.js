import axios from "axios";

export const checkout = async () => {
  await axios.post("/api/checkout");
}