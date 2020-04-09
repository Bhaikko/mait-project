import React, { Component } from 'react';

import classes from './FilterContainer.css';

import SearchIcon from './../../assets/icons/Search.png';

class FilterContainer extends Component {

    constructor (props) {
        super(props);

        this.state = {
            filterString: ""
        }
    }

    filterHandler = event => {
        this.setState({
            filterString: event.target.value 
        });
        const filteredContent = this.props.content.filter(el => el[this.props.attribute].toLowerCase().includes(event.target.value.toLowerCase()));
        this.props.filterAssigner(filteredContent);

        if (this.props.setFilterString) {
            this.props.setFilterString(event.target.value);
        }
    }

    render () {
        return (
            <div className={[classes.SearchContainer, this.props.classes].join(" ")}>
                <img src={SearchIcon} alt="..." className={classes.SearchIcon} />
                <input type="text" placeholder={this.props.placeholder} className={classes.SearchBar} onChange={this.filterHandler}/>
            </div>
        );
    }

}

export default FilterContainer;