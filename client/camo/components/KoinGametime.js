import * as m from 'mithril';
import { isInGame, getGameTime } from '../../common/utils/game';
import Component from '../../common/Component';

export default class GametimeOverview extends Component {
  view() {
    if (!isInGame()) {
      return null;
    }

    return (
      <div class="GametimeOverview">
        {getGameTime()}
      </div>
    );
  }
}
