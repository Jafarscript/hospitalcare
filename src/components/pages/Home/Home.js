import React from "react";
import {
    home,
    companyName,
    motto
} from "./home.module.css";

import HospitalList from "../hospitalList/HospitalList";

const Home = () => {
    return (
        <>
        <div className={home}>
            <h1 className={companyName}> North-Care Hospital </h1>
            <h4 className={motto}> Health is wealth..... </h4>
        </div>
        <HospitalList/>
        </>

    );
};

export default Home;
