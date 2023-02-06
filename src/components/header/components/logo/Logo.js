import { Link } from "react-router-dom";
import styles from "./Logo.module.scss";

const Logo = (
  <div className={styles.logo}>
    <Link to="/">
      <h2>
        e<span>Shop</span>.
      </h2>
    </Link>
  </div>
);

export default Logo;
