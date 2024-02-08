import { useState, useEffect } from "react";
// import initProductData from "../../mockData/data";
import Header from "./Header";
import ProductList from "./ProductList";
import AddProductForm from "./AddProductForm";
import { getProducts, addProduct, updateProduct, deleteProduct } from "../services/products";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let data = await getProducts();
        setProducts(data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchProducts();

  }, [])

  const handleAddProduct = async (formData, callback) => {
    try {
      let newProduct = await addProduct(formData);
      setProducts([...products, newProduct]);
      if (callback) {
        callback();
      }
    } catch (e) {
      console.log(e);
    }
  }

  const handleUpdateProduct = async (id, formData, callback) => {
    try {
      let updatedProduct = await updateProduct(id, formData);
      setProducts(products.map(productItem => {
        if (productItem._id === id) {
          return { ...productItem, ...updatedProduct } //replace with new values
        } else {
          return productItem
        }
      }))
      if (callback) {
        callback();
      }
    } catch (e) {
      console.log(e);
    }
  }

  const handleDeleteProduct = async (id) => {
    try {
      await deleteProduct(id);
      setProducts(products.filter(productItem => productItem._id !== id))
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <Header />
      <main>
        <ProductList products={products} onUpdateProduct={handleUpdateProduct} onDeleteProduct={handleDeleteProduct} />
        <AddProductForm onAddProduct={handleAddProduct} />
      </main>
    </div>
  );
};

export default App;