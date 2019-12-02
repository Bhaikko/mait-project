import React from 'react';

import classes from './AddNewPhoto.css';
import AddIcon from './../../../assets/icons/Add.png';

const AddNewPhoto = props => {

    // const [imageUrl, setImageUrl] = useState(null);

    const clickHandler = event => {
        const inputElement = event.target.nextSibling;
        inputElement.click();
    }

    const fileHandler = event => {
        console.log(event.target.files);

        // post request to upload photo
    }

    return (
        <div 
            className={classes.AddNewContainer}
            {...props}
        >
            <img 
                className={classes.AddNewIcon} 
                src={AddIcon} 
                alt="..." 
                onClick={clickHandler}
            />

            <input type="file" accept="image/" className={classes.PhotoUpload} onChange={fileHandler}/>

        </div>
    );
}

export default AddNewPhoto;