import CartDisplay from "./CartDisplay";

const Header = ({ cart, onCheckout }) => {
  return (
    <header>
      <h1>The Shop</h1>
      <CartDisplay cart={cart} onCheckout={onCheckout} />
    </header>
  )
}

export default Header;