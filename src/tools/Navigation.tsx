import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { useNavigate } from "react-router-dom";




const Navigate : void = (Screen : string) => {
    const nav = useNavigate();
    
};

// underneath are defined the different roots, pages of the website
// if you create a new page, insert it here
const Navigation: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    );
}

const Home: React.FC = () => (
    <div className='home'>
        <h1>Welcome to my portfolio website</h1>
        <p> Feel free to browse around and learn more about me.</p>
    </div>
);

const About = () => (
    <div className='about'>
        <h1>About Me</h1>
        <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
        <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
    </div>
);

const Contact = () => (
    <div className='contact'>
        <h1>Contact Me</h1>
        <p>You can reach me via email: <strong>hello@example.com</strong></p>
    </div>
);
export default Navigation;