import axios from "axios";


export const getCart = async () => {
  const { data } = await axios.get("/api/cart");
  return data;
}

export const addToCart = async (idData) => {
  const { data } = await axios.post("/api/add-to-cart", idData);
  return [data.product, data.item];
}