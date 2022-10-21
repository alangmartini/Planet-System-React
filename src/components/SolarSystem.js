import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

export default class SolarSystem extends Component {
  render() {
    function renderPlanets(arrOfPlanets) {
      return arrOfPlanets
        .map(({ name, image }, index) => (
          <PlanetCard key={ index } planetName={ name } planetImage={ image } />
        ));
    }
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        { renderPlanets(planets) }
      </div>
    );
  }
}
