import React from 'react';

import classes from './ProfilePhoto.css';
import CrossIcon from '../../UI/CrossIcon/CrossIcon';
import HeartIcon from '../../UI/HeartIcon/HeartIcon';
import DefaultPhoto from './../../../assets/icons/Username.png';

import { SERVER_URL } from '../../../environments';

const ProfileImage = props => {
    let imageSrc = props.src;

    if (!imageSrc) {
        imageSrc = DefaultPhoto;
    } else if (!imageSrc.includes('https://')) {
        imageSrc = SERVER_URL + "/" + props.src;
    } 

    return (
        <div 
            className={[classes.ProfileImageContainer, props.classname].join(" ")}
            style={props.style}
        >
            <img 
                src={imageSrc}
                className={classes.ProfilePhoto}
                alt={props.alt}
                style={{
                    borderRadius: props.borderRadius
                }}
            />
            {props.editable ? (
                <React.Fragment>
                    <CrossIcon
                        style={{
                            top: -45,
                            width: 40,
                        }}
                        onClick={props.photoDeleteHandler}
                    />
                    <HeartIcon
                        style={{
                            top: -45,
                            right: 45,
                            width: 40
                        }}
                        main={props.main} 
                        clickHandler={props.setMainProfilePhotoHandler}
                    />
                </React.Fragment>

            ) : (
                null
            )}
        </div>
    );
}

export default ProfileImage;