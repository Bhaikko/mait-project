import React from 'react';

import classes from './ProfilePhoto.css';
import CrossIcon from '../../../UI/CrossIcon/CrossIcon';
import HeartIcon from '../../../UI/HeartIcon/HeartIcon';
import DefaultPhoto from './../../../../assets/icons/Username.png';

import { SERVER_URL } from '../../../../environments';

const ProfileImage = props => {
    
    const imageSrc = props.src ? SERVER_URL + "/" + props.src : DefaultPhoto;

    return (
        <div 
            className={[classes.ProfileImageContainer, props.classname].join(" ")}
            style={props.style}
        >
            {props.editable ? (
                <div className={classes.PhotoOptions}>
                    <CrossIcon
                        onClick={props.photoDeleteHandler}
                        classes={classes.CrossIcon}
                    />
                    <HeartIcon
                        main={props.main} 
                        clickHandler={props.setMainProfilePhotoHandler}
                        classes={classes.HeartIcon}
                    />
                </div>

            ) : (
                null
            )}
            <img 
                src={imageSrc}
                className={classes.ProfilePhoto}
                alt={props.alt}
                style={{
                    borderRadius: props.borderRadius
                }}
            />
        </div>
    );
}

export default ProfileImage;