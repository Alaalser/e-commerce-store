import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaTimes, FaUserCircle } from "react-icons/fa";
import { Logo, CartIcon } from "./components";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/config";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import {
  SET_ACTIVE_USER,
  REMOVE_ACTIVE_USER,
} from "../../redux/slice/authSlice";
import ShowOnLogin, { ShowOnLogout } from "../hiddenLink/hiddenLink";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  const activeLink = ({ isActive }) => {
    return isActive ? `${styles.active}` : "";
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // const uid = user.uid;
        setDisplayName(user.displayName);

        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            userName: user.displayName,
            userID: user.uid,
          })
        );
      } else {
        setDisplayName("");
        dispatch(REMOVE_ACTIVE_USER());
      }
    });
  }, [dispatch, displayName]);

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout successfully.");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <header>
      <div className={styles.header}>
        {Logo}

        <nav
          className={
            showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`
          }
        >
          <div
            className={
              showMenu
                ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}`
                : `${styles["nav-wrapper"]}`
            }
            onClick={hideMenu}
          ></div>

          <ul onClick={hideMenu}>
            <li className={styles["logo-mobile"]}>
              {Logo}
              <FaTimes size={22} color="#fff" onClick={hideMenu} />
            </li>
            <li>
              <NavLink to="/" className={activeLink}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={activeLink}>
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className={styles["header-right"]} onClick={hideMenu}>
            <span className={styles.links}>
              <ShowOnLogout>
                <NavLink to="/login" className={activeLink}>
                  Login
                </NavLink>
              </ShowOnLogout>
              <ShowOnLogin>
                <Link href="#">
                  <FaUserCircle size={16} />
                  Hi, {displayName}
                </Link>
                <NavLink to="/order-history" className={activeLink}>
                  My Orders
                </NavLink>
              </ShowOnLogin>
              <ShowOnLogin>
                <NavLink to="/" onClick={logoutUser}>
                  Log out
                </NavLink>
              </ShowOnLogin>
            </span>
            {CartIcon}
          </div>
        </nav>

        <div className={styles["menu-icon"]}>
          {CartIcon}
          <HiOutlineMenuAlt3 size={28} onClick={toggleMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
