import { useState, useEffect } from "react";
// import initProductData from "../../mockData/data";
import Header from "./Header";
import ProductList from "./ProductList";
import AddProductForm from "./AddProductForm";
import { getProducts, addProduct, updateProduct, deleteProduct } from "../services/products";
import { getCart, addToCart } from "../services/cart";
import { checkout } from "../services/checkout";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

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

  useEffect(() => {
    const fetchCart = async () => {
      try {
        let data = await getCart();
        setCart(data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchCart();
  }, [])

  /************************************/
  const handleCheckout = async () => {
    try {
      await checkout();
      setCart([]);
    } catch (e) {
      console.log(e);
    }
  }

  /************************************/
  const handleAddToCart = async (formData) => {
    try {
      let [updatedProduct, updatedItem] = await addToCart(formData);

      //update products
      setProducts(products.map(productItem => {
        if (productItem._id === updatedProduct._id) {
          return { ...productItem, ...updatedProduct } //replace with new values
        } else {
          return productItem
        }
      }))

      //update cart
      let newIndex = cart.findIndex((cartItem) => cartItem._id === updatedItem._id);
      let newCart;
      if (newIndex > -1) {
        newCart = cart.toSpliced(newIndex, 1, updatedItem);
      } else {
        newCart = [...cart, updatedItem];
      }
      setCart(newCart);
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

  /************************************/
  const handleAddProduct = async (idData, callback) => {
    try {
      let newProduct = await addProduct(idData);
      setProducts([...products, newProduct]);
      if (callback) {
        callback();
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <Header cart={cart} onCheckout={handleCheckout} />
      <main>
        <ProductList products={products} onUpdateProduct={handleUpdateProduct} onDeleteProduct={handleDeleteProduct} onAddToCart={handleAddToCart} />
        <AddProductForm onAddProduct={handleAddProduct} />
      </main>
    </div>
  );
};

export default App;