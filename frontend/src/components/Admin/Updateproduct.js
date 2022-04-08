// import React, { Fragment, useEffect, useState } from "react";
// import "./newproduct.css"
// import { useSelector, useDispatch } from "react-redux";

// import { useAlert } from "react-alert";
// import Sidebar from "./Sidebar";
// import { Spellcheck } from "@mui/icons-material";
// import { AttachMoney } from "@mui/icons-material";
// import { Description } from "@mui/icons-material";
// import { AccountTree } from "@mui/icons-material";
// import { Button } from "@mui/material";
// import { useNavigate, useParams } from "react-router-dom";
// import { clearerrors, updateproduct,getproductdetails } from "../../actions/productaction";
// import { UPDATE_PRODUCT_RESET} from "../../constants/productconstant";
// const Updateproduct = () => {
//   const dispatch = useDispatch();
//   const alert = useAlert();
//   const {op} =useParams()
//     const navigate=useNavigate()
//     const { product,error} = useSelector((state) => state.productdetail)
//   const { loading, error:updateerror, isupdated } = useSelector((state) => state.product);

//   const [name, setName] = useState("");
//   const [price, setPrice] = useState(0);
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [Stock, setStock] = useState(0);
//   const [images, setImages] = useState([]);
//   const [oldimages,setoldimages]=useState([]);
//   const [imagesPreview, setImagesPreview] = useState([]);

//   const categories = [
//     "Laptop",
//     "Footwear",
//     "Bottom",
//     "Tops",
//     "Attire",
//     "Camera",
//     "SmartPhones",
//   ];
//   const productid = op

//   useEffect(() => {
//     if(product && product._id!==productid){
//       dispatch(getproductdetails(productid))
//     }else{
//       setName(product.name)
//       setDescription(product.description)
//       setCategory(product.category);
//       setStock(product.stock)
//       setoldimages(product.images)
//     }
//     if (error) {
//       alert.success("Product Created Successfully");
//       dispatch(clearerrors());
      
//     }
//     if(updateerror){
//       alert.error(error)
//       dispatch(clearerrors())
//       console.log(updateerror);
//     }

//     if (isupdated) {
//       alert.success("Product updated Successfully");
//       navigate("/admin/products");
//       dispatch({type:UPDATE_PRODUCT_RESET})

   
//     }
//   }, [dispatch, alert, error,navigate,updateerror, isupdated,productid,product]);

//   const createProductSubmitHandler = (e) => {
//     e.preventDefault();

//     const myForm = new FormData();

//     myForm.set("name", name);
//     myForm.set("price", price);
//     myForm.set("description", description);
//     myForm.set("category", category);
//     myForm.set("Stock", Stock);

//     images.forEach((image) => {
//       myForm.append("images", image);
//     });
//     dispatch(updateproduct(productid,myForm));
//   };

//   const createProductImagesChange = (e) => {
//     const files = Array.from(e.target.files);

//     setImages([]);
//     setImagesPreview([]);

//     files.forEach((file) => {
//       const reader = new FileReader();

//       reader.onload = () => {
//         if (reader.readyState === 2) {
//           setImagesPreview((old) => [...old, reader.result]);
//           setImages((old) => [...old, reader.result]);
//         }
//       };

//       reader.readAsDataURL(file);
//     });
//   };

//   return (
//     <Fragment>

//       <div className="dashboard">
//  <Sidebar/>
//         <div className="newProductContainer">
//           <form
//             className="createProductForm"
//             encType="multipart/form-data"
//             onSubmit={createProductSubmitHandler}
//           >
//             <h1>Create Product</h1>

//             <div>
//               <Spellcheck />
//               <input
//                 type="text"
//                 placeholder="Product Name"
//                 required
//                 value={product.name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>
//             <div>
//               <AttachMoney />
//               <input
//                 type="number"
//                 placeholder="Price"
//                 value={product.price}
//                 required
//                 onChange={(e) => setPrice(e.target.value)}
//               />
//             </div>

//             <div>
//               <Description />

//               <textarea
//                 placeholder="Product Description"
//                 value={product.description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 cols="30"
//                 rows="1"
//               ></textarea>
//             </div>

//             <div>
//               <AccountTree />
//               <select onChange={(e) => setCategory(e.target.value)}>
//                 <option value="">Choose Category</option>
//                 {categories.map((cate) => (
//                   <option key={cate} value={cate}>
//                     {cate}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div>
           
//               <input
//                 type="number"
//                 placeholder="Stock"
//                 required
//                 onChange={(e) => setStock(e.target.value)}
//               />
//             </div>

//             <div id="createProductFormFile">
//               <input
//                 type="file"
//                 name="avatar"
//                 accept="image/*"
//                 onChange={createProductImagesChange}
//                 multiple
//               />
//             </div>

//             <div id="createProductFormImage">
//               {imagesPreview.map((image, index) => (
//                 <img key={index} src={image} alt="Product Preview" />
//               ))}
//             </div>

//             <Button
//               id="createProductBtn"
//               type="submit"
//               disabled={loading ? true : false}
//             >
//               Create
//             </Button>
//           </form>
//         </div>
//       </div>
//     </Fragment>
//   );
// };

// export default Updateproduct;


import React, { Fragment, useEffect, useState } from "react";
import "./newproduct.css"
import { useSelector, useDispatch } from "react-redux";

import { useAlert } from "react-alert";
import Sidebar from "./Sidebar";
import { Spellcheck } from "@mui/icons-material";
import { AttachMoney } from "@mui/icons-material";
import { Description } from "@mui/icons-material";
import { AccountTree } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { clearerrors, updateproduct,getproductdetails } from "../../actions/productaction";
import { UPDATE_PRODUCT_RESET} from "../../constants/productconstant";
import { Storage } from "@mui/icons-material";
const Updateproduct = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
const navigate =useNavigate()
const {op}=useParams()
  const { error, product } = useSelector((state) => state.productdetail);

  const {
    loading,
    error: updateError,
    isupdated,
  } = useSelector((state) => state.delete);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [Stock, setStock] = useState(0);
  const [images, setImages] = useState([]);
  const [oldImages, setOldImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const categories = [
    "Laptop",
    "Footwear",
    "Bottom",
    "Tops",
    "Attire",
    "Camera",
    "SmartPhones",
  ];

  const productId  = op

  useEffect(() => {
    if (product && product._id !== productId) {
      dispatch(getproductdetails(productId));
    } else {
      setName(product.name);
      setDescription(product.description);
      setPrice(product.price);
      setCategory(product.category);
      setStock(product.stock);
      setOldImages(product.images);
    }
    if (error) {
      alert.error(error);
      dispatch(clearerrors());
    }

    if (updateError) {
      alert.error(updateError);
      dispatch(clearerrors());
    
    }

    if (isupdated) {
      alert.success("Product Updated Successfully");
      navigate("/admin/products")
      dispatch({ type: UPDATE_PRODUCT_RESET });
    }
  }, [
    dispatch,
    alert,
    error,
    
    isupdated,
    productId,
    product,
    updateError,
  ]);

  const updateProductSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("price", price);
    myForm.set("description", description);
    myForm.set("category", category);
    myForm.set("Stock", Stock);

    images.forEach((image) => {
      myForm.append("images", image);
    });
    dispatch(updateproduct(productId, myForm));
  };

  const updateProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);
    setOldImages([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <Fragment>

      <div className="dashboard">
        <Sidebar />
        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={updateProductSubmitHandler}
          >
            <h1>Create Product</h1>

            <div>
              <Spellcheck
               />
              <input
                type="text"
                placeholder="Product Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <AttachMoney/>
              <input
                type="number"
                placeholder="Price"
                required
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
            </div>

            <div>
              <Description />

              <textarea
                placeholder="Product Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>

            <div>
              <AccountTree />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Choose Category</option>
                {categories.map((cate) => (
                  <option key={cate} value={cate}>
                    {cate}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <Storage />
              <input
                type="number"
                placeholder="Stock"
                required
                onChange={(e) => setStock(e.target.value)}
                value={Stock}
              />
            </div>

            <div id="createProductFormFile">
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={updateProductImagesChange}
                multiple
              />
            </div>

            <div id="createProductFormImage">
              {oldImages &&
                oldImages.map((image, index) => (
                  <img key={index} src={image.url} alt="Old Product Preview" />
                ))}
            </div>

            <div id="createProductFormImage">
              {imagesPreview.map((image, index) => (
                <img key={index} src={image} alt="Product Preview" />
              ))}
            </div>

            <Button
              id="createProductBtn"
              type="submit"
              disabled={loading ? true : false}
            >
              Create
            </Button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Updateproduct;