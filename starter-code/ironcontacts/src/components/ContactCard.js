import React from 'react';

const ContactCard = props => {



    return (

        <tr>
            <td> <img src={props.pictureUrl} /></td>
            <td>{props.name}</td>
            <td>{props.popularity}</td>
            <td><button onClick={props.deleteContact}>Delete</button></td>
        </tr>
    )
}

export default ContactCard

