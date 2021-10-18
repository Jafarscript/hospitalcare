import React from 'react';
import {about, head, layout, left, right, organ, details, purple, green, learn} from './about.module.css'

const About = () => {
    return (
        <div className={layout}>
            <div className={left}>
            <h2 className={head}>About Us</h2>
            <article className={about}>
            <p>Northcare has responded to a global challenge to ensure well-being at all ages is provided to those living in emerging markets as a pillar to support sustainable economic development. With this, the Group is leading the way in transforming the traditional healthcare model through its integrated cross-continents platform, its impact driven model and quality driven hospitals.</p>
            <p>
            The Northcare Group operates as an integrated healthcare delivery platform in emerging markets across Africa and South Asia, including India, Pakistan, Bangladesh, Kenya and Nigeria.
            </p>
            <p>
            The Group’s portfolio includes 29 hospitals, 16 clinics, 75 diagnostics centers and two brownfield assets. Evercare is proud to be the most diverse healthcare group in the countries it operates in with 10,350 employees working together to develop a systemic healthcare change in emerging markets.
            </p>
            </article>
            <button className={learn}>Learn More</button>
            </div>
            <div className={right}>
                <section className={organ}>
                    <span className={details}>
                    <i class="fas fa-hospital"></i>
                    <h4>26 Hospitals</h4>
                    </span>
                    <span className={`${details} ${purple}`}>
                    <i class="fas fa-procedures"></i>
                    <h4>+3,300 Beds</h4>
                    </span>
                    <span className={`${details} ${green}`}>
                    <i class="fas fa-hospital-user"></i>
                    <h4>2.3 Millon Patients Episodes</h4>
                    </span>
                    <span className={`${details} ${green}`}>
                    <i class="fas fa-stethoscope"></i>
                    <h4>75 Diagnostics Centres</h4>
                    </span>
                    <span className={details}>
                    <i class="fas fa-globe-africa"></i>
                    <h4>4 Countries</h4>
                    </span>
                    <span className={`${details} ${purple}`}>
                    <i class="fas fa-user-md"></i>
                    <h4>10,000+ Employees</h4>
                    </span>
                </section>
            </div>
        </div>
    )
}

export default About
