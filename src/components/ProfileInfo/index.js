import React from 'react'
import ProfileImage from '../../assests/img_avatar.png'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import BlueButton from '../BlueButton';
import WhiteButton from '../WhiteButton';

function ProfileInfo() {
  return (
    <div>
        <div className='profile-info'>
            <img src={ProfileImage} alt='avatar' />
            <div className='profile-name-title'>
                <div className='name'>
                    Jackie Chan
                </div>
                <div className='title'>
                    <div>Partner</div>
                </div>
                <div className='button'>
                <BlueButton  text='Follow' />
                </div>
                <div className='meta'>
                    <div className='following'>
                        <FontAwesomeIcon className='icon' icon={faPeopleGroup} />
                        <div>500</div>
                    </div>
                    <div className='followers'>
                        <FontAwesomeIcon className='icon' icon={faPeopleGroup} />
                        <div>500</div>
                    </div>

                </div>

                <div className='interests'>
                    <div className='interest-title'>
                        Interests
                    </div>
                    
                    <WhiteButton text='JavaScript' />
                    <WhiteButton text='Swimming' />
                    <WhiteButton text='Cricket' />
                    <div className='more-interests'>
                        <a href=''>More</a>
                    </div>


                </div>
                
                


            </div>

        </div>
    </div>
  )
}

export default ProfileInfo