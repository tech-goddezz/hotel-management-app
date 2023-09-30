import React, { useEffect, useState } from "react";
import About from "./About";
import Meals from "./Meals";
import Categories from "./Categories";
import NewsLetter from "./NewsLetter";
import AdminUplooad from "./AdminUpload";
import UserNavbar from "./UserNavbar";



import { AiTwotonePhone, AiOutlineMail, AiOutlineClockCircle, } from 'react-icons/ai';
import GalleryHome from "./GalleryHome";



function AdminHome() {
   
    // end--------


    return (
        <>
            <UserNavbar />




            <div className="App">
                <AdminUplooad />
                <About />
                <GalleryHome />
                <Meals />
                <Categories />
                <NewsLetter />
            </div>
        </>
    )
}

export default AdminHome;                 