'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setNotes = exports.getNotes = undefined;

var _notesConstants = require('./notesConstants');

var getNotes = exports.getNotes = function getNotes() {
  return function (dispatch) {
    dispatch({
      type: _notesConstants.NOTES_GET
    });
  };
};

var setNotes = exports.setNotes = function setNotes(notes) {
  return function (dispatch) {
    dispatch({
      type: _notesConstants.NOTES_SET,
      payload: { notes: notes }
    });
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ub3Rlc0FjdGlvbnMuanMiXSwibmFtZXMiOlsiZ2V0Tm90ZXMiLCJkaXNwYXRjaCIsInR5cGUiLCJzZXROb3RlcyIsIm5vdGVzIiwicGF5bG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUtPLElBQU1BLDhCQUFXLFNBQVhBLFFBQVc7QUFBQSxTQUFNLFVBQUNDLFFBQUQsRUFBYztBQUMxQ0EsYUFBUztBQUNQQztBQURPLEtBQVQ7QUFHRCxHQUp1QjtBQUFBLENBQWpCOztBQU1BLElBQU1DLDhCQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRDtBQUFBLFNBQVcsVUFBQ0gsUUFBRCxFQUFjO0FBQy9DQSxhQUFTO0FBQ1BDLHFDQURPO0FBRVBHLGVBQVMsRUFBRUQsWUFBRjtBQUZGLEtBQVQ7QUFJRCxHQUx1QjtBQUFBLENBQWpCIiwiZmlsZSI6Im5vdGVzQWN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIE5PVEVTX0dFVCxcbiAgTk9URVNfU0VUXG59IGZyb20gJy4vbm90ZXNDb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgZ2V0Tm90ZXMgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IE5PVEVTX0dFVFxuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXROb3RlcyA9IChub3RlcykgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBOT1RFU19TRVQsXG4gICAgcGF5bG9hZDogeyBub3RlcyB9XG4gIH0pO1xufTsiXX0=