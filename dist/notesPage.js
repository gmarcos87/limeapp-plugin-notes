'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = require('preact');

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var _redux = require('redux');

var _preactRedux = require('preact-redux');

var _notesActions = require('./notesActions');

var _notesSelectors = require('./notesSelectors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Page = function (_Component) {
  _inherits(Page, _Component);

  function Page(props) {
    _classCallCheck(this, Page);

    var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props));

    _this.state = { value: _this.props.notes };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.saveNotes = _this.saveNotes.bind(_this);
    return _this;
  }

  _createClass(Page, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({ value: event.target.value });
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.getNotes();
    }
  }, {
    key: 'saveNotes',
    value: function saveNotes() {
      this.props.setNotes(this.state.value);
    }
  }, {
    key: 'render',
    value: function render() {
      var getNotes = function getNotes(notes) {
        return notes;
      };

      return (0, _preact.h)(
        'div',
        { 'class': 'container', style: { paddingTop: '100px' } },
        (0, _preact.h)(
          'h4',
          null,
          (0, _preact.h)(
            'span',
            { translate: 'yes' },
            I18n.t('Notes of')
          ),
          ' ',
          this.props.hostname
        ),
        (0, _preact.h)('textarea', { onChange: this.handleChange, 'class': 'notes', value: getNotes(this.props.notes) }),
        (0, _preact.h)(
          'button',
          { onClick: this.saveNotes },
          I18n.t('Save notes')
        )
      );
    }
  }]);

  return Page;
}(_preact.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    notes: (0, _notesSelectors.getNotesState)(state),
    loading: state.notes.loading,
    hostname: state.meta.selectedHost
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getNotes: (0, _redux.bindActionCreators)(_notesActions.getNotes, dispatch),
    setNotes: (0, _redux.bindActionCreators)(_notesActions.setNotes, dispatch)
  };
};

exports.default = (0, _preactRedux.connect)(mapStateToProps, mapDispatchToProps)(Page);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ub3Rlc1BhZ2UuanMiXSwibmFtZXMiOlsiUGFnZSIsInByb3BzIiwic3RhdGUiLCJ2YWx1ZSIsIm5vdGVzIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsInNhdmVOb3RlcyIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJnZXROb3RlcyIsInNldE5vdGVzIiwicGFkZGluZ1RvcCIsIkkxOG4iLCJ0IiwiaG9zdG5hbWUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJsb2FkaW5nIiwibWV0YSIsInNlbGVjdGVkSG9zdCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUVBOzs7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTUEsSTs7O0FBQ0osZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw0R0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhLEVBQUNDLE9BQU8sTUFBS0YsS0FBTCxDQUFXRyxLQUFuQixFQUFiO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQixPQUFwQjtBQUNBLFVBQUtDLFNBQUwsR0FBaUIsTUFBS0EsU0FBTCxDQUFlRCxJQUFmLE9BQWpCO0FBSmlCO0FBS2xCOzs7O2lDQUVZRSxLLEVBQU87QUFDbEIsV0FBS0MsUUFBTCxDQUFjLEVBQUNOLE9BQU9LLE1BQU1FLE1BQU4sQ0FBYVAsS0FBckIsRUFBZDtBQUNEOzs7eUNBRW9CO0FBQ25CLFdBQUtGLEtBQUwsQ0FBV1UsUUFBWDtBQUNEOzs7Z0NBRVc7QUFDVixXQUFLVixLQUFMLENBQVdXLFFBQVgsQ0FBb0IsS0FBS1YsS0FBTCxDQUFXQyxLQUEvQjtBQUNEOzs7NkJBRVE7QUFDUCxVQUFJUSxXQUFXLFNBQVhBLFFBQVcsQ0FBQ1AsS0FBRDtBQUFBLGVBQVdBLEtBQVg7QUFBQSxPQUFmOztBQUVBLGFBQ0U7QUFBQTtBQUFBLFVBQUssU0FBTSxXQUFYLEVBQXVCLE9BQU8sRUFBQ1MsWUFBVyxPQUFaLEVBQTlCO0FBQ0U7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLGNBQU0sV0FBVSxLQUFoQjtBQUF1QkMsaUJBQUtDLENBQUwsQ0FBTyxVQUFQO0FBQXZCLFdBQUo7QUFBQTtBQUF1RCxlQUFLZCxLQUFMLENBQVdlO0FBQWxFLFNBREY7QUFFRSxxQ0FBVSxVQUFVLEtBQUtYLFlBQXpCLEVBQXVDLFNBQU0sT0FBN0MsRUFBcUQsT0FBT00sU0FBUyxLQUFLVixLQUFMLENBQVdHLEtBQXBCLENBQTVELEdBRkY7QUFHRTtBQUFBO0FBQUEsWUFBUSxTQUFTLEtBQUtHLFNBQXRCO0FBQWtDTyxlQUFLQyxDQUFMLENBQU8sWUFBUDtBQUFsQztBQUhGLE9BREY7QUFPRDs7Ozs7O0FBSUgsSUFBTUUsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDZixLQUFELEVBQVc7QUFDakMsU0FBTztBQUNMRSxXQUFPLG1DQUFjRixLQUFkLENBREY7QUFFTGdCLGFBQVNoQixNQUFNRSxLQUFOLENBQVljLE9BRmhCO0FBR0xGLGNBQVVkLE1BQU1pQixJQUFOLENBQVdDO0FBSGhCLEdBQVA7QUFLRCxDQU5EOztBQVFBLElBQU1DLHFCQUFxQixTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQsRUFBYztBQUN2QyxTQUFPO0FBQ0xYLGNBQVcsdURBQTZCVyxRQUE3QixDQUROO0FBRUxWLGNBQVcsdURBQTZCVSxRQUE3QjtBQUZOLEdBQVA7QUFJRCxDQUxEOztrQkFPZSwwQkFBUUwsZUFBUixFQUF5Qkksa0JBQXpCLEVBQTZDckIsSUFBN0MsQyIsImZpbGUiOiJub3Rlc1BhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tICdwcmVhY3QnO1xuXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZSc7XG5cbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdwcmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBnZXROb3Rlcywgc2V0Tm90ZXMgfSBmcm9tICcuL25vdGVzQWN0aW9ucyc7XG5pbXBvcnQgeyBnZXROb3Rlc1N0YXRlIH0gZnJvbSAnLi9ub3Rlc1NlbGVjdG9ycyc7XG5cbmNsYXNzIFBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge3ZhbHVlOiB0aGlzLnByb3BzLm5vdGVzfTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zYXZlTm90ZXMgPSB0aGlzLnNhdmVOb3Rlcy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMuZ2V0Tm90ZXMoKTtcbiAgfVxuXG4gIHNhdmVOb3RlcygpIHtcbiAgICB0aGlzLnByb3BzLnNldE5vdGVzKHRoaXMuc3RhdGUudmFsdWUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBnZXROb3RlcyA9IChub3RlcykgPT4gbm90ZXM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiIHN0eWxlPXt7cGFkZGluZ1RvcDonMTAwcHgnfX0+XG4gICAgICAgIDxoND48c3BhbiB0cmFuc2xhdGU9XCJ5ZXNcIj57STE4bi50KCdOb3RlcyBvZicpfTwvc3Bhbj4ge3RoaXMucHJvcHMuaG9zdG5hbWV9PC9oND5cbiAgICAgICAgPHRleHRhcmVhIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gY2xhc3M9J25vdGVzJyB2YWx1ZT17Z2V0Tm90ZXModGhpcy5wcm9wcy5ub3Rlcyl9PjwvdGV4dGFyZWE+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zYXZlTm90ZXN9PntJMThuLnQoJ1NhdmUgbm90ZXMnKX08L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBub3RlczogZ2V0Tm90ZXNTdGF0ZShzdGF0ZSksXG4gICAgbG9hZGluZzogc3RhdGUubm90ZXMubG9hZGluZyxcbiAgICBob3N0bmFtZTogc3RhdGUubWV0YS5zZWxlY3RlZEhvc3RcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGdldE5vdGVzIDogYmluZEFjdGlvbkNyZWF0b3JzKGdldE5vdGVzLCBkaXNwYXRjaCksXG4gICAgc2V0Tm90ZXMgOiBiaW5kQWN0aW9uQ3JlYXRvcnMoc2V0Tm90ZXMsIGRpc3BhdGNoKVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoUGFnZSk7Il19