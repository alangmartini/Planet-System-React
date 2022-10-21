import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

export default class Missions extends Component {
  render() {
    function renderMissions(arrOfMissions) {
      return arrOfMissions
        .map(({ name, year, country, destination }, index) => (
          <MissionCard
            key={ index }
            name={ name }
            year={ year }
            country={ country }
            destination={ destination }
          />
        ));
    }
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        { renderMissions(missions) }
      </div>
    );
  }
}
