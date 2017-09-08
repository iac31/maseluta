import React from 'react';

const Header = () => (
    <div className="top-info">
        <div>
            <div className="top-info-item">
                <div className="top-info-item-icon">
                    <i className="stm-icon-roundels"></i>
                </div>
                <div className="top-info-item-text">
                    <strong>Call Today 020 8567 0707</strong>
                    <span>51 Uxbridge Road, San Francisco W7 3PX</span>
                </div>
            </div>
            <div className="top-info-item">
                <div className="top-info-item-icon">
                    <i className="stm-icon-clock"></i>
                </div>
                <div className="top-info-item-text">
                    <strong>Open Hours</strong>
                    <span>Mon - Sat: 8 am - 5 pm, Sunday: CLOSED</span>
                </div>
            </div>
            <div className="top-info-item-java">
                <div className="top-info-item-java-icon">
                    <i className="stm-icon-calculator"></i>
                </div>
                <div className="top-info-item-java-text">
                    <strong>Make an Appointment</strong>
                    <span>It's so fast</span>
                </div>
            </div>
        </div>
    </div>
);

export default Header;