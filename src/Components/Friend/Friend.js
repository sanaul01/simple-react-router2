import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    console.log(props.friend)
    const {name, email, city, id} = props.friend || {}
    console.log(name)
    const friendStyle={
        border: "3px solid goldenrod",
        padding: "10px",
        borderRadius: "10px"   
    };
    const url = `/friend/${id}`
    return (
        <div style={friendStyle}>
            <h2>This is friend: {name} </h2>
            <p>Email: {email}</p>
            <p>City: {city}</p>
            <Link to={url}>Visit me</Link>
        </div>
    );
};

export default Friend;