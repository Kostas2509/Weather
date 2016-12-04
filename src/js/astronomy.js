import {WeatherItem} from './weatherItem'

export class Astronomy extends WeatherItem {
    constructor(astronomy) {
        super('Sun and moon');
        this.sunrise = astronomy.sunrise;
        this.sunset = astronomy.sunset;
    }
    getHtml() {
        super.getWeatherItemHtml('Sunrise', this.sunrise);
        super.getWeatherItemHtml('Sunset', this.sunset, true);
        return this.blockContent.join('');
    }
}