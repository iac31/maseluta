import React from 'react';
import {colors} from "../styles";
import Subscription from '../images/Subscription.jpg';
import Cert1 from '../images/cert1.jpg';
import Cert2 from '../images/cert2.jpg';
import Cert3 from '../images/cert3.jpg';

let iconBoxes = [
    {
        title: 'Dental Implants',
        text: 'Pre-order today just for $879 per tooth',
        icon: 'stm-icon-tooth-1',
        color: colors.java
    },
    {
        title: 'Cosmetic Braces',
        text: 'Affordable french braces for kids and adults',
        icon: 'stm-icon-tooth-2',
        color: colors.tanHide
    },
    {
        title: 'Teeth Whitening',
        text: 'Top standards and high quality',
        icon: 'stm-icon-tooth-3',
        color: colors.blueBayoux
    }
];

let iconAdvantages = [
    {
        icon: 'stm-icon-computer',
        title: 'Accepting Insurance\n' +
        'Cards',
        text: 'Our clinic can easily accept the customers with insurance cards and create the history of cases for each.'
    },
    {
        icon: 'stm-icon-tooth-4',
        title: 'Using Innovative\n' +
        'Technology',
        text: 'All our surgeries are furnished with state of the art equipment and maintained at the highest standards.'
    },
    {
        icon: 'stm-icon-tooth-5',
        title: 'Guarantee Success\n' +
        'of Treatments',
        text: 'Most of our treatments are covered by a long term guarantee which will be discussed with you before beginning treatment.'
    },
    {
        icon: 'stm-icon-sertificate',
        title: 'Certified Dentist\n' +
        'Doctors',
        text: 'With over 30 years of dental experience and experience with implants, we are experts in all facets of dentistry.'
    }
];

const IconBox = () => (
    <div className="icon-boxes">
        {iconBoxes.map(item => (
            <div className="icon-box-item"
                 style={{backgroundColor: item.color}}
            >
                <div className="icon-box-text">
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                </div>
                <div className="icon-box-icon">
                    <i className={item.icon}></i>
                </div>
            </div>
        ))}
    </div>
);

const AboutUsZone = () => (
    <div className="about-us-zone">
        <div className="about-us-details">
            <h2>About Us</h2>
            <h4>Meet Dr. Redisson</h4>
            <figure>
                <img src={Subscription} alt="subscription" width="100%"/>
                <figcaption>
                    Dr. Redisson with a patient
                </figcaption>
            </figure>
            <div className="about-us-text">
                <p>Our Dental Clinic is dedicated to providing the most up to date general, orthodontic
                    and family
                    dentistry.</p>
                <p>Our Clinic has grown to provide a world class facility for the treatment of tooth
                    loss, dental
                    cosmetics and advanced restorative dentistry.</p>
                <p>We are among the most qualified implant providers in the USA with over 35 years of
                    quality
                    training
                    and experience.</p>
            </div>
        </div>
        <div className="certificates">
            <h5>Certififcates of completion</h5>
            <div>
                <img src={Cert1} alt="cert1"/>
            </div>
            <div>
                <img src={Cert2} alt="cert2"/>
            </div>
            <div>
                <img src={Cert3} alt="cert3"/>
            </div>
        </div>
    </div>
);

const OurAdvantages = () => (
    <div className="our-advantages">
        <div>
            <h2>Our Advantages</h2>
            <div>
                {iconAdvantages.map(item => (
                    <div className="our-advantages-item">
                        <div className="our-advantages-icon">
                            <i className={item.icon}></i>
                        </div>
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

class Slider extends React.Component {
    render() {
        return (
            <div className="slider-wraper">
                <div className="slider-item-1">Text 1</div>
                <div className="slider-item-2">Text 2</div>
                <div className="slider-item-3">Text 3</div>
                <span className="left-arrow">
                    &#8249;
                </span>
                <span className="right-arrow">
                    &#8250;
                </span>
            </div>
        )
    }
}

const Home = () => (
    <div>
        <div className="slider-div"/>
        <div className="icon-boxes-content">
            <div>
                <IconBox key={iconBoxes} item={iconBoxes}/>
            </div>
        </div>
        <AboutUsZone/>
        <OurAdvantages key={iconAdvantages} item={iconAdvantages}/>
        <Slider/>
    </div>
);


export default Home;