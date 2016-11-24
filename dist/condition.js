'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Condition = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _weatherItem = require('./weatherItem');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Condition = exports.Condition = function (_WeatherItem) {
    _inherits(Condition, _WeatherItem);

    function Condition(condition, tempUnit) {
        _classCallCheck(this, Condition);

        var _this = _possibleConstructorReturn(this, (Condition.__proto__ || Object.getPrototypeOf(Condition)).call(this, 'Condition'));

        _this.date = condition.date;
        _this.temp = condition.temp;
        _this.text = condition.text;
        _this.tempUnit = tempUnit;
        return _this;
    }

    _createClass(Condition, [{
        key: 'getHtml',
        value: function getHtml() {
            _get(Condition.prototype.__proto__ || Object.getPrototypeOf(Condition.prototype), 'getWeatherItemHtml', this).call(this, 'Date', this.date);
            _get(Condition.prototype.__proto__ || Object.getPrototypeOf(Condition.prototype), 'getWeatherItemHtml', this).call(this, 'Temp', this.temp + '<sup>o</sup> ' + this.tempUnit);
            _get(Condition.prototype.__proto__ || Object.getPrototypeOf(Condition.prototype), 'getWeatherItemHtml', this).call(this, 'Text', this.text);
            return this.blockContent.join('');
        }
    }]);

    return Condition;
}(_weatherItem.WeatherItem);