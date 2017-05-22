import { h, Component } from 'preact';

export class Menu extends Component {
  render() {
    return (<a href={'#/notes'}>{I18n.t('Notes')}</a>);
  }
}