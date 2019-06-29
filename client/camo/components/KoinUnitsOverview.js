import * as m from 'mithril';
import { isInGame, getPlayers } from '../../common/utils/game';
import { getPlayerColor } from '../../common/utils/color';
import Component from '../../common/Component';
import Icon from '../../common/components/Icon';

export default class UnitsOverview extends Component {

  view() {
    if (!isInGame()) {
      return null;
    }

    return (
      <div className="all-units">
        {getPlayers().map(player => (
        <div className="units">
          {player.units_on_map.map(unit => (
          <div class={`units-container${player.id === 0 ? ' reversed' : ''}`}>
            <Icon id={unit.id} class="icon" />
            <span class="count" style={`background-color: ${getPlayerColor(player)};`}>{unit.alive_count}</span>
          </div>
          ))}
        </div>
        ))}
      </div>
    );
  }
}
