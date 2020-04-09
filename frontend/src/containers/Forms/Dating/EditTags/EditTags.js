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
            filteredTags: null,
            tag: ""
        }
    }

    getTags = () => {
        axios.get("/dating/tags")
            .then(response => {
                this.setState({
                    tags: response.data
                });
            });
    }

    componentDidMount () {
        this.getTags()
    }

    serFilterTags = tags => {
        this.setState({
            filteredTags: tags
        });
    }

    setFilterString = tag => {
        this.setState({
            tag: tag
        });
    }

    addTag = tag => {
        axios.post('/dating/usertag', {
            tag: tag
        })
            .then(response => {
                const newTags = this.props.tags;
                newTags.push(response.data.tag);
                this.props.updateprofile("tag", newTags, response.data.message);
                this.getTags();

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
                        setFilterString={this.setFilterString}
                    />
                    <Button classes={classes.Button} onClick={() => this.addTag(this.state.tag)}>Add</Button>
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