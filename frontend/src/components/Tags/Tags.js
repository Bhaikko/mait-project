import React from 'react';

import classes from './Tags.css';
import Tag from './Tag/Tag';
import AddNewTag from './../UI/AddNewTag/AddNewTag';

const Tags = props => {
    const tagsLength = props.tags.length;

    return (
        <div className={classes.Tags}>
            {props.tags.map(tag => <Tag 
                key={tag.id}
                editable={props.editable}
            >
                {tag.tag}
            </Tag>)}
            {tagsLength < 10 && props.editable ? <AddNewTag /> : null}
        </div>
    );
}

export default Tags;