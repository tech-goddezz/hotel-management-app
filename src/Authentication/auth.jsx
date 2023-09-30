// Auth---------------------------------------------------------
import React, { useState } from 'react';
import UserNavbar from '../Components/UserNavbar';


import {auth, googleProvider} from '../config/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  sendPasswordResetEmail, 
  signInWithPopup, 
} from 'firebase/auth';

// -------------------------------------------------------------

// Login-------------------------------------------------------

import { Link, useLocation } from 'react-router-dom';

// ---------------------------------------------------
// popup------>
import Popup from '../Components/Popup';
// ----------->



 const Auth = ({ onSignIn, onClose }) => {

  const [popNav, setPopNav] = useState(false);

    const location = useLocation();

    const headImage = {
        url: 'https://c4.wallpaperflare.com/wallpaper/283/899/779/house-style-house-pool-wallpaper-preview.jpg',
      };

    //   popup ---------->
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
      };

      const closePopup = () => {
        setIsPopupOpen(false);
      };

    // ----------->


    // Auth-----------------------------------
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const signin = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);

            // Call the onSignIn function to trigger the popup
            onSignIn();
        } catch (err) {
            console.error(err);
        };

        setIsPopupOpen(true);
    };


    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (err) {
            console.error(err);
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
        } catch (err) {
            console.error(err);
        }
    };
    // ------------------------------------------------

    // Login------------------------------------------->

    const [recValue, setRecValue] = useState([]);
  
  const submitForm = (e) => {
    e.preventDefault();
    const newValue = { email: email, password: password };

    setRecValue([...recValue, newValue]);
    console.log(newValue);

    setEmail("");
    setPassword("");
  };

    // ------------------------------------------------>


    return (
        <>

        <UserNavbar />
        
    {/* header */}
    <section
        className="font-georgio bg-cover bg-center bg-image-heading text-white h-30vh py-[50px] relative z-10"
        style={{
          backgroundImage: `url(${headImage.url})`,
        }}
      >
        {/* Dark overlay */}
        <div
          className="absolute inset-0 bg-black opacity-60"
          style={{ zIndex: -1 }}
        ></div>
        <div className="container items-center text-center relative z-10">
          <h1 className="text-5xl capitalize">Login</h1>
        </div>
      </section>
      {/* header end */}



            <section className="bg-top">
        <div className="container mx-auto  py-6">
          <div className="w-1/3 mx-auto shadow-2xl bg-white rounded-lg p-20"> 
            <p className="mb-6">
              Enter your e-mail and password below to log in to your account and use the benefits of our website.
            </p>
            <form action="" onSubmit={submitForm}>

              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded-lg mb-4"
              />

              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full p-2 border border-gray-300 rounded-lg mb-4"
              />

              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <input type="checkbox" className="w-5 h-5 mr-2" />
                  <label>Remember Me</label>
                </div>

                <div>
                  <p className="text-red-600 text-sm hover:text-[gold] "> <Link to='/forgottenPassword' >I Forgot my password </Link> </p>
                </div>
              </div>

              <button type="submit" className="w-full border-[gold] bg-[gold] text-black py-2 rounded-lg hover:text-[white] hover:scale-105" onClick={() => {
                  signin(); // Call the signin function
                  setPopNav(!popNav); // Toggle the popNav state
                }}>
                Sign In
              </button>

              <p className="text-center mt-4">
                Don't have an account? <Link to="/register" className="text-[gold">Signup!</Link>
              </p>

              <p className="text-center mt-4 cursor-pointer text-red-600 hover:text-[gold] " onClick={signInWithGoogle}> Sign in with Google </p>

            </form>
          </div>
        </div>
      </section>


      {/* pop (popnav) */}

            {/* pop overlay */}
            {
                popNav ? (
                    <div className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0"
                        onClick={() => setPopNav(!popNav)}
                    >
                    </div>
                ) : ('')
            }

            {/* end */}

      <Popup isOpen={isPopupOpen} onClose={closePopup}>
        {recValue.map((currentValue) => (

          <div key={currentValue.email} className="w-full mx-auto mt-4">
            
            <div className="bg-white  rounded-lg p-4">
              <h1 className="text-[gold] mb-4">Login Successful! </h1>

              <div className="flex">
                <h3>Email:</h3>
                <p className="ml-2">{currentValue.email}</p>
              </div>

              <div className="flex">
                <h3>Password:</h3>
                <p className="ml-2">{currentValue.password}</p>
              </div>

              <button className=' absolute top-1/5 right-1/3 transform -translate-x-1/2 -translate-y-1/6 mt-8 h-10 mr-[50px]       bg-[gold] border-[gold] hover:text-white hover:scale-105 text-black font-semibold rounded-[30px] ' onClick={logout}><Link to='/' >
          Log Out
          </Link> </button>

              

            </div>
          </div>
        ))}
      </Popup>


      </>
    );
};     
export default Auth;                    