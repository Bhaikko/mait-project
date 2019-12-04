import React, { Component } from 'react';
import { connect } from 'react-redux';

// import classes from './EditTags.css';
import FilterContainer from './../../../containers/FilterContainer/FilterContainer';
import axios from './../../../axios';
import Tags from './../../../components/Tags/Tags';
import * as actions from './../../../store/actions/index';

class EditTags extends Component {
    constructor (props) {
        super(props);

        this.state = {
            tags: [],
            filteredTags: null
        }

        this._isMounted = false;
    }

    componentDidMount () {
        this._isMounted = true;
        axios.get("/dating/tags")
            .then(response => {
                if (this._isMounted) {
                    this.setState({
                        tags: response.data
                    });
                }
            })
            .catch(err => {
                console.log(err); 
            });
    }

    serFilterTags = tags => {
        this.setState({
            filteredTags: tags
        });
    }

    addTag = tag => {
        this.props.onAddTag(tag);
        this.props.closeModal();
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
                        clickHandler={this.addTag}     
                    />
                ) : (
                    null
                )}
            </React.Fragment>
        );
    }

    componentWillUnmount() {
        this._isMounted = false;
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddTag: tag => dispatch(actions.addTag(tag))
    }
}

export default connect(null, mapDispatchToProps)(EditTags);