import React from 'react';

import classes from './ProfilePhotos.css';
import ProfileImage from './ProfileImage/ProfileImage';
import AddNewPhoto from '../UI/AddNewPhoto/AddNewPhoto';

const ProfilePhotos = props => {
    const photosLength = props.photos.length;
    console.log(props.photos);
    return (
        <div className={classes.Photos}>
            {props.photos.map(photo => (<ProfileImage
                src={photo.imageUrl}
                key={photo.id}
                alt="..."
                style={{
                    margin: "10px",
                    height : "100%", 
                    width : "30%"
                }}
                editable={props.editable}
                main={photo.main}
            />))}

            {photosLength < 5 && props.editable ? 
                <AddNewPhoto
                    addPhotoHandler={props.addPhotoHandler}
                /> : null}

        </div>
    );
}

export default ProfilePhotos;