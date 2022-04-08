// import React, { Fragment } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate, Route } from "react-router-dom";

// const ProtectedRoute = ({  element: Element, ...rest }) => {
//   const { loading, isAuthenticated, user } = useSelector((state) => state.user);
// const navigate =useNavigate()
//   return (
//     <Fragment>
//       {loading === false && (
//         <Route
//           {...rest}
//           render={(props) => {
//             if (isAuthenticated === false) {
//               return navigate("/login");
//             }

        
//             return <Element {...props} />;
//           }}
//         />
//       )}
//     </Fragment>
//   );
// };


import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = (isAdmin) => {
    const { loading, isAuthenticated, user } = useSelector((state) => state.user);

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return isAuthenticated? <Outlet /> : <Navigate to="/login" />;
     
}
 export default ProtectedRoute;