import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./CartIcon.module.scss";

const CartIcon = (
  <span className={styles.cart}>
    <Link to="/cart">
      Cart
      <FaShoppingCart size={20} />
      <p>0</p>
    </Link>
  </span>
);

export default CartIcon;
