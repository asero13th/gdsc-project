import { Link } from "react-router-dom";
function Unauthorized() {
  return (
    <div>
      <h1>Unauthorized Access</h1>
      <p>You must be logged in as an admin to access this page.</p>
      <Link to="/admin/login">Login</Link>
    </div>
  );
}
export default Unauthorized