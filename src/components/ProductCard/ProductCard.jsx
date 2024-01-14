/* eslint-disable no-undef */
import propTypes from "prop-types";
import { useContext } from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import { AppContext } from "../../context/AppContext";
import { formatCurrency } from "../../utils/formatCurrency";
import "./ProductCard.css";

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;

export function ProductCard({ data }) {
  const { title, thumbnail, price } = data;

  const { cartItems, setCartItems } = useContext(AppContext);

  const handleAddCart = () => {
    setCartItems([...cartItems, data]);
  };

  return (
    <>
      <section className="product-card">
        <img
          src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
          alt="product"
          className="card__image"
        />

        <div className="card__infos">
          <h2 className="card__price">{formatCurrency(price, "BRL")}</h2>
          <h2 className="card__title">{title}</h2>
        </div>
        <button
          onClick={handleAddCart}
          type="button"
          className="button__add-cart"
        >
          <BsFillCartPlusFill />
        </button>
      </section>
    </>
  );
}
