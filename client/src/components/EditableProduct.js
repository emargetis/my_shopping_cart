import { useState } from "react";
import Product from "./Product";
import UpdateProductForm from "./UpdateProductForm";

const EditableProduct = ({ id, title, quantity, price, onUpdateProduct, onDeleteProduct, onAddToCart }) => {
  const [formVisibility, setFormVisibility] = useState(false);

  const closeForm = () => {
    setFormVisibility(false);
  }

  const openForm = () => {
    setFormVisibility(true);
  }

  const handleDelete = () => {
    onDeleteProduct(id);
  }

  const handleAddToCart = () => {
    onAddToCart({ productId: id });
  }

  return (
    <li className="product">
      <div className="product-details">
        <Product title={title} quantity={quantity} price={price} />
        <div className="actions product-actions">
          {quantity === 0 ?
            <button className="add-to-cart" disabled={true}>Add to Cart</button>
            : <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
          }
          <button className="edit" onClick={openForm}>Edit</button>
        </div>
        <button className="delete-button" onClick={handleDelete}><span>X</span></button>
      </div>
      {formVisibility ?
        <UpdateProductForm id={id} title={title} quantity={quantity} price={price} onUpdateProduct={onUpdateProduct} closeForm={closeForm} />
        : <></>
      }
    </li >
  )
}

export default EditableProduct