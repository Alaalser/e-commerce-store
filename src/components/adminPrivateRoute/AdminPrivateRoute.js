import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectEmail } from "../../redux/slice/authSlice";

const AdminPrivateRoute = ({ children }) => {
  const userEmail = useSelector(selectEmail);

  console.log("suer", userEmail);

  if (userEmail === "test@gmail.com") {
    return children;
  }
  return null;
};

export const AdminOnlyLink = ({ children }) => {
  const userEmail = useSelector(selectEmail);

  if (userEmail === "test@gmail.com") {
    return children;
  }
  return null;
};

export default AdminPrivateRoute;
