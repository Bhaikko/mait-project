import React from 'react';

import classes from './Tags.css';
import Tag from './Tag/Tag';
import AddNew from './../UI/AddNew/AddNew';

const Tags = props => {
    const tagsLength = props.tags.length;
    const emptyTags = 10 - tagsLength;
    let emptyTagsObjects = [];

    for (let i = 1; i <= emptyTags; i++) {
        emptyTagsObjects.push(<AddNew key={i} />);
    }

    return (
        <div className={classes.Tags}>
            {props.tags.map(tag => <Tag 
                key={tag.id}
                editable={props.editable}
            >
                {tag.tag}
            </Tag>)}
            {props.editable ? emptyTagsObjects.map(x => x) : null}
        </div>
    );
}

export default Tags;