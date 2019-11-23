import React from 'react';

import classes from './ProfileImage.css';
import CrossIcon from './../UI/CrossIcon/CrossIcon';
import HeartIcon from './../UI/HeartIcon/HeartIcon';

const ProfileImage = props => {
    return (
        <div 
            className={classes.ProfileImageContainer}
            style={props.style}
        >
            <img 
                src={props.src}
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
                            right: -45,
                            width: 40
                        }}
                    />
                    <HeartIcon
                        style={{
                            top: 40,
                            right: -45,
                            width: 40
                        }}
                        fill={props.main.toString()}
                    />
                </React.Fragment>

            ) : (
                null
            )}
        </div>
    );
}

export default ProfileImage;