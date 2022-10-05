import './Contact.css'
import emailjs from '@emailjs/browser';
import { useState, useRef } from "react";

export const Contact = () => {
    const form = useRef();

    const[done, setDone] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_wabgy6m', 'template_87rvpec', form.current, 'TWc6M5bt3b7fBo0WR')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
        // clear all input values in the form
        e.target.reset();
    };
  
  return (
    <div className="contact-form" id='Contact'>
        <div className="w-left">
            <div className="awesome">
                <span></span>
                <span>Contact Me!</span>
                {/* <div 
                className="blur s-blur1"
                style={{background: "var(--seablue)"}}
                ></div> */}
            </div>
        </div>

        <div className="c-right">
            <form ref={form} onSubmit = {sendEmail}>
                <input type="text" name="user_name" className="user" placeholder="Name" required/>
                <input type="email" name="user_email" className="user" placeholder="Email" required/>
                <textarea name="message" className="user" placeholder="Message" required/>
                {/* <input type="submit" value="submit" className="button"/> */}
                <button className='button'>Submit</button>
                <span>{done && "Message Sent!"}</span>


                {/* <div 
                className="blur c-blur1"
                style={{background: "--gray"}}
                ></div> */}
            </form>
        </div>
    </div>
  )
}

