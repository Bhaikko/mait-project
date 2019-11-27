import React from 'react';

import classes from './ProfilePhotos.css';
import ProfileImage from './ProfileImage/ProfileImage';
import AddNew from './../UI/AddNew/AddNew';

const ProfilePhotos = props => {
    const photosLength = props.photos.length;

    return (
        <div className={classes.Photos}>
            {props.photos.map(photo => (<ProfileImage
                src={photo.imageUrl}
                key={photo.id}
                alt="..."
                style={{
                    margin: "10px",
                    height : "100%", 
                    width : "25%"
                }}
                editable={props.editable}
                main={photo.main}
            />))}
            {photosLength < 5 && props.editable ? <AddNew /> : null}
        </div>
    );
}

export default ProfilePhotos;