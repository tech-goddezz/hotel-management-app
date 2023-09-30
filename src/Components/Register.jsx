import React, { useState } from "react";
import HeadTitle from "./HeadTitle";
import Navbar from "./Navbar";

// Auth---------------------------------------------------------
import {auth, googleProvider} from '../config/firebase';
import {createUserWithEmailAndPassword, signInWithPopup,signOut} from 'firebase/auth';
// -------------------------------------------------------------

// Login-------------------------------------------------------

import { Link, useLocation } from 'react-router-dom';

// ---------------------------------------------------
// popup------>
import Popup from "./Popup";
// ----------->



const Register = ({ onSignIn, onClose }) => {

  const [popNav, setPopNav] = useState(false);


  const [name, setName] = useState("");
  const [cpassword, setCpassword] = useState("");



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


const [recValue, setRecValue] = useState([]);


// Login------------------------------------------->
  const submitForm = (e) => {
    e.preventDefault();
    const newValue = { name: name, email: email, password: password, cpassword: cpassword };

    setRecValue([...recValue, newValue]);
    console.log(newValue);

    setName("");
    setEmail("");
    setPassword("");
    setCpassword("");
  };
  // ------------------------------------------------>


  return (
    <>
      <Navbar />
      <HeadTitle />


      <section className="bg-top ">
        <div className="font-georgia mx-auto  border-[gold] py-10">
          <div className="w-1/3 bg-white mx-auto rounded-lg shadow-2xl  p-10" >
            <p className="mb-6">
              Don't have an account? Create your account, it takes less than a minute.
            </p>
            <form action="" onSubmit={submitForm}>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
                className="w-full p-2 border border-gray-300 rounded-lg mb-4"
              />
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="w-full p-2 border border-gray-300 rounded-lg mb-4"
              />
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="w-full p-2 border border-gray-300 rounded-lg mb-4"
              />
              <input
                type="password"
                name="cpassword"
                value={cpassword}
                onChange={(e) => setCpassword(e.target.value)}
                placeholder="Confirm Password"
                required
                className="w-full p-2 border border-gray-300 rounded-lg mb-4"
              />

              <button
                type="submit"
                className="w-full bg-[#ebcf32] border-[#ebcf32] text-black py-2 rounded-lg hover:text-white hover:scale-105 " onClick={() => {
                  signin(); // Call the signin function
                  setPopNav(!popNav); // Toggle the popNav state
                }}
              >
                Create an Account
              </button>

              <p className="text-center mt-4 cursor-pointer text-[red] hover:text-green-700 " onClick={() => {
                  signInWithGoogle(); // Call the signin function
                  setPopNav(!popNav); // Toggle the popNav state
                }}> Sign Up with Google </p>

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


      <Popup isOpen={isPopupOpen} onClose={closePopup} className="mt-8 text-bold">
        {recValue.map((currentValue) => (
          
          <div key={currentValue.email} className="w-full mx-auto mt-4 font-georgia">
             <div className="bg-white  rounded-lg p-4">
              <h1 className="text-[gold] text-bold mb-4">Account Created Successfully!</h1>
              <div className="flex">
                <h3>Name:</h3>
                <p className="ml-2">{currentValue.name}</p>
              </div>
              <div className="flex">
                <h3>Email:</h3>
                <p className="ml-2">{currentValue.email}</p>
              </div>
              <div className="flex">
                <h3>Password:</h3>
                <p className="ml-2">{currentValue.password}</p>
              </div>
              <div className="flex">
                <h3>Confirm Password:</h3>
                <p className="ml-2">{currentValue.cpassword}</p>
              </div>
            </div>

            <button className=' absolute top-1/5 right-1/3 transform -translate-x-1/2 -translate-y-1/6 mt-8 h-10 mr-[50px]       bg-[gold] border-[gold] hover:text-white hover:scale-105 text-black font-semibold rounded-[30px] ' onClick={logout}><Link to='/' >
          Log Out
          </Link> </button>

          </div>
        ))}
      </Popup>




      
    </>
  );
};

export default Register;




   