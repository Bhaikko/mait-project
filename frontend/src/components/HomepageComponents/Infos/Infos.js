import React from 'react';

import classes from './Infos.css';

import AddFriendIcon from './../../../assets/icons/AddFriend.png';
import SocialIcon from './../../../assets/icons/Social.png';
import NotesIcon from './../../../assets/icons/Notes.png';
import CameraIcon from './../../../assets/icons/Camera.png';
import HeartIcon from './../../../assets/icons/Heart.png';

import Info from './Info/Info';

const Infos = props => {

    const infos = [
        {
            title: "A Social Platform",
            icon: SocialIcon
        },
        {
            title: "Make New Friends",
            icon: AddFriendIcon
        },
        {
            title: "Help Each Other",
            icon: NotesIcon
        },
        {
            title: "Share Your Stories",
            icon: CameraIcon
        },
        {
            title: "Date People",
            icon: HeartIcon
        },
    ]

    return (
        <div className={classes.Infos}>
            {infos.map(info => <Info title={info.title} icon={info.icon} key={info.title} />)}
        </div>
    );
}

export default Infos;