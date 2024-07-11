import React, { useRef, useReducer } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactFormReducer from "../reducers/ContactFormReducer";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineLocalPhone, MdOutlineEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";

import "./Contact.css";

const public_key = "RQXySOnDxEf6Vxq1o";
const private_key = "HWLls4xc8gQ7rfUBpXz6A";
const service_id = "Outlook_Arnav";
const template_id = "template_dev";

const initialFormState = {
  name: "",
  email: "",
  message: "",
  subject: ""
};

const Contact = () => {
  const form = useRef();
  console.log(form);
  const [formState, dispatch] = useReducer(
    ContactFormReducer,
    initialFormState
  );
  const handleTextChange = e => {
    dispatch({
      type: "HANDLE INPUT TEXT",
      field: e.target.name,
      payload: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("submit");
    emailjs.sendForm(service_id, template_id, form.current, public_key).then(
      result => {
        console.log(result.text);
      },
      error => {
        console.log(error);
      }
    );
  };
  return (
    <div className="ContactPage__Wrapper">
      <Header />
      <section className="Contact__Form">
        <div className="Contact__Header">
          <div className="Contact__Box">
            <div className="Icon__Container">
              <IoLocationOutline />
            </div>
            <div className="Text__Container">
              <span>Address: </span>
              <p>15 Boice Lane Belle Mead NJ 08502</p>
            </div>
          </div>
          <div className="Contact__Box">
            <div className="Icon__Container">
              <MdOutlineLocalPhone />
            </div>
            <div className="Text__Container">
              <span>Phone: </span>
              <p>+1-908-229-5918</p>
            </div>
          </div>
          <div className="Contact__Box">
            <div className="Icon__Container">
              <MdOutlineEmail />
            </div>
            <div className="Text__Container">
              <span>Email: </span>
              <p>Nagarjun.chevula@bincompute.com</p>
            </div>
          </div>
        </div>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit} ref={form}>
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={e => handleTextChange(e)}
            placeholder="Name"
          />
          <input
            type="text"
            name="email"
            value={formState.email}
            onChange={e => handleTextChange(e)}
            placeholder="Email"
          />
          <input
            type="text"
            name="subject"
            value={formState.subject}
            onChange={e => handleTextChange(e)}
            placeholder="Subject"
          />
          {/* <input
            type="text"
            name="message"
            value={formState.message}
            onChange={e => handleTextChange(e)}
            placeholder="Message"
            id="Message"
          /> */}

          <textarea
            name="message"
            rows="6"
            placeholder="Message"
            onChange={e => handleTextChange(e)}
            value={formState.message}
            type="text"
          />
          <button type="submit" className="Submit">
            Send Message
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
