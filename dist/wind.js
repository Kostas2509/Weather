'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Wind = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _weatherItem = require('./weatherItem');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Wind = exports.Wind = function (_WeatherItem) {
    _inherits(Wind, _WeatherItem);

    function Wind(wind, speedUnit) {
        _classCallCheck(this, Wind);

        var _this = _possibleConstructorReturn(this, (Wind.__proto__ || Object.getPrototypeOf(Wind)).call(this, 'Wind'));

        _this.chill = wind.chill;
        _this.direction = wind.direction;
        _this.speed = wind.speed;
        _this.speedUnit = speedUnit;
        return _this;
    }

    _createClass(Wind, [{
        key: 'getHtml',
        value: function getHtml() {
            _get(Wind.prototype.__proto__ || Object.getPrototypeOf(Wind.prototype), 'getWeatherItemHtml', this).call(this, 'Chill', this.chill);
            _get(Wind.prototype.__proto__ || Object.getPrototypeOf(Wind.prototype), 'getWeatherItemHtml', this).call(this, 'Direction', this.getDirectionName());
            _get(Wind.prototype.__proto__ || Object.getPrototypeOf(Wind.prototype), 'getWeatherItemHtml', this).call(this, 'Speed', this.speed + ' ' + this.speedUnit);
            return this.blockContent.join('');
        }
    }, {
        key: 'getDirectionName',
        value: function getDirectionName() {
            var changeAngleValue = 22.5;
            var swapDirectionValue = 0.5;
            var directionCount = 16;

            var val = Math.floor(this.direction / changeAngleValue + swapDirectionValue);
            var directionNames = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
            return directionNames[val % directionCount];
        }
    }]);

    return Wind;
}(_weatherItem.WeatherItem);