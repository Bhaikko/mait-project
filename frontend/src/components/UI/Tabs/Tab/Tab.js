import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Tab.css';

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const {
      onClick,
      props: {
        activeTab,
        label,
      },
    } = this;


    return (
      <li
        className={[classes.tabListItem, (activeTab === label)? classes.tabListActive : ""].join(" ")}
        onClick={onClick}
      >
        {label}
      </li>
    );
  }
}

export default Tab;