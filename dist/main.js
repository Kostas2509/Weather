'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.app = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _astronomy = require('./astronomy');

var _atmosphere = require('./atmosphere');

var _condition = require('./condition');

var _forecast = require('./forecast');

var _wind = require('./wind');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
    function App() {
        var _this = this;

        _classCallCheck(this, App);

        this.interval = 300000;
        this.initSelector();
        this.initBlocks();
        this.getWeatherInfo();
        this.intervalId = setInterval(function () {
            _this.getWeatherInfo();
        }, this.interval);
    }

    _createClass(App, [{
        key: 'initSelector',
        value: function initSelector() {
            var _this2 = this;

            this.$city = $('.js-city');
            this.$city.on('change', function () {
                clearInterval(_this2.intervalId);
                _this2.getWeatherInfo();
                _this2.intervalId = setInterval(function () {
                    _this2.getWeatherInfo();
                }, _this2.interval);
            });
        }
    }, {
        key: 'initBlocks',
        value: function initBlocks() {
            this.$container = $('.js-container');
            this.$title = this.$container.find('.js-title');
            this.$link = this.$container.find('.js-title-link');
            this.$astronomy = this.$container.find('.js-astronomy');
            this.$atmosphere = this.$container.find('.js-atmosphere');
            this.$condition = this.$container.find('.js-condition');
            this.$forecast = this.$container.find('.js-forecast');
            this.$wind = this.$container.find('.js-wind');
        }
    }, {
        key: 'getWeatherInfo',
        value: function getWeatherInfo() {
            var _this3 = this;

            var city = this.$city.val();
            var url = 'https://query.yahooapis.com/v1/public/';
            var query = url + 'yql?q=select * from weather.forecast where woeid in\n            (select woeid from geo.places(1) where text="' + city + '")&format=json';

            $.get(query, function (data) {
                if (data.query.results === null) {
                    bootbox.alert('City not found: ' + city + '!');
                } else {
                    _this3.fillBlocks(data.query.results.channel);
                    $('.container').show();
                }
            });
        }
    }, {
        key: 'fillBlocks',
        value: function fillBlocks(channel) {
            var tempUnit = channel.units.temperature;
            var speedUnit = channel.units.speed;
            this.$title.text(channel.item.title);
            this.$link.attr('href', channel.item.link);
            this.fillAstronomyBlock(channel.astronomy);
            this.fillAtmosphereBlock(channel.atmosphere);
            this.fillConditionBlock(channel.item.condition, tempUnit);
            this.fillForecastBlock(channel.item.forecast, tempUnit);
            this.fillWindBlock(channel.wind, speedUnit);
            this.$container.show();
        }
    }, {
        key: 'fillAstronomyBlock',
        value: function fillAstronomyBlock(astronomy) {
            var astronomyModel = new _astronomy.Astronomy(astronomy);
            this.$astronomy.html(astronomyModel.getHtml());
        }
    }, {
        key: 'fillAtmosphereBlock',
        value: function fillAtmosphereBlock(atmosphere) {
            var atmosphereMoedel = new _atmosphere.Atmosphere(atmosphere);
            this.$atmosphere.html(atmosphereMoedel.getHtml());
        }
    }, {
        key: 'fillConditionBlock',
        value: function fillConditionBlock(condition, tempUnit) {
            var conditionModel = new _condition.Condition(condition, tempUnit);
            this.$condition.html(conditionModel.getHtml());
        }
    }, {
        key: 'fillWindBlock',
        value: function fillWindBlock(wind, speedUnit) {
            var windModel = new _wind.Wind(wind, speedUnit);
            this.$wind.html(windModel.getHtml());
        }
    }, {
        key: 'fillForecastBlock',
        value: function fillForecastBlock(forecasts, tempUnit) {
            var forecastHtml = [];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = forecasts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var forecast = _step.value;

                    var item = new _forecast.Forecast(forecast, tempUnit);
                    forecastHtml.push(item.getBlockContent().join(''));
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            this.$forecast.html(forecastHtml.join(''));
        }
    }]);

    return App;
}();

var app = exports.app = new App();