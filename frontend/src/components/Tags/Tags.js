import React from 'react';

import classes from './Tags.css';
import Tag from './Tag/Tag';

const Tags = props => {
    return (
        <div className={classes.Tags}>
            {props.tags.map(tag => <Tag key={tag.id}>{tag.tag}</Tag>)}
        </div>
    );
}

export default Tags;