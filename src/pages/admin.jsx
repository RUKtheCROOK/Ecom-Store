import "./admin.css";
import AdminProducts from "./../components/adminproducts";
import Coupon from "./../components/coupon";

function Admin() {
  return (
    <div className="admin container">
      <h1>Admin</h1>
      <div className="flex">
        <AdminProducts />
        <Coupon />
      </div>
    </div>
  );
}

export default Admin;
