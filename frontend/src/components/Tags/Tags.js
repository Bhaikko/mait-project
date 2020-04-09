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
                clickHandler={props.clickHandler ? () => props.clickHandler(tag.tag) : () => {}}
                deleteTagHandler={props.deleteTagHandler ? () => props.deleteTagHandler(tag) : () => {}}
                hoverable={props.clickHandler ? true : false}
            >
                {tag.tag}
            </Tag>)}

            {
                tagsLength < 10 && props.editable ? 
                <AddNewTag 
                    updateprofile={props.updateprofile}
                    tags={props.tags}
                /> : 
                null
            }
        </div>
    );
}

export default Tags;