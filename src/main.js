import {Astronomy} from './astronomy'
import {Atmosphere} from './atmosphere'
import {Condition} from './condition'
import {Forecast} from './forecast'
import {Wind} from './wind'

class App {
    constructor() {
        this.interval = 300000;
        this.initSelector();
        this.initBlocks();
        this.getWeatherInfo();
        this.intervalId = setInterval(() => { this.getWeatherInfo() }, this.interval);
    }
    initSelector() {
        this.$city = $('[data-element-type="city"]');
        this.$city.on('change', () => {
            clearInterval(this.intervalId);
            this.getWeatherInfo();
            this.intervalId = setInterval(() => { this.getWeatherInfo() }, this.interval);
        });
    }
    initBlocks() {
        this.$container = $('[data-element-type="container"]');
        this.$title = this.$container.find('[data-element-type="title"]');
        this.$link = this.$container.find('[data-element-type="title-link"]');
        this.$astronomy = this.$container.find('[data-element-type="astronomy"]');
        this.$atmosphere = this.$container.find('[data-element-type="atmosphere"]');
        this.$condition = this.$container.find('[data-element-type="condition"]');
        this.$forecast = this.$container.find('[data-element-type="forecast"]');
        this.$wind = this.$container.find('[data-element-type="wind"]');
    }
    getWeatherInfo() {
        let city = this.$city.val();
        let url = 'https://query.yahooapis.com/v1/public/';
        let query = `${url}yql?q=select * from weather.forecast where woeid in
            (select woeid from geo.places(1) where text="${city}")&format=json`;
        
        $.get(query, (data) => {
            if (data.query.results === null) {
                bootbox.alert(`City not found: ${city}!`);
            } else {
                this.fillBlocks(data.query.results.channel);
                $('.container').show();
            }
        });
    }
    fillBlocks(channel) {
        let tempUnit = channel.units.temperature;
        let speedUnit = channel.units.speed;
        this.$title.text(channel.item.title);
        this.$link.attr('href', channel.item.link);
        this.fillAstronomyBlock(channel.astronomy);
        this.fillAtmosphereBlock(channel.atmosphere);
        this.fillConditionBlock(channel.item.condition, tempUnit);
        this.fillForecastBlock(channel.item.forecast, tempUnit);
        this.fillWindBlock(channel.wind, speedUnit);
        this.$container.show();
    }
    fillAstronomyBlock(astronomy) {
        let astronomyModel = new Astronomy(astronomy);
        this.$astronomy.html(astronomyModel.getHtml());
    }
    fillAtmosphereBlock(atmosphere) {
        let atmosphereMoedel = new Atmosphere(atmosphere);
        this.$atmosphere.html(atmosphereMoedel.getHtml());
    }
    fillConditionBlock(condition, tempUnit) {
        let conditionModel = new Condition(condition, tempUnit);
        this.$condition.html(conditionModel.getHtml());
    }
    fillWindBlock(wind, speedUnit) {
        let windModel = new Wind(wind, speedUnit);
        this.$wind.html(windModel.getHtml());
    }
    fillForecastBlock(forecasts, tempUnit) {
        let forecastHtml = [];
        for (let forecast of forecasts) {
            let item = new Forecast(forecast, tempUnit);
            forecastHtml.push(item.getBlockContent().join(''));
        }
        this.$forecast.html(forecastHtml.join(''));
    }
}

export let app = new App();