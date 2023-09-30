import React, { useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';


import image3 from './Assets/img3.jpg';
import image10 from './Assets/img10.jpg';
import imageOne from './Assets/imgOne.jpg';
import imageTwo from './Assets/imgTwo.jpg';
import image5 from './Assets/img5.jpg';


// --------------------------

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';


// firestore
import { db, auth, storage } from '../config/firebase';

import profile_icon from './Assets/userOne.jpg';

import {
    getDocs,
    collection,
    addDoc,
    deleteDoc,
    doc,
    updateDoc
} from "firebase/firestore";

import { ref, uploadBytes } from 'firebase/storage';

import { onSnapshot } from "firebase/firestore";

// firestore----end


const AdminUplooad = () => {

    const sliders = [
        {
            url: image3,
        },
        {
            url: image10,
        },
        {
            url: imageOne,
        },
        {
            url: imageTwo,
        },

    ]

    const [currentIndex, setCurrentIndex] = useState(0)


    // begin-------

    const [suiteList, setSuiteList] = useState([]);


    //new room state
    const [newRoom, setNewRoom] = useState('');
    const [newPrice, setNewprice] = useState(0);
    const [newPets, setnewPets] = useState(true);


    // update suite name state
    const [updatedName, setUpdatedName] = useState('');

    // file upload state for storage
    const [fileUpload, setFileUpload] = useState(null);


    const suiteCollectionRef = collection(db, "suites");


    const getSuiteList = async () => {
        //read the data
        // set the data
        try {
            const data = await getDocs(suiteCollectionRef);
            console.log(data);

            const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id, }));

            setSuiteList(filteredData);

        } catch (err) {
            console.error(err);
        }

    };

    // delete the entire suite that was created
    const deleteSuite = async (id) => {
        const suiteDoc = doc(db, "suites", id);
        try {
            await deleteDoc(suiteDoc);

            // update the local state by removing the deleted suite
            setSuiteList((prevSuiteList) => prevSuiteList.filter((suite) => suite.id !== id));
        } catch (err) {
            console.error(err);
        }
    };


    


    // changing the suite name
    const updateSuiteName = async (id) => {
        const suiteDoc = doc(db, "suites", id);
        try {
            await updateDoc(suiteDoc, { title: updatedName });

            // update the local state by removing the deleted suite
            setSuiteList((prevSuiteList) => prevSuiteList.map((suite) => suite.id !== id ? { ...suite, title: updatedName } : suite
            )
            );
        } catch (err) {
            console.error(err);
        }

    };


    const uploadFile = async () => {
        if (!fileUpload) return;
        const filesFolderRef = ref(storage, `projectFiles/${fileUpload.name}`);

        try {
            await uploadBytes(filesFolderRef, fileUpload);
        } catch (err) {
            console.error(err);
        }
    }


    useEffect(() => {

        getSuiteList();

        // Add this code inside your useEffect to set up a real-time listener for the updatesuitename
        const unsubscribe = onSnapshot(suiteCollectionRef, (querySnapshot) => {
            const updatedData = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            setSuiteList(updatedData);
        });

        // Clean up the listener when the component unmounts
        return () => {
            unsubscribe();
        };

    }, []);

    const onSubmitRoom = async () => {
        try {
            await addDoc(suiteCollectionRef, {
                title: newRoom,
                price: newPrice,
                pets: newPets,
                userId: auth?.currentUser?.uid,
            });

            getSuiteList();
        } catch (err) {
            console.error(err);
        }
    };

    // end--------





    // left arrow slider
    const prevSlider = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex - 1;

        setCurrentIndex(newIndex);
    }

    // right arrow slider
    const nextSlider = () => {
        const isLastSlide = currentIndex === sliders.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;

        setCurrentIndex(newIndex);
    }

    // bullets under slider
    const moveToNextSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }






















    // rounded-2xl
    return (
        <>
            <div className='font-georgia '>
{/* ---------here changed-------------------- */}
<div>

<div
            className=" max-w-[1520px] top-[10%] h-[700px] w-full py-4 px-4 relative group"
            style={{
                background: `url(${sliders[currentIndex].url})`,
                backgroundSize: 'cover', // Set background size to cover
                backgroundPosition: 'center', // Center the background image
            }}
        >
            {/* arrow slider */}
            {/* left arrow */}
            <div className="hidden group-hover:block absolute top-[40%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-[#ebcf32] text-white cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlider} />
        </div>

{/* right arrow */}
<div className="hidden group-hover:block absolute top-[40%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-[#ebcf32] text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextSlider} />
            </div>



            <div className=' left-35 top-[35%] font-geogio absolute  text-white '>
<h1 className="text-[100px] pl-[180px] mt-8">Welcome to Paradise</h1>

<h1 className="-mt-[20px] pl-[500px] text-[30px] ">Luxury Hotel and Suite</h1>
<button className='border-[#ebcf32] hover:bg-[#ebcf32] ml-[590px]'>Discover Now</button>
</div>


{/* --------------- */}
{/* bullet slider */}
<div className="flex bottom-8 justify-center  pt-[500px] ">
                {sliders.map((sliderItems, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => moveToNextSlide(slideIndex)}
                        className="text-2xl cursor-pointer"
                    >
                        <RxDotFilled />
                    </div>
                ))}
            </div>

            {/* end */}



{/* top-[25%] bg-opacity-70 */}
<div className="bg-black top-[80%] absolute   right-2 px-9 -pt-1  rounded-[10px] text-white
    lg:w-[1200px] lg:h-[230px] 
    md:right-[100px] md:w-[400] md:h-[350px] 
    sm:w-50  sm:h-[230px]  
    ">
                 <div className="container">
                     

                    <div className='container'>
                     <form className="mt-8">
                        
                         
                         {/* ----------- */}

                         <div className="flex  space-x-4 mt-4 ">
                             <label className="w-1/2 flex justify-center  items-center rounded  text-xl bg-black text-white">Check In/Out</label>
                             <label className="w-1/2 rounded flex justify-center items-center text-xl bg-black text-white">Guests</label>
                             <label className="w-1/2  rounded flex justify-center items-center text-xl bg-black text-white">Pets</label>

                             </div>
                         {/* -------------------------- */}
                         <div className="flex space-x-4 mt-4">
                         <input
                                 type="date"
                                 placeholder="Check In"
                                 className="w-1/2 px-4 rounded bg-gray-800 text-white"
                             />
                             <input
                                 type="number"
                                 placeholder="Adult(s)(18+)"
                                 className="w-1/2 px-4 rounded bg-gray-800 text-white"
                             />


<input
                                 type="number"
                                 placeholder="Yes"
                                 className="w-1/2 px-4 rounded bg-gray-800 text-white"
                             />
                         </div>
                         {/* ------------------------- */}
                         <div className="flex space-x-4 mt-4">
                         <input
                                 type="date"
                                 placeholder="Check Out"
                                 className="w-1/2 px-4 rounded bg-gray-800 text-white"
                             />
                             <input
                                 type="number"
                                 placeholder="Children(0-17)"
                                 className="w-1/2 px-4 rounded bg-gray-800 text-white"
                             />

<input
                                 type="number"
                                 placeholder="No"
                                 className="w-1/2 px-4  rounded bg-gray-800 text-white"
                             />
                         </div>
                         {/* ------------------------------ */}


                         <button
  onClick={() => {room}}
  className="block w-full bg-[#ebcf32] border-[gold] text-black py-1 mt-4 rounded hover:text-white hover:scale-105"
>
  Check Room Availability
</button>
                     </form>


 </div>
                     
                </div>
                </div>
            {/* ----------------- */}
        </div>






</div>
{/* ---------here changed-------------------- */}

<div>





    
</div>

                    


                    {/* ---------------------------------------------------------------------------------> */}









                    <div className='bg-white font-georgia  '>
                        <h1 className='text-[#474747] font-bold text-4xl text-center pt-[220px] pb-2'>Create New Rooms</h1>

                        <div className="flex flex-row items-center justify-center pb-10 ">
                            <label className='text-xl font-bold pr-2 text-[#474747]' >Suite Name:</label>
                            <input
                                id="suiteName"
                                className="bg-white rounded-md p-2"
                                placeholder="Suite Name..."
                                onChange={(e) => setNewRoom(e.target.value)}
                            />

                            <label className='text-xl font-bold px-2 text-[#474747]'>Price:</label>
                            <input
                                id="price"
                                className="bg-white rounded-md p-2"
                                placeholder="Price..."
                                type="number"
                                onChange={(e) => setNewprice(Number(e.target.value))}
                            />

                            <label htmlFor="pets" className="flex font-bold text-xl items-center px-2 text-[#474747]">
                                <input
                                    id="pets"
                                    type="checkbox"
                                    className="w-5 h-5 ml-2 mr-1"
                                    checked={newPets}
                                    onChange={(e) => setnewPets(e.target.checked)}
                                />
                                Pets
                            </label>

                            <button
                                className=" bg-[#ebcf32] rounded-[3px] border-none font-bold p-2 ml-10"
                                onClick={onSubmitRoom}
                            >
                                submit room
                            </button>
                        </div>


                        {/* herrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr */}

                        <div className='lg:flex max-w-[1520px] m-auto pt-2 pb-20 px-20'>
                            <Splide options={{ perPage: 2, gap: '2.5rem', drag: 'free', arrows: false }}>
                                {suiteList.map((suites) => (
                                    <SplideSlide key={suites.id}>
        <div className="rounded-3xl relative h-full">
            <div className='absolute w-full h-full bg-black/30 rounded-2xl text-white'>
                <p className={suites.price ? "text-white px-2 pt-4 " : "text-[#ebcf32] px-2 pt-4 "}> $
                    {suites.price}
                </p>
                <p className='px-2 pt-[8rem] font-bold text-center text-2xl'>{suites.title}</p>
                <p className='px-2 pt-[0.1rem] text-center text-1xl'>Lorem ipsum dolor sit amet consectetur </p>



                <p className='px-2 py-5 pt-[0.1rem] mt-3 text-center text-black text-1xl'>
                    <input
                        placeholder="Change Name?"
                        onChange={(e) => setUpdatedName(e.target.value)}
                        className=' border-none py-0.5 px-6 h-10 rounded-sm bg-black/40 '
                    />
                    <button className='bg-[#ebcf32] text-black border-none hover:text-white hover:scale-105 py-0.5 ml-3 px-6 rounded-[1px] h-10 ' onClick={() => updateSuiteName(suites.id)}>     Update
                    </button>
                </p>

                <p className=' px-2 pt-[0.1rem] text-center text-black hover:text-white text-1xl'> <button className='bg-[#ebcf32] hover:scale-105 border-none  py-0.5 h-10  px-6 rounded-[30px] ' onClick={() => deleteSuite(suites.id)}> Delete Suite </button></p>





            </div>
            <img
                className='h-[350px] w-full object-cover rounded-2xl cursor-pointer hover:scale-105 ease-out duration-300'
                src={image3}
                alt='pic'
            />
        </div>
    </SplideSlide>
                                ))}
                            </Splide>


                        </div>

                        {/* ------------------------------------------------------------------------------------------------------------> */}
                        {/* begin----- */}



                        {/* storage */}




                        <div className="justify-center items-center flex pb-5 ">
                            <h1 className='font-bold text-2xl pr-3'>Upload Picture? </h1>
                        </div>

                        <div className="justify-center items-center flex   ">
                            <input type="file" onChange={(e) => setFileUpload(e.target.files[0])} />

                            <button className="bg-black/30 -ml-20 text-white" onClick={uploadFile}>Upload File</button>


                        </div>

                        <hr className="flex justify-center md:justify-center border-t-2  border-[#fff6ae] w-[1200px] ml-[65px] h-10 mt-20 " />



                        {/* end-------- */}


                    </div>

</div>
                

            </>
            )

}

            export default AdminUplooad;                 