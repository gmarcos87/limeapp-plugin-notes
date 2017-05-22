'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _notesApi = require('./notesApi');

require('rxjs/add/operator/mergeMap');

require('rxjs/add/operator/map');

require('rxjs/add/operator/catch');

var _notesConstants = require('./notesConstants');

var getNotesEpic = function getNotesEpic(action$, _ref, _ref2) {
  var getState = _ref.getState;
  var wsAPI = _ref2.wsAPI;
  return action$.ofType.apply(action$, [_notesConstants.NOTES_GET, _notesConstants.NOTES_SET_SUCCESS]).mergeMap(function () {
    return (0, _notesApi.getNotes)(wsAPI, getState().meta.sid);
  }).map(function (notes) {
    return { type: _notesConstants.NOTES_GET_SUCCESS, payload: notes };
  }).catch(function (error) {
    return [{ type: _notesConstants.NOTES_GET_ERROR, payload: error }];
  });
};

var setNotesEpic = function setNotesEpic(action$, _ref3, _ref4) {
  var getState = _ref3.getState;
  var wsAPI = _ref4.wsAPI;
  return action$.ofType(_notesConstants.NOTES_SET).map(function (action) {
    return action.payload.notes;
  }).mergeMap(function (notes) {
    return (0, _notesApi.setNotes)(wsAPI, getState().meta.sid, { text: notes }).map(function (notes) {
      return { type: _notesConstants.NOTES_SET_SUCCESS, payload: notes };
    }).catch(function (error) {
      return [{ type: _notesConstants.NOTES_SET_ERROR, payload: error }];
    });
  });
};

exports.default = { getNotesEpic: getNotesEpic, setNotesEpic: setNotesEpic };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ub3Rlc0VwaWNzLmpzIl0sIm5hbWVzIjpbImdldE5vdGVzRXBpYyIsImFjdGlvbiQiLCJnZXRTdGF0ZSIsIndzQVBJIiwib2ZUeXBlIiwibWVyZ2VNYXAiLCJtZXRhIiwic2lkIiwibWFwIiwidHlwZSIsInBheWxvYWQiLCJub3RlcyIsImNhdGNoIiwiZXJyb3IiLCJzZXROb3Rlc0VwaWMiLCJhY3Rpb24iLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFTQSxJQUFNQSxlQUFlLFNBQWZBLFlBQWUsQ0FBRUMsT0FBRjtBQUFBLE1BQWFDLFFBQWIsUUFBYUEsUUFBYjtBQUFBLE1BQTBCQyxLQUExQixTQUEwQkEsS0FBMUI7QUFBQSxTQUNuQkYsUUFBUUcsTUFBUixnQkFBa0IsOERBQWxCLEVBQ0dDLFFBREgsQ0FDWTtBQUFBLFdBQU0sd0JBQVNGLEtBQVQsRUFBZ0JELFdBQVdJLElBQVgsQ0FBZ0JDLEdBQWhDLENBQU47QUFBQSxHQURaLEVBRUtDLEdBRkwsQ0FFVTtBQUFBLFdBQVUsRUFBRUMsdUNBQUYsRUFBMkJDLFNBQVNDLEtBQXBDLEVBQVY7QUFBQSxHQUZWLEVBR0tDLEtBSEwsQ0FHWTtBQUFBLFdBQVMsQ0FBRSxFQUFFSCxxQ0FBRixFQUF5QkMsU0FBU0csS0FBbEMsRUFBRixDQUFUO0FBQUEsR0FIWixDQURtQjtBQUFBLENBQXJCOztBQU1BLElBQU1DLGVBQWUsU0FBZkEsWUFBZSxDQUFFYixPQUFGO0FBQUEsTUFBYUMsUUFBYixTQUFhQSxRQUFiO0FBQUEsTUFBMEJDLEtBQTFCLFNBQTBCQSxLQUExQjtBQUFBLFNBQ25CRixRQUFRRyxNQUFSLDRCQUNHSSxHQURILENBQ087QUFBQSxXQUFVTyxPQUFPTCxPQUFQLENBQWVDLEtBQXpCO0FBQUEsR0FEUCxFQUVHTixRQUZILENBRVksVUFBQ00sS0FBRDtBQUFBLFdBQVcsd0JBQVNSLEtBQVQsRUFBZ0JELFdBQVdJLElBQVgsQ0FBZ0JDLEdBQWhDLEVBQXFDLEVBQUNTLE1BQUtMLEtBQU4sRUFBckMsRUFDbEJILEdBRGtCLENBQ2I7QUFBQSxhQUFVLEVBQUVDLHVDQUFGLEVBQTJCQyxTQUFTQyxLQUFwQyxFQUFWO0FBQUEsS0FEYSxFQUVsQkMsS0FGa0IsQ0FFWDtBQUFBLGFBQVMsQ0FBRSxFQUFFSCxxQ0FBRixFQUF5QkMsU0FBU0csS0FBbEMsRUFBRixDQUFUO0FBQUEsS0FGVyxDQUFYO0FBQUEsR0FGWixDQURtQjtBQUFBLENBQXJCOztrQkFRZSxFQUFFYiwwQkFBRixFQUFnQmMsMEJBQWhCLEUiLCJmaWxlIjoibm90ZXNFcGljcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldE5vdGVzLCBzZXROb3RlcyB9IGZyb20gJy4vbm90ZXNBcGknO1xuXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21lcmdlTWFwJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xuXG5pbXBvcnQge1xuICBOT1RFU19HRVQsXG4gIE5PVEVTX0dFVF9TVUNDRVNTLFxuICBOT1RFU19HRVRfRVJST1IsXG4gIE5PVEVTX1NFVCxcbiAgTk9URVNfU0VUX1NVQ0NFU1MsXG4gIE5PVEVTX1NFVF9FUlJPUlxufSBmcm9tICcuL25vdGVzQ29uc3RhbnRzJztcblxuY29uc3QgZ2V0Tm90ZXNFcGljID0gKCBhY3Rpb24kLCB7IGdldFN0YXRlfSwgeyB3c0FQSSB9ICkgPT5cbiAgYWN0aW9uJC5vZlR5cGUoLi4uW05PVEVTX0dFVCxOT1RFU19TRVRfU1VDQ0VTU10pXG4gICAgLm1lcmdlTWFwKCgpID0+IGdldE5vdGVzKHdzQVBJLCBnZXRTdGF0ZSgpLm1ldGEuc2lkKSlcbiAgICAgIC5tYXAoIG5vdGVzID0+ICh7IHR5cGU6IE5PVEVTX0dFVF9TVUNDRVNTLCBwYXlsb2FkOiBub3RlcyB9KSlcbiAgICAgIC5jYXRjaCggZXJyb3IgPT4gWyh7IHR5cGU6IE5PVEVTX0dFVF9FUlJPUiwgcGF5bG9hZDogZXJyb3IgfSldKTtcblxuY29uc3Qgc2V0Tm90ZXNFcGljID0gKCBhY3Rpb24kLCB7IGdldFN0YXRlfSwgeyB3c0FQSSB9ICkgPT5cbiAgYWN0aW9uJC5vZlR5cGUoTk9URVNfU0VUKVxuICAgIC5tYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkLm5vdGVzKVxuICAgIC5tZXJnZU1hcCgobm90ZXMpID0+IHNldE5vdGVzKHdzQVBJLCBnZXRTdGF0ZSgpLm1ldGEuc2lkLCB7dGV4dDpub3Rlc30pXG4gICAgICAubWFwKCBub3RlcyA9PiAoeyB0eXBlOiBOT1RFU19TRVRfU1VDQ0VTUywgcGF5bG9hZDogbm90ZXMgfSkpXG4gICAgICAuY2F0Y2goIGVycm9yID0+IFsoeyB0eXBlOiBOT1RFU19TRVRfRVJST1IsIHBheWxvYWQ6IGVycm9yIH0pXSlcbiAgICApO1xuXG5leHBvcnQgZGVmYXVsdCB7IGdldE5vdGVzRXBpYywgc2V0Tm90ZXNFcGljIH07Il19