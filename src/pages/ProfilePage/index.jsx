import React, {useState, useEffect} from 'react';
import { Navbar } from '../../components';
import ProfileInfo from '../../components/ProfileInfo';
import { formatErrorMessage } from '../../utils/common';
import makeRequest from '../../utils/makeRequest';
import { useNavigate, useParams } from 'react-router';
import { ERROR_ROUTE } from '../../constants/ApiEndpoints';


function ProfilePage() {

    const navigate = useNavigate();
    //get userId from path params using useParamas hook
    const params = useParams();
    const userId = params.userId;



    const [profileData, setProfileData] = useState({});
    const [followers, setFollowers] = useState([]);
    const [following, setFollowing] = useState([]);
    // const [isFo  llowing, setIsFollowing] = useState(false);
    const [ownProfile, setOwnProfile] = useState(false);



    useEffect(() => {
        try {
            //get token from local storage
            const token = localStorage.getItem('jwtToken');
            //use atob to decode the token
            const decodedToken = atob(token.split('.')[1]);
            //parse the decoded token to get the user id
            const parsedToken = JSON.parse(decodedToken);
            console.log(parsedToken, parsedToken.id);
            //check if the user id is same as the userId in path params
            if (parsedToken.id == userId) {
                setOwnProfile(true);
            }
            const fetchData = async () => {
                const response = await makeRequest(
                    {
                        method: 'GET',
                        url: `/profile/${userId}`,
                    },
                    navigate
                );
                setProfileData(response);
            };
            const fetchFollowers = async () => {
                const response = await makeRequest(
                    {
                        method: 'GET',
                        url: `/profile/${userId}/followers`,
                    },
                    navigate
                );
                setFollowers(response);
            };
            const fetchFollowing = async () => {
                const response = await makeRequest(
                    {
                        method: 'GET',
                        url: `/profile/${userId}/following`,
                    },
                    navigate
                );
                setFollowing(response);
            };
            fetchData();
            fetchFollowers();
            fetchFollowing();
        } catch (e) {
            if (navigate) {
                const errorStatus = e.response.status;
                if (errorStatus) {
                    navigate(`${ERROR_ROUTE}/${errorStatus}`);
                } else {
                    navigate(ERROR_ROUTE);
                }
            }
            console.log(e);

            throw Error(formatErrorMessage(e.response.data.message));
        }
    }, []);


    return (
        <div>
            <Navbar />
            <ProfileInfo profileData={profileData} ownProfile={ownProfile} following={following} followers={followers} />

        </div>
    );
}

export default ProfilePage;
