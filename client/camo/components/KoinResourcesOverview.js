import * as m from 'mithril';
import { isInGame, getPlayers } from '../../common/utils/game';
import { getPlayerColor } from '../../common/utils/color';
import Component from '../../common/Component';

export default class ResourcesOverview extends Component {
  icons() {
    return {
      human: require('../assets/ui/human.png'),
      orc: require('../assets/ui/orc.png'),
      nightelf: require('../assets/ui/nightelf.png'),
      undead: require('../assets/ui/undead.png'),
      gold: require('../assets/ui/gold.png'),
      lumber: require('../assets/ui/lumber.png'),
      supply: require('../assets/ui/supply.png')
    };
  }

  view() {
    if (!isInGame()) {
      return null;
    }

    return (
      <div class="players">
        {getPlayers().map(player => (
          <div
            class={`player-container${player.id === 1 ? ' reverse' : ''}`}
            // style={`background-color: ${getPlayerColor(player)}`}
          >
            <img class="race" src={this.icons()[player.race.toLowerCase()]}></img>
            <div class={`${player.id === 1 ? 'othername' : 'name'}`} style={`background-color: ${getPlayerColor(player)};`}>
              <span class={`${player.id === 1 ? 'other-inner-name' : 'inner-name'}`}>{player.name}</span>
            </div>
            <span className="stats"></span>

            <div class="resources-container">
              <img src="./assets/gold.png"></img>
              <span>{player.gold}</span>
              <img src="./assets/lumber.png"></img>
              <span>{player.lumber}</span>
              <img src="./assets/supply.png"></img>
              <span>{player.food}/{player.food_max}</span> 
            </div>  
          </div>
        ))}
      </div>
    );
  }
}
