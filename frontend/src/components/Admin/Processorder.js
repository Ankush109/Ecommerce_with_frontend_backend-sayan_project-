import React, { Fragment, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { Link } from 'react-router-dom'
import { getorderdetails, clearerrors, updateeorder } from "../../actions/orderaction"
import { useSelector, useDispatch } from "react-redux";
import { Button, Typography } from '@mui/material'
import { useAlert } from "react-alert";

import { useParams } from "react-router-dom";
import "./processorder.css";
import { UPDATE_ORDER_RESET } from "../../constants/orderconstant";
import { AccountTree } from "@mui/icons-material";

const ProcessOrder = () => {
    const { order, error, loading } = useSelector((state) => state.orderdetails);
    const { error: updateError, isupdated } = useSelector((state) => state.order);
    const { op } = useParams()
    const updateOrderSubmitHandler = (e) => {
        e.preventDefault();

        const myForm = new FormData();

        myForm.set("status", status);

        dispatch(updateeorder(op, myForm));
    };

    const dispatch = useDispatch();
    const alert = useAlert();

    const [status, setStatus] = useState("");

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearerrors());
        }
        if (updateError) {
            alert.error(updateError);
            dispatch(clearerrors());
            console.log(updateError);
        }
        if (isupdated) {
            alert.success("Order Updated Successfully");
            dispatch({ type: UPDATE_ORDER_RESET });
        }

        dispatch(getorderdetails(op));
    }, [dispatch, alert, error, op, isupdated, updateError]);

    return (
        <Fragment>
            <div className="dashboard">
                < Sidebar />
                <div className="newProductContainer">

                    <div
                        className="confirmOrderPage"
                        style={{
                            display: order.orderstatus === "Delivered" ? "block" : "grid",
                        }}
                    >
                       </div>
                       </div>
            </div>
        </Fragment>
    );
};

export default ProcessOrder;