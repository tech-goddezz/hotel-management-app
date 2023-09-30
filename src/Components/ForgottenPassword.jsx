import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../config/firebase'; 


const ForgottenPassword = () => {
    const [email, setEmail] = useState('');
    const [isResetSuccessful, setIsResetSuccessful] = useState(false);
    const [error, setError] = useState(null);


    const resetPassword = async () => {
        try {
          await auth.sendPasswordResetEmail(email);
          setIsResetSuccessful(true);
        } catch (err) {
          setError(err.message);
        }
      };



  return (
    <>

      <section className="bg-top ">
        <div className="container mx-auto py-6 flex justify-center items-center ">
            <div className="w-[500px] m-4 rounded-md bg-[red] relative overflow-hidden">

             
              <div className=" p-20">

                <div className="justify-center text-2xl font-semibold pb-5">
                    RESET PASSWORD
                </div>


                <form action="">

 
                    <label for="dropdown" className='font-semibold mt-2'>Email Address*</label>

                    <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                        />


{/* onClick={signin} */}

            <button 
                className=" mt-7 -mb-10 mx-10 bg-blue-500 px-2 py-2 rounded-2xl " 
                onClick={resetPassword} >
                Reset Password
             </button>

             </form>

             {isResetSuccessful && (
                <p className="text-green-600 mt-4">
                  Password reset email sent. Check your email for instructions.
                </p>
              )}

            {error && (
                <p className="text-red-600 mt-4">
                  Password reset failed. {error}
                </p>
            )}

         


</div>

</div>
</div>
</section>
    </>
    
  )
}

export default ForgottenPassword;    