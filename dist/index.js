'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _notesEpics = require('./notesEpics');

var _notesEpics2 = _interopRequireDefault(_notesEpics);

var _notesReducer = require('./notesReducer');

var _notesConstants = require('./notesConstants');

var constants = _interopRequireWildcard(_notesConstants);

var _notesPage = require('./notesPage');

var _notesPage2 = _interopRequireDefault(_notesPage);

var _notesMenu = require('./notesMenu');

var _es = require('../i18n/translations/es.json');

var _es2 = _interopRequireDefault(_es);

var _en = require('../i18n/translations/en.json');

var _en2 = _interopRequireDefault(_en);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'Notes',
  page: _notesPage2.default,
  menu: _notesMenu.Menu,
  store: {
    name: 'notes',
    epics: _notesEpics2.default,
    reducer: _notesReducer.reducer,
    constants: constants
  },
  translations: Object.assign(_en2.default, _es2.default)
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjb25zdGFudHMiLCJuYW1lIiwicGFnZSIsIm1lbnUiLCJzdG9yZSIsImVwaWNzIiwicmVkdWNlciIsInRyYW5zbGF0aW9ucyIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7SUFBWUEsUzs7QUFDWjs7OztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7Ozs7O2tCQUVlO0FBQ2JDLFFBQU0sT0FETztBQUViQywyQkFGYTtBQUdiQyx1QkFIYTtBQUliQyxTQUFPO0FBQ0xILFVBQU0sT0FERDtBQUVMSSwrQkFGSztBQUdMQyxrQ0FISztBQUlMTjtBQUpLLEdBSk07QUFVYk8sZ0JBQWNDLE9BQU9DLE1BQVA7QUFWRCxDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICBlcGljcyBmcm9tICcuL25vdGVzRXBpY3MnO1xuaW1wb3J0IHsgcmVkdWNlciB9IGZyb20gJy4vbm90ZXNSZWR1Y2VyJztcbmltcG9ydCAqIGFzIGNvbnN0YW50cyBmcm9tICcuL25vdGVzQ29uc3RhbnRzJztcbmltcG9ydCBQYWdlIGZyb20gJy4vbm90ZXNQYWdlJztcbmltcG9ydCB7IE1lbnUgfSBmcm9tICcuL25vdGVzTWVudSc7XG5cbmltcG9ydCBpMThuRXMgZnJvbSAnLi4vaTE4bi90cmFuc2xhdGlvbnMvZXMuanNvbic7XG5pbXBvcnQgaTE4bkVuIGZyb20gJy4uL2kxOG4vdHJhbnNsYXRpb25zL2VuLmpzb24nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdOb3RlcycsXG4gIHBhZ2U6IFBhZ2UsXG4gIG1lbnU6IE1lbnUsXG4gIHN0b3JlOiB7XG4gICAgbmFtZTogJ25vdGVzJyxcbiAgICBlcGljcyxcbiAgICByZWR1Y2VyLFxuICAgIGNvbnN0YW50c1xuICB9LFxuICB0cmFuc2xhdGlvbnM6IE9iamVjdC5hc3NpZ24oXG4gICAgaTE4bkVuLFxuICAgIGkxOG5Fc1xuICApXG59OyJdfQ==