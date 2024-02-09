import { useState } from "react";

const AddProductForm = ({ onAddProduct }) => {
  const [values, setValues] = useState({
    title: '',
    price: 0,
    quantity: 0,
  });

  const [formVisibility, setFormVisibility] = useState(false);

  //neat way to handle all form inputs instead of making them individually
  const setFormValue = (name) => {
    return (e) => {
      setValues(oldValues => ({ ...oldValues, [name]: e.target.value }));
    }
  }

  const resetCloseForm = () => {
    setValues({ title: '', price: 0, quantity: 0 });
    closeForm();
  }

  const closeForm = () => {
    setFormVisibility(false);
  }

  const openForm = () => {
    setFormVisibility(true);
  }

  const handleCancel = () => {
    resetCloseForm();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(values, resetCloseForm);
  }

  return (
    <div className="add-form">
      <p><button className="add-product-button" onClick={openForm}>Add A Product</button></p>
      {formVisibility ?
        <>
          <h3>Add Product</h3>
          <form onSubmit={handleSubmit} action="">
            <div className="input-group">
              <label htmlFor="product-name">Product Name:</label>
              <input
                type="text"
                id="product-name"
                name="product-name"
                value={values.title}
                onChange={setFormValue('title')}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="product-price">Price:</label>
              <input
                type="number"
                id="product-price"
                name="product-price"
                value={values.price}
                onChange={setFormValue('price')}
                min="0"
                step="0.01"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="product-quantity">Quantity:</label>
              <input
                type="number"
                id="product-quantity"
                name="product-quantity"
                value={values.quantity}
                onChange={setFormValue('quantity')}
                min="0"
                required
              />
            </div>
            <div className="actions form-actions">
              <button type="submit">Add</button>
              <button type="button" onClick={handleCancel}>Cancel</button>
            </div>
          </form>
        </> : <></>
      }
    </div>
  )
}

export default AddProductForm;