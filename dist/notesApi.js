'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getNotes = exports.getNotes = function getNotes(api, sid) {
  return api.call(sid, 'get_notes', {}).map(function (x) {
    if (typeof x.notes === 'undefined') {
      throw { error: true };
    }
    return x;
  });
};

var setNotes = exports.setNotes = function setNotes(api, sid, notes) {
  return api.call(sid, 'set_notes', notes);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ub3Rlc0FwaS5qcyJdLCJuYW1lcyI6WyJnZXROb3RlcyIsImFwaSIsInNpZCIsImNhbGwiLCJtYXAiLCJ4Iiwibm90ZXMiLCJlcnJvciIsInNldE5vdGVzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFPLElBQU1BLDhCQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDcEMsU0FBT0QsSUFBSUUsSUFBSixDQUFTRCxHQUFULEVBQWMsV0FBZCxFQUEyQixFQUEzQixFQUNKRSxHQURJLENBQ0EsYUFBSztBQUNSLFFBQUksT0FBT0MsRUFBRUMsS0FBVCxLQUFtQixXQUF2QixFQUFvQztBQUNsQyxZQUFNLEVBQUNDLE9BQU0sSUFBUCxFQUFOO0FBQ0Q7QUFDRCxXQUFPRixDQUFQO0FBQ0QsR0FOSSxDQUFQO0FBT0QsQ0FSTTs7QUFVQSxJQUFNRyw4QkFBVyxTQUFYQSxRQUFXLENBQUNQLEdBQUQsRUFBTUMsR0FBTixFQUFXSSxLQUFYLEVBQXFCO0FBQzNDLFNBQU9MLElBQUlFLElBQUosQ0FBU0QsR0FBVCxFQUFjLFdBQWQsRUFBMkJJLEtBQTNCLENBQVA7QUFDRCxDQUZNIiwiZmlsZSI6Im5vdGVzQXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGdldE5vdGVzID0gKGFwaSwgc2lkKSA9PiB7XG4gIHJldHVybiBhcGkuY2FsbChzaWQsICdnZXRfbm90ZXMnLCB7IH0pXG4gICAgLm1hcCh4ID0+IHtcbiAgICAgIGlmICh0eXBlb2YgeC5ub3RlcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cge2Vycm9yOnRydWV9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHg7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0Tm90ZXMgPSAoYXBpLCBzaWQsIG5vdGVzKSA9PiB7XG4gIHJldHVybiBhcGkuY2FsbChzaWQsICdzZXRfbm90ZXMnLCBub3Rlcyk7XG59OyJdfQ==