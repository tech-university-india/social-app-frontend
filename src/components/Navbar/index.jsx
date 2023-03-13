import React, { useState } from 'react';
import './style.css';
import downIcon from '../../Assets/Icons/small-triangle-down.svg';
import magIcon from '../../Assets/Icons/zoom.svg';
import mainIcon from '../../Assets/Icons/img.svg';
import announceIcon from '../../Assets/Icons/megaphone.svg';
import notifyIcon from '../../Assets/Icons/alarm.svg'
import profileIcon from '../../Assets/Icons/circle-08.svg';
import { useNavigate } from 'react-router-dom';
import 'react-dropdown/style.css';


const Navbar = () => {

  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('People');
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleToggleClick = (e) => {
    setSelectedOption(e.target.innerText);
    setIsClicked(false);
  };

  return (
    <div className='navbar'>

      <div className='search-and-icons'>
        <h3 className='app-name-text'>Socialize</h3>
        <div className='search-bar'>
          <div className='toggle-section' onClick={handleClick}>
            <img src={downIcon} alt='down-arrow' />
            <div className='toggle-options'>
              <p>{selectedOption}</p>
              {isClicked && <div className='toggle-div' onClick={handleToggleClick}>
                <p>{selectedOption === 'People' ? 'Interest' : 'People'}</p>
              </div>}
            </div>
          </div>
          <hr className='vertical-line' />
          <div className='search-section'>
            <input type="text" placeholder='Search' />
            <img src={magIcon} alt='' />
          </div>
        </div>

        <div className='icons'>

          <div className='main-feed icon-w-text' onClick={() => {
            navigate('/post');
          }}>
            <img src={mainIcon} alt="main-feed-icon" className='icon' />
            <p>Main feed</p>
          </div>

          <div className='announcements icon-w-text' onClick={() => {
            navigate('/announcements');
          }}>
            <img src={announceIcon} alt="announce-icon" className='icon' />
            <p>Announcements</p>
          </div>

          <div className='notifications icon-w-text' onClick={() => {
            navigate('/notifications');
          }}>
            <img src={notifyIcon} alt="notify-icon" className='icon' />
            <p>Notifications</p>
          </div>

          <div className='profile icon-w-text' onClick={() => {
            navigate('/profile/1');
          }}>
            <img src={profileIcon} alt="profile-icon" className='icon' />
            <p>Profile</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;