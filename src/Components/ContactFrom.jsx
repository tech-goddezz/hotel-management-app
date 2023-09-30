import React, { useState } from "react";

const ContactFrom = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const [allValue, setAllValue] = useState([]);
  const formSubmit = (e) => {
    e.preventDefault();

    const newValue = { fname, lname, phone, email, subject, company, message };
    setAllValue([...allValue, newValue]);

    setFname("");
    setLname("");
    setPhone("");
    setEmail("");
    setSubject("");
    setCompany("");
    setMessage("");
  };

  return (
    <>
      <section className="contact mx-10 my-20 font-georgia">
        <div className="container flex">
          <div className="main-content">
            <h1 className="text-2xl pb-5">Contact Form</h1>
            <p>Fill out the form below, we will get back to you soon.</p>

            <form onSubmit={formSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="input">
                  <span className="text-gray-500">
                    First Name <label className="text-red-500">*</label>
                  </span>
                  <input
                    type="text"
                    name="fname"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                    required
                    className="w-full border-2 border-gray-300 mt-2 p-2"
                  />
                </div>
                <div className="input">
                  <span className="text-gray-500">
                    Last Name <label className="text-red-500">*</label>
                  </span>
                  <input
                    type="text"
                    name="lname"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                    required
                    className="w-full border-2 border-gray-300 mt-2 p-2"
                  />
                </div>
                <div className="input">
                  <span className="text-gray-500">
                    Phone Number
                  </span>
                  <input
                    type="number"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full border-2 border-gray-300 mt-2 p-2"
                  />
                </div>
                <div className="input">
                  <span className="text-gray-500">
                    Email <label className="text-red-500">*</label>
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full border-2 border-gray-300 mt-2 p-2"
                  />
                </div>
                <div className="input">
                  <span className="text-gray-500">Subject</span>
                  <input
                    type="text"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full border-2 border-gray-300 mt-2 p-2"
                  />
                </div>
                <div className="input">
                  <span className="text-gray-500">Your Company</span>
                  <input
                    type="text"
                    name="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full border-2 border-gray-300 mt-2 p-2"
                  />
                </div>
              </div>
              <div className="input inputlast">
                <span className="text-gray-500">
                  Write Your Message <label className="text-red-500">*</label>
                </span>
                <textarea
                  cols="30"
                  rows="5"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full border-2 border-gray-300 mt-2 p-2"
                ></textarea>
              </div>
              <button className="bg-[gold] hover:text-white hover:scale-105 border-[gold] text-black font-bold py-2 px-4 mt-4 rounded-lg">
                Submit Now
              </button>
            </form>
          </div>

          <div className="side-content pl-40">
            <h3 className="text-2xl pb-5">Visit our location</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur.</p>
            <br />

            <h3>Message us</h3>
            <span>info@exampal.com</span>
            <br />
            <span>+01 123 456 789</span>
            <br />
 
            <div className="icon">
              <h3>Follow Us</h3>

              <div className="flex space-x-2 text-[gold] ">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-pinterest"></i>
                <i className="fab fa-youtube"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="show-data">
        {allValue.map((currentValue, index) => {
          const { fname, lname, phone, email, subject, company, message } = currentValue;
          return (
            <div key={index} className="sign-box">
              <h1>Send Successfully</h1>
              <h3>
                First Name : <p>{fname}</p>
              </h3>
              <h3>
                Last Name : <p>{lname}</p>
              </h3>
              <h3>
                Contact Number : <p>{phone}</p>
              </h3>
              <h3>
                Email : <p>{email}</p>
              </h3>
              <h3>
                Subject : <p>{subject}</p>
              </h3>
              <h3>
                Company Name: <p>{company}</p>
              </h3>
              <h3>
                Your Message : <p>{message}</p>
              </h3>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ContactFrom;
