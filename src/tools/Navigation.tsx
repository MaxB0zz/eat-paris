import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

//import the screens here and add them in the Navigation component

import AboutMeScreen from "../screens/AboutMeScreen";
import HomePageScreen from "../screens/HomePageScreen";

// the function you use in order to switch screens
export const Navigate : (Screen: string) => null = (Screen : string) => {
    const nav = useNavigate();
    // nav("/root);
    nav(`/${Screen}`);
    return null;
};

// underneath are defined the different roots, pages of the website
// if you create a new page, insert it here
export const Navigation: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePageScreen/>}/>
            <Route path='/about' element={<AboutMeScreen/>}/>
        </Routes>
    );
}