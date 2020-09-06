import React from 'react';
import './NoMatch.css';
import SignalWifi3BarLockIcon from '@material-ui/icons/SignalWifi3BarLock';

const NoMatch = () => {
    return (
        <div className="noMatch-area">
            <h3><SignalWifi3BarLockIcon></SignalWifi3BarLockIcon> OOPS! Route is not available</h3>
        </div>
    );
};

export default NoMatch;