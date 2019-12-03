import React, { Component } from 'react';

// import classes from './EditTags.css';
import FilterContainer from './../../../containers/FilterContainer/FilterContainer';
import axios from './../../../axios';
import Alertify from './../../../utilities/Aleretify/Alertify';
import Tags from './../../../components/Tags/Tags';

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
            })
            .catch(err => {
                if (err.response.data.message) {
                    Alertify.error(err.response.data.message);
                }                
                Alertify.error("Try Refreshing The Page");
                
            });
    }

    serFilterTags = tags => {
        this.setState({
            filteredTags: tags
        });
    }

    render () {
        return (
            <React.Fragment>
                <FilterContainer
                    content={this.state.tags}
                    attribute={'tag'}
                    filterAssigner={this.serFilterTags}
                />
                {this.state.tags ? (
                    <Tags 
                        tags={this.state.filteredTags === null ? this.state.tags : this.state.filteredTags}     
                    />
                ) : (
                    null
                )}
            </React.Fragment>
        );
    }
    

}

export default EditTags;