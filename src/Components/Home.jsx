import React from "react";
import Featured from "./Featured";
import About from "./About";
import Meals from "./Meals";
import Categories from "./Categories";
import NewsLetter from "./NewsLetter";
import Navbar from "./Navbar";



import { AiTwotonePhone, AiOutlineMail, AiOutlineClockCircle, } from 'react-icons/ai';
import GalleryHome from "./GalleryHome";



function Home() {


    return (
        <>
            <Navbar />
            <Featured />
            <div className="App">
                
                <About />
                <GalleryHome />
                <Meals />
                <Categories />
                <NewsLetter />
            </div>
        </>
    )
}

export default Home;                                          