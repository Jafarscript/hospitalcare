import React from 'react';
import {info, contact, inquiry, style, effect3, main, name, message, style2, chose, submit} from "./contact.module.css";

const Contact = () => {
    return (
        <div className={info}>
            <div className={main}>
            <h2 className={contact}>Contact Us</h2>
            <div className={inquiry}>
            <div className={name}>
            <label className={style}>
            <h3>First Name :</h3>
            <input type="text" class={effect3} placeholder="First Name"></input>
           </label>
           <label className={style}>
            <h3>Last Name :</h3>
            <input type="text" class={effect3} placeholder="Last Name "></input>
           </label>
           <label className={style}>
            <h3>Email:</h3>
            <input type="email" class={effect3} placeholder="example@email.com"></input>
           </label>
           <label className={style}>
            <h3>Phone Number:</h3>
            <input type="text" class={effect3} placeholder="09012345677"></input>
           </label>
            </div>
            <div className={message}>
            <label className={style2}>
            <h3>First Name :</h3>
            <select className={chose}>
                <option>Booking Appiontments</option>
                <option>Making payments</option>
                <option>Hospital Hours</option>
                <option>Vacanies</option>
                <option>Others</option>
            </select>
           </label>
           <label className={style2}>
            <h3>Message :</h3>
            <textarea rows='10' cols='40' placeholder="Type your message here"></textarea>
           </label>
            </div>
            </div>
            <button className={submit}>Submit Inquiry</button>
            </div>
        </div>
    )
}

export default Contact