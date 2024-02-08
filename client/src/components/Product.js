import { useState } from "react";

const Product = ({ id, title, quantity, price, onUpdateProduct, onDeleteProduct }) => {
  const [values, setValues] = useState({
    title,
    price,
    quantity,
  });

  const [formVisibility, setFormVisibility] = useState(false);

  //neat way to handle all form inputs instead of making them individually
  const setFormValue = (name) => {
    return (e) => {
      setValues(oldValues => ({ ...oldValues, [name]: e.target.value }));
    }
  }

  const closeForm = () => {
    setFormVisibility(false);
  }

  const openForm = () => {
    setFormVisibility(true);
  }

  const handleCancel = () => {
    setValues({ title: title, price: price, quantity: quantity });
    closeForm();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateProduct(id, values, closeForm);
  }

  const handleDelete = () => {
    onDeleteProduct(id);
  }

  return (
    <>
      {formVisibility ?
        <li className="product">
          <div className="product-details">
            <h3>{title}</h3>
            <p className="price">{price}</p>
            <p className="quantity">{quantity} left in stock</p>
            <div className="actions product-actions">
              <button className="add-to-cart">Add to Cart</button>
              <button className="edit" onClick={openForm}>Edit</button>
            </div>
            <button className="delete-button" onClick={handleDelete}><span>X</span></button>
          </div>
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
        </li>
        :
        <li className="product">
          <div className="product-details">
            <h3>{title}</h3>
            <p className="price">{price}</p>
            <p className="quantity">{quantity} left in stock</p>
            <div className="actions product-actions">
              <button className="add-to-cart">Add to Cart</button>
              <button className="edit" onClick={openForm}>Edit</button>
            </div>
            <button className="delete-button" onClick={handleDelete}><span>X</span></button>
          </div>
        </li>
      }
    </>
  )
}

export default Product