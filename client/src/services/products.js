import axios from "axios";


export const getProducts = async () => {
  const { data } = await axios.get("/api/products");
  return data;
}

export const addProduct = async (formData) => {
  const { data } = await axios.post("/api/products", formData);
  return data;
}

export const updateProduct = async (id, formData) => {
  const { data } = await axios.put(`/api/products/${id}`, formData);
  return data;
}

export const deleteProduct = async (id) => {
  await axios.delete(`/api/products/${id}`);
}