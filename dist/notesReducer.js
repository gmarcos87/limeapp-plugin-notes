'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = exports.initialState = undefined;

var _notesConstants = require('./notesConstants');

var initialState = exports.initialState = {
  notes: '',
  loading: false,
  error: false
};

var reducer = exports.reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var _ref = arguments[1];
  var type = _ref.type,
      payload = _ref.payload,
      meta = _ref.meta;

  switch (type) {

    case _notesConstants.NOTES_GET:
      return Object.assign({}, initialState, { loading: true });

    case _notesConstants.NOTES_GET_ERROR:
      return Object.assign({}, initialState, { loading: false, error: true });

    case _notesConstants.NOTES_GET_SUCCESS:
      return Object.assign({}, initialState, { loading: false, notes: payload.notes });

    case _notesConstants.NOTES_SET_ERROR:
      return Object.assign({}, initialState, { loading: false, error: true });

    case _notesConstants.NOTES_SET:
      return Object.assign({}, state, { loading: true });

    default:
      return state;
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ub3Rlc1JlZHVjZXIuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibm90ZXMiLCJsb2FkaW5nIiwiZXJyb3IiLCJyZWR1Y2VyIiwic3RhdGUiLCJ0eXBlIiwicGF5bG9hZCIsIm1ldGEiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFRTyxJQUFNQSxzQ0FBZTtBQUMxQkMsU0FBTyxFQURtQjtBQUUxQkMsV0FBUyxLQUZpQjtBQUcxQkMsU0FBTztBQUhtQixDQUFyQjs7QUFNQSxJQUFNQyw0QkFBVSxTQUFWQSxPQUFVLEdBQW1EO0FBQUEsTUFBbERDLEtBQWtELHVFQUExQ0wsWUFBMEM7QUFBQTtBQUFBLE1BQTFCTSxJQUEwQixRQUExQkEsSUFBMEI7QUFBQSxNQUFwQkMsT0FBb0IsUUFBcEJBLE9BQW9CO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUN4RSxVQUFRRixJQUFSOztBQUVFO0FBQ0UsYUFBT0csT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JWLFlBQWxCLEVBQWdDLEVBQUNFLFNBQVMsSUFBVixFQUFoQyxDQUFQOztBQUVGO0FBQ0UsYUFBT08sT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JWLFlBQWxCLEVBQWdDLEVBQUNFLFNBQVMsS0FBVixFQUFpQkMsT0FBTyxJQUF4QixFQUFoQyxDQUFQOztBQUVGO0FBQ0UsYUFBT00sT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JWLFlBQWxCLEVBQWdDLEVBQUNFLFNBQVMsS0FBVixFQUFpQkQsT0FBT00sUUFBUU4sS0FBaEMsRUFBaEMsQ0FBUDs7QUFFRjtBQUNFLGFBQU9RLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCVixZQUFsQixFQUFnQyxFQUFDRSxTQUFTLEtBQVYsRUFBaUJDLE9BQU8sSUFBeEIsRUFBaEMsQ0FBUDs7QUFFRjtBQUNFLGFBQU9NLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCTCxLQUFsQixFQUF5QixFQUFDSCxTQUFTLElBQVYsRUFBekIsQ0FBUDs7QUFFRjtBQUNFLGFBQU9HLEtBQVA7QUFsQko7QUFvQkQsQ0FyQk0iLCJmaWxlIjoibm90ZXNSZWR1Y2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgTk9URVNfR0VULFxuICBOT1RFU19HRVRfRVJST1IsXG4gIE5PVEVTX0dFVF9TVUNDRVNTLFxuICBOT1RFU19TRVQsXG4gIE5PVEVTX1NFVF9FUlJPUlxufSBmcm9tICcuL25vdGVzQ29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgbm90ZXM6ICcnLFxuICBsb2FkaW5nOiBmYWxzZSxcbiAgZXJyb3I6IGZhbHNlXG59O1xuXG5leHBvcnQgY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgeyB0eXBlLCBwYXlsb2FkLCBtZXRhIH0pID0+IHtcbiAgc3dpdGNoICh0eXBlKSB7XG5cbiAgICBjYXNlIE5PVEVTX0dFVDpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpbml0aWFsU3RhdGUsIHtsb2FkaW5nOiB0cnVlfSk7XG5cbiAgICBjYXNlIE5PVEVTX0dFVF9FUlJPUjpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpbml0aWFsU3RhdGUsIHtsb2FkaW5nOiBmYWxzZSwgZXJyb3I6IHRydWV9KTtcblxuICAgIGNhc2UgTk9URVNfR0VUX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgaW5pdGlhbFN0YXRlLCB7bG9hZGluZzogZmFsc2UsIG5vdGVzOiBwYXlsb2FkLm5vdGVzfSk7XG5cbiAgICBjYXNlIE5PVEVTX1NFVF9FUlJPUjpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpbml0aWFsU3RhdGUsIHtsb2FkaW5nOiBmYWxzZSwgZXJyb3I6IHRydWV9KTtcblxuICAgIGNhc2UgTk9URVNfU0VUOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7bG9hZGluZzogdHJ1ZSB9KTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG4iXX0=