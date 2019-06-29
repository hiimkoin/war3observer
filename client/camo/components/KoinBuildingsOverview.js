import * as m from 'mithril';
import { isInGame, getPlayers } from '../../common/utils/game';
import { getPlayerColor } from '../../common/utils/color';
import Component from '../../common/Component';
import Icon from '../../common/components/Icon';

export default class BuildingsOverview extends Component {
  view() {
    if (!isInGame()) {
      return null;
    }

    return (
      <div class="BuildingsOverview">
        <div className="building">
          {getPlayers().map(player => (
            <div className="Buildings">
              {player.buildings_on_map.map(building => (
                <div className="building-container">
                  <Icon id={building.id} class="icon" />
                  <span
                    class="count"
                    style={`background-color: ${getPlayerColor(player)};`}
                  >{building.progress_percent > 0 ? building.progress_percent : 100}%</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
