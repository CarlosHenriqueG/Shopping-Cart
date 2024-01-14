import propTypes from "prop-types";
import { useContext } from "react";
import { BsCartDashFill } from "react-icons/bs";
import { AppContext } from "../../context/AppContext";
import { formatCurrency } from "../../utils/formatCurrency";
import "./CartItem.css";

CartItem.propTypes = {
  data: propTypes.object,
}.isRequired;

export function CartItem({ data }) {
  const { cartItems, setCartItems } = useContext(AppContext);
  const { id, thumbnail, title, price } = data;

  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
  };

  return (
    <>
      <section className="cart-item">
        <img
          src={thumbnail}
          className="cart-item-image"
          alt="Imagem do produto"
        />

        <div className="cart-item-content">
          <h3 className="cart-item-title">{title}</h3>
          <h3 className="cart-item-price">{formatCurrency(price, "BRL")}</h3>

          <button className="button__remove-item" onClick={handleRemoveItem}>
            <BsCartDashFill />
          </button>
        </div>
      </section>
    </>
  );
}
