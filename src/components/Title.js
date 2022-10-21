import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    const { headline } = this.props;

    return (
      <div>
        <h2>
          { headline }
        </h2>
      </div>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string,
};

Title.defaultProps = {
  headline: PropTypes.string,
};

export default Title;
