import './Camo.scss';
import * as m from 'mithril';
import App from '../common/App';
// import CamoResourcesOverview from './components/CamoResourcesOverview';
import CamoHeroesOverview from './components/CamoHeroesOverview';

import KoinResourcesOverview from './components/KoinResourcesOverview';
import KoinUnitsOverview from './components/KoinUnitsOverview';
import KoinResearchOverview from './components/KoinResearchOverview';
// import KoinBuildingsOverview from './components/KoinBuildingsOverview';
import KoinGametime from './components/KoinGametime';

export default class CamoVersusApp extends App {
  view() {
    return [
      // <CamoResourcesOverview />,
      <KoinResourcesOverview />,
      <KoinGametime />,
      <KoinUnitsOverview />,
      <CamoHeroesOverview />,
      <KoinResearchOverview />,
      // <KoinBuildingsOverview />,      
    ];
  }
}
