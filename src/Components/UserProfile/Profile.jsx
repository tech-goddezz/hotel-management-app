import React, { useState } from 'react';
import profile_icon from '../Assets/userOne.jpg';
import UserNavbar from '../UserNavbar';


// Auth---------------------------------------------------------

import { auth, googleProvider } from '../../config/firebase';
import {createUserWithEmailAndPassword, signInWithPopup,signOut} from 'firebase/auth';
// -------------------------------------------------------------

// Login-------------------------------------------------------

import { Link, useLocation } from 'react-router-dom';

// ---------------------------------------------------
// popup------>
import Popup from "../Popup";
// ----------->



const Profile = ({ onSignIn, onClose }) => {

  const [popNav, setPopNav] = useState(false);


  const [present, setPresent] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [number, setNumber] = useState("");



  //   popup ---------->
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);


  const openPopup = () => {
      setIsPopupOpen(true);
    setIsOverlayVisible(true);
    };

    const closePopup = () => {
      setIsPopupOpen(false);
    setIsOverlayVisible(false);
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
    const newValue = { 
      name: name, 
      lastName: lastName,
      email: email, 
      password: password, 
      cpassword: cpassword,
      number: number };

    setRecValue([...recValue, newValue]);
    console.log(newValue);

    setName("");
    setLastName('');
    setEmail("");
    setPassword("");
    setCpassword("");
    setNumber('');
  };
  // ------------------------------------------------>




  return (
    <>

<UserNavbar />

    <section className="bg-[gold] ">
      <div className="container mx-auto py-6">
        
        <div className="flex items-center justify-evenly mx-auto  rounded-lg p-10  ">
            
            
          
          {/* ------------------------------------------------------ */}

          <div className="w-[1000px] -mt-5  rounded-md bg-white relative shadow-black overflow-hidden">

              

              <div className="p-20 ">
                <div className="justify-start text-4xl font-bold">ACCOUNT INFO</div>

                {/* ---------------- */}
                <div className="absolute top-1/5 right-1/4 transform -translate-x-1/10 -translate-y-1/2 bg-[gold] rounded-full w-48 h-48 p-2 -mr-40 ">
                <img src={profile_icon} alt="" className="rounded-full w-full h-full object-cover" />
              </div>
                {/* --------------- */}

                <div className="justify-start text-2xl font-semibold pb-5">PERSONAL INFORMATION</div>


                <form action="" onSubmit={submitForm}>
                <label for="dropdown" className='font-semibold mt-2'>Title*</label>
                
                  
                <select id="dropdown" name="dropdown" className="block mt-2  p-1 w-full hover:bg-[#d1d1d1] " 
                  value={present}
                  onChange={(e) => setPresent(e.target.value)}>
                  <option value="option1">Mr</option>
                  <option value="option2">Mrs</option>
                  <option value="option3">Miss</option>
                </select>
                
                

                
                <label for="firstName" className='font-semibold mt-2'>First Name*</label>

                <input
                  type="text"
                  name="firstName"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="First Name"
                  className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                />

                <label for="lastName" className='font-semibold mt-2'>Last Name*</label>

                <input
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last Name"
                  className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                />
               
               <label for="dropdown" className='font-semibold mt-2'>Email Address*</label>

              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded-lg mb-4"
              />

              <label for="dropdown" className='font-semibold mt-2'> Reset Password*</label>

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


                <div className="text-gray-600 text-md pt-3 ">
                Your third party login will be automatically disconnected if you change your email address.
                </div>

                <label for="dropdown" className='font-semibold mt-2'>Phone Number*</label>

              <input
                type="text"
                name="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Phone Number"
                className="w-full p-2 border border-gray-300 rounded-lg mb-4"
              />


              <div className="justify-start text-2xl font-semibold pb-5">EMAIL PREFERENCES</div>

              <label for="myCheckbox" className="inline-flex items-center">
                  <input type="checkbox" id="myCheckbox" name="myCheckbox" className="form-checkbox h-5 w-5 text-blue-600" />
                  <span class="ml-2">I agree to receive marketing offers from Paradise Hotel Group and any owner or developer of a project managed by or under one of Paradise Hotel Group's brands. I have the right to withdraw this consent at anytime (with effect for the future).</span>
              </label>



                <button className=" mt-7 -mb-10 border-[gold] hover:text-white hover:scale-105 mx-10 bg-[gold] px-2 py-2 rounded-2xl " 

                onClick={() => {
                  signin(); // Call the signin function
                  setPopNav(!popNav); // Toggle the popNav state
                }}

                >
                  Save Changes
                </button>

                </form>
              </div>

          </div>
          
          
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


    <Popup isOpen={isPopupOpen} onClose={closePopup} className="mt-8 w-full font-georgia">
        {recValue.map((currentValue) => (
          
          <div key={currentValue.email} className="w-full mx-auto ">
             <div className="bg-white  rounded-lg p-4">
              <h1 className="text-[gold] mb-4">Changes Made Successfully!</h1>
              <div className="flex">
                <h3>Name:</h3>
                <p className="ml-2">{currentValue.present}{currentValue.name}{currentValue.lastName}</p>
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
                <h3>Phone Number:</h3>
                <p className="ml-2">{currentValue.number}</p>
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
}


export default Profile;



