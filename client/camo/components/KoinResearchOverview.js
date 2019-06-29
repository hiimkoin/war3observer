import * as m from 'mithril';
import { isInGame, getPlayers } from '../../common/utils/game';
import { getPlayerColor } from '../../common/utils/color';
import Component from '../../common/Component';
import Icon from '../../common/components/Icon';

export default class ResearchOverview extends Component {
  view() {
    if (!isInGame()) {
      return null;
    }

    return (
      <div class="ResearchOverview">
        <div class="researching">
          {getPlayers().map(player => (
            <div class="inprogress">
              {player.researches_in_progress.map(rip => (
                <div class={`researched-container${player.id === 1 ? ' reverse-rip' : ''}`}>
                  <Icon id={rip.id} class="icon" />
                  <div
                    className="count"
                    style={`background-color: ${getPlayerColor(player)};`}
                  >
                    {rip.progress_percent}%
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="finished">
          {getPlayers().map(player => (
            <div class="research">
              {player.upgrades_completed.map(comp => (
              <div class={`researched-container${player.id === 1 ? ' reverse-research' : ''}`}>
                <Icon id={comp.id} class="icon"></Icon>
                <div 
                  className="count"
                  style={`background-color: ${getPlayerColor(player)};`}
                >
                  {comp.level}/{comp.level_max}
                </div>
              </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
