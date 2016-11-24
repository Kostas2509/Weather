'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Atmosphere = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _weatherItem = require('./weatherItem');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Atmosphere = exports.Atmosphere = function (_WeatherItem) {
    _inherits(Atmosphere, _WeatherItem);

    function Atmosphere(atmosphere) {
        _classCallCheck(this, Atmosphere);

        var _this = _possibleConstructorReturn(this, (Atmosphere.__proto__ || Object.getPrototypeOf(Atmosphere)).call(this, 'Atmosphere'));

        _this.humidity = atmosphere.humidity;
        _this.pressure = atmosphere.pressure;
        _this.rising = atmosphere.rising;
        _this.visibility = atmosphere.visibility;
        return _this;
    }

    _createClass(Atmosphere, [{
        key: 'getHtml',
        value: function getHtml() {
            _get(Atmosphere.prototype.__proto__ || Object.getPrototypeOf(Atmosphere.prototype), 'getWeatherItemHtml', this).call(this, 'Humidity', this.humidity + ' %');
            _get(Atmosphere.prototype.__proto__ || Object.getPrototypeOf(Atmosphere.prototype), 'getWeatherItemHtml', this).call(this, 'Pressure', this.pressure);
            _get(Atmosphere.prototype.__proto__ || Object.getPrototypeOf(Atmosphere.prototype), 'getWeatherItemHtml', this).call(this, 'UV Index', this.rising);
            _get(Atmosphere.prototype.__proto__ || Object.getPrototypeOf(Atmosphere.prototype), 'getWeatherItemHtml', this).call(this, 'Visibility', this.visibility, true);
            return this.blockContent.join('');
        }
    }]);

    return Atmosphere;
}(_weatherItem.WeatherItem);