'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Forecast = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _weatherItem = require('./weatherItem');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Forecast = exports.Forecast = function (_WeatherItem) {
    _inherits(Forecast, _WeatherItem);

    function Forecast(forecast, tempUnit) {
        _classCallCheck(this, Forecast);

        var _this = _possibleConstructorReturn(this, (Forecast.__proto__ || Object.getPrototypeOf(Forecast)).call(this));

        _this.date = forecast.date;
        _this.day = forecast.day;
        _this.high = forecast.high;
        _this.low = forecast.low;
        _this.text = forecast.text;
        _this.tempUnit = tempUnit;
        return _this;
    }

    _createClass(Forecast, [{
        key: 'getBlockContent',
        value: function getBlockContent() {
            _get(Forecast.prototype.__proto__ || Object.getPrototypeOf(Forecast.prototype), 'getWeatherItemHtml', this).call(this, 'Date', new Date(Date.parse(this.date)).toLocaleDateString());
            _get(Forecast.prototype.__proto__ || Object.getPrototypeOf(Forecast.prototype), 'getWeatherItemHtml', this).call(this, 'Day', this.day);
            _get(Forecast.prototype.__proto__ || Object.getPrototypeOf(Forecast.prototype), 'getWeatherItemHtml', this).call(this, 'High', this.high + '<sup>o</sup> ' + this.tempUnit);
            _get(Forecast.prototype.__proto__ || Object.getPrototypeOf(Forecast.prototype), 'getWeatherItemHtml', this).call(this, 'Low', this.low + '<sup>o</sup> ' + this.tempUnit);
            _get(Forecast.prototype.__proto__ || Object.getPrototypeOf(Forecast.prototype), 'getWeatherItemHtml', this).call(this, 'Text', this.text);
            this.blockContent.push('</div>');
            return this.blockContent;
        }
    }]);

    return Forecast;
}(_weatherItem.WeatherItem);