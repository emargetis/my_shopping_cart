const CartDisplay = ({ cart, onCheckout }) => {
  const handleCheckout = () => {
    onCheckout();
  }

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ?
        <>
          <p>Your cart is empty</p>
          <p>Total: $0</p>
          <button className={"checkout"} disabled={true}>Checkout</button>
        </>
        :
        <>
          <table className="cart-items">
            <thead>
              <tr>
                <th scope="col">Item</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {
                cart.map(product => {
                  return (
                    <tr key={product._id}>
                      <td>{product.title}</td>
                      <td>{product.quantity}</td>
                      <td>${product.price}</td>
                    </tr>
                  )
                })
              }
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3" className="total">
                  Total: ${
                    cart.reduce((accumulator, product) => {
                      return accumulator += product.price * product.quantity
                    }, 0).toFixed(2)
                  }
                </td>
              </tr>
            </tfoot>
          </table>
          <button className={"checkout"} onClick={handleCheckout}>Checkout</button>
        </>
      }
    </div>
  )
}

export default CartDisplay;