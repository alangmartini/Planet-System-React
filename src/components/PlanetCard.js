import React, { Component } from 'react';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-test-id="planet-card">
        <p data-test-id="planet-name">
          { planetName }
        </p>
        <img src={ planetImage } alt={ planetName } />

      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
};

PlanetCard.defaultProps = {
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
};

export default PlanetCard;
