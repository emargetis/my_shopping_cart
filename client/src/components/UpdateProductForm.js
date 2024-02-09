import { useState } from "react";

const UpdateProductForm = ({ id, title, quantity, price, onUpdateProduct, closeForm }) => {
  const [values, setValues] = useState({
    title,
    price,
    quantity,
  });

  //neat way to handle all form inputs instead of making them individually
  const setFormValue = (name) => {
    return (e) => {
      setValues(oldValues => ({ ...oldValues, [name]: e.target.value }));
    }
  }

  const handleCancel = () => {
    setValues({ title: title, price: price, quantity: quantity });
    closeForm();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateProduct(id, values, closeForm);
  }

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input
            type="text"
            id="product-name"
            value={values.title}
            aria-label="Product Name"
            onChange={setFormValue('title')}
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input
            type="number"
            id="product-price"
            value={values.price}
            aria-label="Product Price"
            onChange={setFormValue('price')}
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input
            type="number"
            id="product-quantity"
            value={values.quantity}
            aria-label="Product Quantity"
            onChange={setFormValue('quantity')}
          />
        </div>

        <div className="actions form-actions">
          <button type="submit">Update</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default UpdateProductForm;