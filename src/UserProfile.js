import React from 'react';

function UserProfile(props) {
    return (
        <div>
            <p>Username: {props.username} </p>
            <p>Age: {props.age} </p>

        </div>
     );
}
export default UserProfile;