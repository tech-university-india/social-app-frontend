import React from 'react';
import './style.css';
import downIcon from '../../Assets/Icons/small-triangle-down.svg';
import magIcon from '../../Assets/Icons/zoom.svg';
import mainIcon from '../../Assets/Icons/img.svg';
import announceIcon from '../../Assets/Icons/megaphone.svg';
import notifyIcon from '../../Assets/Icons/alarm.svg';
import profileIcon from '../../Assets/Icons/circle-08.svg';
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="search-and-icons">
                <h3 className="app-name-text">Socialize</h3>
                <div className="search-bar">
                    <div className="toggle-section">
                        <img src={downIcon} alt="down-arrow" />
                        <p>People</p>
                    </div>
                    <hr className="vertical-line" />
                    <div className="search-section">
                        <input type="text" placeholder="Search" />
                        <img src={magIcon} alt="" />
                    </div>
                </div>

                <div className="icons">
                    <div className="main-feed icon-w-text">
                        <img
                            src={mainIcon}
                            alt="main-feed-icon"
                            className="icon"
                        />
                        <p>Main feed</p>
                    </div>

                    <div className="announcements icon-w-text">
                        <img
                            src={announceIcon}
                            alt="announce-icon"
                            className="icon"
                        />
                        <p>Announcements</p>
                    </div>

                    <div className="notifications icon-w-text">
                        <img
                            src={notifyIcon}
                            alt="notify-icon"
                            className="icon"
                        />
                        <p>Notifications</p>
                    </div>

                    <div className="profile icon-w-text">
                        <img
                            src={profileIcon}
                            alt="profile-icon"
                            className="icon"
                        />
                        <p>Profile</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
