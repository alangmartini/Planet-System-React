import React, { Component } from 'react';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;

    return (
      <div data-testid="mission-card">
        <p testid="mission-name">
          { name }
        </p>
        <p testid="mission-year">
          { year }
        </p>
        <p testid="mission-country">
          { country }
        </p>
        <p testid="mission-destination">
          { destination }
        </p>

      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string,
  year: PropTypes.string,
  country: PropTypes.string,
  destination: PropTypes.string,
};

MissionCard.defaultProps = {
  name: PropTypes.string,
  year: PropTypes.string,
  country: PropTypes.string,
  destination: PropTypes.string,
};

export default MissionCard;
