import  epics from './notesEpics';
import { reducer } from './notesReducer';
import * as constants from './notesConstants';
import Page from './notesPage';
import { Menu } from './notesMenu';

import i18nEs from '../i18n/translations/es.json';
import i18nEn from '../i18n/translations/en.json';

export default {
  name: 'Notes',
  page: Page,
  menu: Menu,
  store: {
    name: 'notes',
    epics,
    reducer,
    constants
  },
  translations: Object.assign(
    i18nEn,
    i18nEs
  )
};