import React from 'react';

import classes from './ProfilePhotos.css';
import ProfileImage from './../ProfileImage/ProfileImage';
import AddNew from './../UI/AddNew/AddNew';

const ProfilePhotos = props => {
    const photosLength = props.photos.length;
    const emptyPhotos = 5 - photosLength;

    let emptyPhotosObject = [];

    for (let i = 1; i <= emptyPhotos; i++) {
        emptyPhotosObject.push(<AddNew 
            key={i} 
            style={{
                margin: "10px",
                height : "100%", 
                width : "25%"
            }}    
        />);
    }

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
                editable
                main={photo.main}
            />))}
            {emptyPhotosObject.map(x => x)}
        </div>
    );
}

export default ProfilePhotos;