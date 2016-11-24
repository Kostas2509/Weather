'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WeatherItem = exports.WeatherItem = function () {
    function WeatherItem(blockTitle) {
        _classCallCheck(this, WeatherItem);

        this.blockContent = [];
        if (blockTitle) {
            this.blockContent.push('<article class="article">' + blockTitle + '</article>');
            this.blockContent.push('<hr></hr>');
        }
        this.blockContent.push('<div class="weather-block">');
    }

    _createClass(WeatherItem, [{
        key: 'getWeatherItemHtml',
        value: function getWeatherItemHtml(itemTitle, itemValue, isLast) {
            this.blockContent.push('<div class="weather-block-item">');
            this.blockContent.push('<div class="weather-block-item-title">' + itemTitle + '</div>');
            this.blockContent.push('<div class="weather-block-item-value">' + itemValue + '</div>');
            this.blockContent.push('</div>');
            if (isLast) this.blockContent.push('</div>');
        }
    }]);

    return WeatherItem;
}();