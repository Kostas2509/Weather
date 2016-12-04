import {WeatherItem} from './weatherItem'

export class Forecast extends WeatherItem {
    constructor(forecast, tempUnit)
    {
        super();
        this.date = forecast.date;
        this.day = forecast.day;
        this.high = forecast.high;
        this.low = forecast.low;
        this.text = forecast.text;
        this.tempUnit = tempUnit;
    }
    getBlockContent() {
        super.getWeatherItemHtml('Date', new Date(Date.parse(this.date)).toLocaleDateString());
        super.getWeatherItemHtml('Day', this.day);
        super.getWeatherItemHtml('High', `${this.high}<sup>o</sup> ${this.tempUnit}`);
        super.getWeatherItemHtml('Low', `${this.low}<sup>o</sup> ${this.tempUnit}`);
        super.getWeatherItemHtml('Text', this.text);
        this.blockContent.push('</div>')
        return this.blockContent;
    }
}