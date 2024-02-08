import Product from "./Product";

const ProductList = ({ products, onUpdateProduct, onDeleteProduct }) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul className="product-list">
        {
          products.map((productItem) => {
            return <Product key={productItem._id} id={productItem._id} title={productItem.title} quantity={productItem.quantity} price={productItem.price} onUpdateProduct={onUpdateProduct} onDeleteProduct={onDeleteProduct} />
          })
        }
      </ul>
    </div>
  )
}

export default ProductList