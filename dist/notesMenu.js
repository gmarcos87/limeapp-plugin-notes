'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Menu = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = require('preact');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = exports.Menu = function (_Component) {
  _inherits(Menu, _Component);

  function Menu() {
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).apply(this, arguments));
  }

  _createClass(Menu, [{
    key: 'render',
    value: function render() {
      return (0, _preact.h)(
        'a',
        { href: '#/notes' },
        I18n.t('Notes')
      );
    }
  }]);

  return Menu;
}(_preact.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ub3Rlc01lbnUuanMiXSwibmFtZXMiOlsiTWVudSIsIkkxOG4iLCJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7SUFFYUEsSSxXQUFBQSxJOzs7Ozs7Ozs7Ozs2QkFDRjtBQUNQLGFBQVE7QUFBQTtBQUFBLFVBQUcsTUFBTSxTQUFUO0FBQXFCQyxhQUFLQyxDQUFMLENBQU8sT0FBUDtBQUFyQixPQUFSO0FBQ0QiLCJmaWxlIjoibm90ZXNNZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSAncHJlYWN0JztcblxuZXhwb3J0IGNsYXNzIE1lbnUgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuICg8YSBocmVmPXsnIy9ub3Rlcyd9PntJMThuLnQoJ05vdGVzJyl9PC9hPik7XG4gIH1cbn0iXX0=