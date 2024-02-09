import EditableProduct from "./EditableProduct";

const ProductList = ({ products, onUpdateProduct, onDeleteProduct, onAddToCart }) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul className="product-list">
        {
          products.map((productItem) => {
            return <EditableProduct key={productItem._id} id={productItem._id} title={productItem.title} quantity={productItem.quantity} price={productItem.price} onUpdateProduct={onUpdateProduct} onDeleteProduct={onDeleteProduct} onAddToCart={onAddToCart} />
          })
        }
      </ul>
    </div>
  )
}

export default ProductList