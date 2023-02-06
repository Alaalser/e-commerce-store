import styles from "./auth.module.scss";
import loginImg from "../../assets/login.png";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { Card } from "../../components";

const Login = () => {
  return (
    <section className={`container ${styles.auth}`}>
      <div>
        <img
          className={styles.img}
          src={loginImg}
          alt="Login"
          placeholder="Email"
          width={400}
        />
      </div>
      <Card>
        <div className={styles.form}>
          <h2>Login</h2>
          <form>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button className="--btn --btn-primary --btn-block">Login</button>
            <div className={styles.links}>
              <Link to="/rest">Reset Password</Link>
            </div>
          </form>
          <button className="--btn --btn-danger --btn-block">
            <FaGoogle />
            Login with Google
          </button>
          <span className={styles.register}>
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </span>
        </div>
      </Card>
    </section>
  );
};

export default Login;
