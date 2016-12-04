import {WeatherItem} from './weatherItem'

export class Atmosphere extends WeatherItem {
    constructor(atmosphere) {
        super('Atmosphere');
        this.humidity = atmosphere.humidity;
        this.pressure = atmosphere.pressure;
        this.rising = atmosphere.rising;
        this.visibility = atmosphere.visibility;
    }
    getHtml() {
        super.getWeatherItemHtml('Humidity', `${this.humidity} %`);
        super.getWeatherItemHtml('Pressure', this.pressure);
        super.getWeatherItemHtml('UV Index', this.rising);
        super.getWeatherItemHtml('Visibility', this.visibility, true);
        return this.blockContent.join('');
    }
}