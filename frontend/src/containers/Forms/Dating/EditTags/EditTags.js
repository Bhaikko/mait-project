import React, { Component } from 'react';

import FilterContainer from '../../../FilterContainer/FilterContainer';
import axios from '../../../../axios';
import Tags from '../../../../components/Tags/Tags';
import classes from './EditTags.css';
import Button from './../../../../components/UI/Button/Button';

class EditTags extends Component {
    constructor (props) {
        super(props);
        this.state = {
            tags: [],
            filteredTags: null
        }
    }

    componentDidMount () {
        axios.get("/dating/tags")
            .then(response => {
                this.setState({
                    tags: response.data
                });
            });
    }

    serFilterTags = tags => {
        this.setState({
            filteredTags: tags
        });
    }

    addTag = tag => {
        axios.post('/dating/usertag', tag)
            .then(response => {
                const newTags = this.props.tags;
                newTags.push(response.data.tag);
                this.props.updateprofile("tag", newTags, response.data.message);

            })
            .catch(() => {})
        
        this.props.closeModal();
    }

    render () {
        return (
            <React.Fragment>
                <div className={classes.Header}>Add New Tags</div>
                <div className={classes.SubHeader}>
                    <FilterContainer
                        content={this.state.tags}
                        attribute={'tag'}
                        filterAssigner={this.serFilterTags}
                        placeholder="Enter Tag"
                        classes={classes.FilterContainer}
                    />
                    <Button classes={classes.Button}>Add</Button>
                </div>
                {this.state.tags ? (
                    <Tags 
                        tags={this.state.filteredTags === null ? this.state.tags : this.state.filteredTags}
                        clickHandler={this.addTag}     
                    />
                ) : (
                    null
                )}
            </React.Fragment>
        );
    }
}

export default EditTags;