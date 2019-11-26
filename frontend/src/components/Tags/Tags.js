import React from 'react';

import classes from './Tags.css';
import Tag from './Tag/Tag';
import AddNew from './../UI/AddNew/AddNew';

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
            {tagsLength < 10 && props.editable ? <AddNew /> : null}
        </div>
    );
}

export default Tags;