import { lazy } from "react";
import UploadBlog from "../../views/seller/UploadBlog";
import Category from "../../views/admin/AddSector";
import Coupon from "../../views/seller/FreelanceProjects";
import Uploadbanner from "../../views/seller/Uploadbanner";
import GiftProduct from "../../views/seller/AllConsultants";
import AllGift from "../../views/seller/AllEnterprises";
const SellerDashboard = lazy(() =>
  import("../../views/seller/MainDashboard")
);
const AddProduct = lazy(() => import("../../views/seller/AddProject"));
const Products = lazy(() => import("../../views/seller/AllProject"));
const DiscountProducts = lazy(() =>
  import("../../views/seller/ExecutionProject")
);
const Orders = lazy(() => import("../../views/seller/Orders"));
const Payments = lazy(() => import("../../views/seller/Payments"));
const SellerToAdmin = lazy(() => import("../../views/seller/SellerToAdmin"));
const SellerToCustomer = lazy(() =>
  import("../../views/seller/SellerToCustomer")
);
const Profile = lazy(() => import("../../views/seller/Profile"));
const EditProduct = lazy(() => import("../../views/seller/EditProduct"));
const OrderDetails = lazy(() => import("../../views/seller/OrderDetails"));
const Pending = lazy(() => import("../../views/Pending"));
const Deactive = () => import("../../views/Deactive");
export const sellerRoutes = [
  {
    path: "/seller/account-pending",
    element: <Pending />,
    ability: "seller",
  },
  {
    path: "/seller/account-deactive",
    element: <Deactive />,
    ability: "seller",
  },

  {
    path: "/seller/dashboard",
    element: <SellerDashboard />,
    role: "seller",
    status: "active",
  },

  {
    path: "/seller/dashboard/category",
    element: <Category />,
    role: "seller",
    status: "active",
  },

  {
    path: "/seller/dashboard/add-product",
    element: <AddProduct />,
    role: "seller",
    status: "active",
  },

  {
    path: "/seller/dashboard/add-gift",
    element: <GiftProduct />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/all-gift",
    element: <AllGift />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/upload-banner",
    element: <Uploadbanner />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/add-coupon",
    element: <Coupon />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/add-blogs",
    element: <UploadBlog />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/edit-product/:productId",
    element: <EditProduct />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/products",
    element: <Products />,
    role: "seller",
    status: "active",
  },

  {
    path: "/seller/dashboard/discount-products",
    element: <DiscountProducts />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/orders",
    element: <Orders />,
    role: "seller",
    visibility: ["active", "deactive"],
  },
  {
    path: "/seller/dashboard/order/details/:orderId",
    element: <OrderDetails />,
    role: "seller",
    visibility: ["active", "deactive"],
  },
  {
    path: "/seller/dashboard/payments",
    element: <Payments />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/chat-support",
    element: <SellerToAdmin />,
    role: "seller",
    visibility: ["active", "deactive", "pending"],
  },
  {
    path: "/seller/dashboard/chat-customer/:customerId",
    element: <SellerToCustomer />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/chat-customer",
    element: <SellerToCustomer />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/profile",
    element: <Profile />,
    role: "seller",
    visibility: ["active", "deactive", "pending"],
  },
];
