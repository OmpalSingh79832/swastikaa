// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { BsImages } from "react-icons/bs";
// import { IoCloseSharp } from "react-icons/io5";
// import { useSelector, useDispatch } from "react-redux";
// import toast from "react-hot-toast";
// import { PropagateLoader } from "react-spinners";
// import { overrideStyle } from "../../utils/utils";
// import { get_category } from "../../store/Reducers/categoryReducer";
// // import { add_product, messageClear } from "../../store/Reducers/productReducer";
// import {
//   add_gift,
//   //   get_gift,
//   messageClear,
// } from "../../store/Reducers/giftReducer";
// import { useNavigate } from "react-router-dom";


import React, { useState, useEffect } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "../Pagination";
import Search from "../components/Search";
import Swal from "sweetalert2";

import {
  get_gift,
  get_gifts,
  delete_gift,
} from "../../store/Reducers/giftReducer";

const GiftProduct = () => {
  // const dispatch = useDispatch();
  // const { categorys } = useSelector((state) => state.category);
  // const { successMessage, errorMessage, loader } = useSelector(
  //   (state) => state.gift
  // );

  // useEffect(() => {
  //   dispatch(
  //     get_category({
  //       searchValue: "",
  //       parPage: "",
  //       page: "",
  //     })
  //   );
  // }, [dispatch]);

  // const [state, setState] = useState({
  //   name: "",
  //   description: "",
  //   discount: "",
  //   price: "",
  //   brand: "",
  //   stock: "",
  //   weight: "",
  //   unit: "GM",
  //   ingredients: "",
  //   storageinfo: "",
  //   ingrediennts: "",
  //   benefits: [""],
  // });

  // const inputHandle = (e, index, field, type) => {
  //   const { name, value } = e.target;
  //   if (type === "benefits") {
  //     const updatedBenefits = [...state.benefits];
  //     updatedBenefits[index] = value;
  //     setState({ ...state, benefits: updatedBenefits });
  //   } else {
  //     setState((prevState) => ({
  //       ...prevState,
  //       [name]: value,
  //     }));
  //   }
  // };

  // const addBenefitPoint = () => {
  //   setState((prevState) => ({
  //     ...prevState,
  //     benefits: [...prevState.benefits, ""],
  //   }));
  // };

  // const [cateShow, setCateShow] = useState(false);
  // const [category, setCategory] = useState("");
  // const [allCategory, setAllCategory] = useState([]);
  // const [searchValue, setSearchValue] = useState("");
  // const [images, setImages] = useState([]);
  // const [imageShow, setImageShow] = useState([]);

  // const categorySearch = (e) => {
  //   const value = e.target.value;
  //   setSearchValue(value);
  //   if (value) {
  //     let srcValue = allCategory.filter(
  //       (c) => c.name.toLowerCase().indexOf(value.toLowerCase()) > -1
  //     );
  //     setAllCategory(srcValue);
  //   } else {
  //     setAllCategory(categorys);
  //   }
  // };

  // const inmageHandle = (e) => {
  //   const files = e.target.files;
  //   const length = files.length;

  //   if (length > 0) {
  //     setImages([...images, ...files]);
  //     let imageUrl = [];

  //     for (let i = 0; i < length; i++) {
  //       imageUrl.push({ url: URL.createObjectURL(files[i]) });
  //     }
  //     setImageShow([...imageShow, ...imageUrl]);
  //   }
  // };

  // const changeImage = (img, index) => {
  //   if (img) {
  //     let tempUrl = imageShow;
  //     let tempImages = images;

  //     tempImages[index] = img;
  //     tempUrl[index] = { url: URL.createObjectURL(img) };
  //     setImageShow([...tempUrl]);
  //     setImages([...tempImages]);
  //   }
  // };

  // const removeImage = (i) => {
  //   const filterImage = images.filter((img, index) => index !== i);
  //   const filterImageUrl = imageShow.filter((img, index) => index !== i);
  //   setImages(filterImage);
  //   setImageShow(filterImageUrl);
  // };

  // useEffect(() => {
  //   setAllCategory(categorys);
  // }, [categorys]);

  // const add = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();

  //   // Append basic product details
  //   formData.append("name", state.name);
  //   formData.append("description", state.description);
  //   formData.append("storageinfo", state.storageinfo);
  //   formData.append("ingrediennts", state.ingrediennts);
  //   formData.append("price", state.price);
  //   formData.append("stock", state.stock);
  //   formData.append("category", category);
  //   formData.append("discount", state.discount);
  //   formData.append("shopName", "Farid Fashion");
  //   formData.append("brand", state.brand);
  //   formData.append("weight", state.weight);
  //   formData.append("unit", state.unit);

  //   // Append benefits
  //   state.benefits.forEach((benefit, index) => {
  //     formData.append(`benefits[${index}]`, benefit);
  //   });

  //   // Append ingredients (if you have it in state)
  //   if (state.ingredients) {
  //     formData.append("ingredients", state.ingredients);
  //   }

  //   // Append images
  //   for (let i = 0; i < images.length; i++) {
  //     formData.append("images", images[i]);
  //   }

  //   // Dispatch action to add product
  //   dispatch(add_gift(formData));
  //   // for (let pair of formData.entries()) {
  //   //   console.log(pair[0] + ": ", pair[1]);
  //   // }
  // };

  // useEffect(() => {
  //   if (errorMessage) {
  //     toast.error(errorMessage);
  //     dispatch(messageClear());
  //   }
  //   if (successMessage) {
  //     toast.success(successMessage);
  //     dispatch(messageClear());
  //     setState({
  //       name: "",
  //       description: "",
  //       storageinfo: "",
  //       ingrediennts: "",
  //       discount: "",
  //       price: "",
  //       brand: "",
  //       stock: "",
  //       category: "",
  //     });
  //     setImageShow([]);
  //     setImages([]);
  //     setCategory("");
  //   }
  // }, [successMessage, errorMessage, dispatch]);

  const dispatch = useDispatch();
  const { gifts, totalgift, successMessage } = useSelector(
    (state) => state.gift
  );

  console.log("gift", gifts);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [parPage, setParPage] = useState(5);

  useEffect(() => {
    dispatch(get_gifts());
  }, [dispatch]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(delete_gift(id));
        Swal.fire("Deleted!", "Your product has been deleted.", "success");
      }
    });
  };

  const allcunsultants = [
    {
      id: 1,
      name: "John Doe",
      phone: "+91 9876543210",
      dob: "1990-05-15",
      email: "john.doe@example.com",
      role: "Manager",
      sector: "Automobile",
      bio: "Experienced manager in the automobile sector with expertise in supply chain and production.",
      address: "123, Street Name, New Delhi, India",
      status: "Active",
    },
    {
      id: 2,
      name: "Aarav Mehta",
      phone: "+91 9988776655",
      dob: "1985-08-22",
      email: "aarav.mehta@example.com",
      role: "Engineer",
      sector: "Electronics",
      bio: "Specialist in circuit design and embedded systems with 10 years of industry experience.",
      address: "456, Tech Park, Bangalore, India",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Priya Sharma",
      phone: "+91 9123456789",
      dob: "1993-11-30",
      email: "priya.sharma@example.com",
      role: "Supervisor",
      sector: "Textile",
      bio: "Oversees textile manufacturing processes and ensures quality control across production units.",
      address: "789, Industrial Area, Mumbai, India",
      status: "Active",
    },
    {
      id: 4,
      name: "Rohan Verma",
      phone: "+91 9001122334",
      dob: "1988-02-18",
      email: "rohan.verma@example.com",
      role: "Technician",
      sector: "Machinery",
      bio: "Expert in maintenance and troubleshooting of industrial machinery and automation systems.",
      address: "222, Machinery Lane, Chennai, India",
      status: "Pending",
    },
  ];

  return (
    // <div className="px-2 lg:px-7 pt-5 ">
    //   <div className="w-full p-4  bg-[#283046] rounded-md">
    //     <div className="flex justify-between items-center pb-4">
    //       <h1 className="text-[#d0d2d6] text-xl font-semibold">Add Consultants</h1>
    //       <Link
    //         className="bg-blue-500 hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-sm px-7 py-2 my-2 "
    //         to="/seller/dashboard/products"
    //       >
    //         Products
    //       </Link>
    //     </div>
    //     <div>
    //       <form onSubmit={add}>
    //         <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]">
    //           <div className="flex flex-col w-full gap-1">
    //             <label htmlFor="name">Product name</label>
    //             <input
    //               className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]"
    //               onChange={inputHandle}
    //               value={state.name}
    //               type="text"
    //               placeholder="product name"
    //               name="name"
    //               id="name"
    //             />
    //           </div>
    //           <div className="flex flex-col w-full gap-1">
    //             <label htmlFor="brand">Product brand</label>
    //             <input
    //               className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]"
    //               onChange={inputHandle}
    //               value={state.brand}
    //               type="text"
    //               placeholder="product brand"
    //               name="brand"
    //               id="brand"
    //             />
    //           </div>
    //         </div>
    //         <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]">
    //           <div className="flex flex-col w-full gap-1 relative">
    //             <label htmlFor="category">Category</label>
    //             <input
    //               readOnly
    //               onClick={() => setCateShow(!cateShow)}
    //               className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]"
    //               onChange={inputHandle}
    //               value={category}
    //               type="text"
    //               placeholder="--select category--"
    //               id="category"
    //             />
    //             <div
    //               className={`absolute top-[101%] bg-slate-800 w-full transition-all ${
    //                 cateShow ? "scale-100" : "scale-0"
    //               }`}
    //             >
    //               <div className="w-full px-4 py-2 fixed">
    //                 <input
    //                   value={searchValue}
    //                   onChange={categorySearch}
    //                   className="px-3 py-1 w-full focus:border-indigo-500 outline-none bg-transparent border border-slate-700 rounded-md text-[#d0d2d6] overflow-hidden"
    //                   type="text"
    //                   placeholder="search"
    //                 />
    //               </div>
    //               <div className="pt-14"></div>
    //               <div className="flex justify-start items-start flex-col h-[200px] overflow-x-scroll">
    //                 {allCategory.map((c, i) => (
    //                   <span
    //                     className={`px-4 py-2 hover:bg-indigo-500 hover:text-white hover:shadow-lg w-full cursor-pointer ${
    //                       category === c.name && "bg-indigo-500"
    //                     }`}
    //                     onClick={() => {
    //                       setCateShow(false);
    //                       setCategory(c.name);
    //                       setSearchValue("");
    //                       setAllCategory(categorys);
    //                     }}
    //                   >
    //                     {c.name}
    //                   </span>
    //                 ))}
    //               </div>
    //             </div>
    //           </div>
    //           <div className="flex flex-col w-full gap-1">
    //             <label htmlFor="stock">Stock</label>
    //             <input
    //               className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]"
    //               onChange={inputHandle}
    //               value={state.stock}
    //               type="number"
    //               min="0"
    //               placeholder="product stock"
    //               name="stock"
    //               id="stock"
    //             />
    //           </div>
    //         </div>
    //         <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]">
    //           <div className="flex flex-col w-full gap-1">
    //             <label htmlFor="price">Price</label>
    //             <input
    //               className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]"
    //               onChange={inputHandle}
    //               value={state.price}
    //               type="number"
    //               placeholder="price"
    //               name="price"
    //               id="price"
    //             />
    //           </div>
    //           <div className="flex flex-col w-full gap-1">
    //             <label htmlFor="weight">Weight (Gm, KG)</label>
    //             <div className="flex">
    //               <input
    //                 className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-l-md text-[#d0d2d6] flex-1"
    //                 onChange={inputHandle}
    //                 value={state.weight}
    //                 type="number"
    //                 placeholder="Weight"
    //                 name="weight"
    //                 id="weight"
    //               />
    //               <select
    //                 className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-r-md text-[#d0d2d6]"
    //                 onChange={inputHandle}
    //                 value={state.unit}
    //                 name="unit"
    //                 id="unit"
    //               >
    //                 <option value="GM">GM</option>
    //                 <option value="KG">KG</option>
    //               </select>
    //             </div>
    //           </div>
    //           <div className="flex flex-col w-full gap-1">
    //             <label htmlFor="discount">Discount</label>
    //             <input
    //               min="0"
    //               className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]"
    //               onChange={inputHandle}
    //               value={state.discount}
    //               type="number"
    //               placeholder="%discount%"
    //               name="discount"
    //               id="discount"
    //             />
    //           </div>
    //         </div>

    //         <div className="flex flex-col w-full gap-1 text-[#d0d2d6] mb-5">
    //           <label htmlFor="description">Description</label>
    //           <textarea
    //             rows={4}
    //             className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]"
    //             onChange={inputHandle}
    //             value={state.description}
    //             placeholder="description"
    //             name="description"
    //             id="description"
    //           ></textarea>
    //         </div>
       
    //         <div className="flex flex-col mb-3 w-full text-[#d0d2d6]">
    //           <label htmlFor="benefits">Product Points</label>
    //           {state.benefits &&
    //             state.benefits.map((be, index) => (
    //               <div key={index} className="flex items-center gap-2 mb-2">
    //                 <input
    //                   className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6] w-full"
    //                   onChange={(e) =>
    //                     inputHandle(e, index, "benefits", "benefits")
    //                   }
    //                   value={be.benefit}
    //                   type="text"
    //                   placeholder={`Point ${index + 1}`}
    //                   name={`benefits-${index}`}
    //                 />
    //                 {index > 0 && (
    //                   <button
    //                     type="button"
    //                     className="text-red-500"
    //                     onClick={() => {
    //                       const updatedBenefits = [...state.benefits];
    //                       updatedBenefits.splice(index, 1);
    //                       setState({ ...state, benefits: updatedBenefits });
    //                     }}
    //                   >
    //                     <IoCloseSharp />
    //                   </button>
    //                 )}
    //               </div>
    //             ))}
    //           <button
    //             type="button"
    //             className="bg-green-500 text-white rounded-sm px-4 py-2 mt-2"
    //             onClick={addBenefitPoint}
    //           >
    //             Add New Points
    //           </button>
    //         </div>
    //         <div className="flex flex-col w-full gap-1 text-[#d0d2d6] mb-5">
    //           <label htmlFor="ingrediennts">Shipping Time Information</label>
    //           <textarea
    //             rows={4}
    //             className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]"
    //             onChange={inputHandle}
    //             value={state.ingrediennts}
    //             placeholder="Shipping Timing..."
    //             name="ingrediennts"
    //             id="ingrediennts"
    //           ></textarea>
    //         </div>

    //         <div className="flex flex-col w-full gap-1 text-[#d0d2d6] mb-5">
    //           <label htmlFor="storageinfo">Shipping Charges Information</label>
    //           <textarea
    //             rows={4}
    //             className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]"
    //             onChange={inputHandle}
    //             value={state.storageinfo}
    //             placeholder="Shipping Charges..."
    //             name="storageinfo"
    //             id="storageinfo"
    //           ></textarea>
    //         </div>

    //         <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 md:gap-4 xs:gap-4 gap-3 w-full text-[#d0d2d6] mb-4">
    //           {imageShow.map((img, i) => (
    //             <div className="h-[180px] relative">
    //               <label htmlFor={i}>
    //                 <img
    //                   className="w-full h-full rounded-sm"
    //                   src={img.url}
    //                   alt=""
    //                 />
    //               </label>
    //               <input
    //                 onChange={(e) => changeImage(e.target.files[0], i)}
    //                 type="file"
    //                 id={i}
    //                 className="hidden"
    //               />
    //               <span
    //                 onClick={() => removeImage(i)}
    //                 className="p-2 z-10 cursor-pointer bg-slate-700 hover:shadow-lg hover:shadow-slate-400/50 text-white absolute top-1 right-1 rounded-full"
    //               >
    //                 <IoCloseSharp />
    //               </span>
    //             </div>
    //           ))}
    //           <label
    //             className="flex justify-center items-center flex-col h-[180px] cursor-pointer border border-dashed hover:border-indigo-500 w-full text-[#d0d2d6]"
    //             htmlFor="image"
    //           >
    //             <span>
    //               <BsImages />
    //             </span>
    //             <span>select image</span>
    //           </label>
    //           <input
    //             multiple
    //             onChange={inmageHandle}
    //             className="hidden"
    //             type="file"
    //             id="image"
    //           />
    //         </div>

    //         <div className="flex">
    //           <button
    //             disabled={loader ? true : false}
    //             className="bg-blue-500 w-[190px] hover:shadow-blue-500/20 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3"
    //           >
    //             {loader ? (
    //               <PropagateLoader color="#fff" cssOverride={overrideStyle} />
    //             ) : (
    //               "Add product"
    //             )}
    //           </button>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>

    <div className="px-2 lg:px-7 pt-5">
    <div className="w-full p-4  bg-[#283046] rounded-md">
     <div className="flex gap-4">
     <select className="mb-8 p-2 rounded-sm">
        <option value="1">Choose Sector</option>
        <option value="1">IT</option>
        <option value="1">Civil</option>
        <option value="1">Mechanical</option>
      </select>
      <select className="mb-8 p-2 rounded-sm">
        <option value="1">Choose Plan</option>
        <option value="1">Plan A</option>
        <option value="1">Plan B</option>
        <option value="1">Plan C</option>
      </select>
     </div>
      <Search
        setParPage={setParPage}
        setSearchValue={setSearchValue}
        searchValue={searchValue}
      />
      <div className="relative overflow-x-auto mt-5">
        <table className="w-full text-sm text-left text-[#d0d2d6]">
          <thead className="text-sm text-[#d0d2d6] uppercase border-b border-slate-700">
            <tr>
              <th scope="col" className="py-3 px-4">No</th>              
              <th scope="col" className="py-3 px-4">Name</th>
              <th scope="col" className="py-3 px-4">Phone Number</th>
              <th scope="col" className="py-3 px-4">DOB</th>
              <th scope="col" className="py-3 px-4">Email</th>
              <th scope="col" className="py-3 px-4">Role</th>
              <th scope="col" className="py-3 px-4">Manufacturing Sector</th>
              <th scope="col" className="py-3 px-4">Brief Bio</th>
              <th scope="col" className="py-3 px-4">Address</th>
              <th scope="col" className="py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
      {allcunsultants.map((user, i) => (
        <tr key={user.id}>
          <td className="py-3 px-4 font-medium whitespace-nowrap">{i + 1}</td>
          <td className="py-3 px-4 font-medium whitespace-nowrap">{user.name}</td>
          <td className="py-3 px-4 font-medium whitespace-nowrap">{user.phone}</td>
          <td className="py-3 px-4 font-medium whitespace-nowrap">{user.dob}</td>
          <td className="py-3 px-4 font-medium whitespace-nowrap">{user.email}</td>
          <td className="py-3 px-4 font-medium whitespace-nowrap">{user.role}</td>
          <td className="py-3 px-4 font-medium whitespace-nowrap">{user.sector}</td>
          <td className="py-3 px-4 font-medium whitespace-nowrap max-w-xs truncate">
            {user.bio}
          </td>
          <td className="py-1 px-4 font-medium whitespace-nowrap max-w-xs truncate">
            {user.address}
          </td>
          <td className="py-1 px-4 font-medium whitespace-nowrap">{user.status}</td>
          
        </tr>
      ))}
    </tbody>
        </table>
      </div>
      {totalgift <= parPage ? (
        ""
      ) : (
        <div className="w-full flex justify-end mt-4 bottom-4 right-4">
          <Pagination
            pageNumber={currentPage}
            setPageNumber={setCurrentPage}
            totalItem={50}
            parPage={parPage}
            showItem={4}
          />
        </div>
      )}
    </div>
  </div>

  );
};

export default GiftProduct;
