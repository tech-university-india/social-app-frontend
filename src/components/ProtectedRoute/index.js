import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import makeRequest from '../../utils/makeRequest';
import { VALIDATE_JWT } from '../../constants/ApiEndpoints';
const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        makeRequest({ ...VALIDATE_JWT }, {}).then(data => {
            if (data.status === 200) {
                setIsAuthenticated(true);
            } else {
                navigate('/login');
            }
        });

    }, []);

    return (
        <div>
            {isAuthenticated && children}
        </div>
    );
};

export default ProtectedRoute;

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
};
