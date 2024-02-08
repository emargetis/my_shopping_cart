const Header = () => {


  return (
    <header>
      <h1>The Shop</h1>
      <div className="cart">
        <h2>Your Cart</h2>
        <p>Your cart is empty</p>
        <p>Total: $0</p>
        <button className={"checkout"} disabled={true}>Checkout</button>
      </div>
    </header>
  )
}

export default Header;