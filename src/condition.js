import {WeatherItem} from './weatherItem'

export class Condition extends WeatherItem {
    constructor(condition, tempUnit) {
        super('Condition');
        this.date = condition.date;
        this.temp = condition.temp;
        this.text = condition.text;
        this.tempUnit = tempUnit;
    }
    getHtml() {
        super.getWeatherItemHtml('Date', this.date);
        super.getWeatherItemHtml('Temp', `${this.temp}<sup>o</sup> ${this.tempUnit}`);
        super.getWeatherItemHtml('Text', this.text);
        return this.blockContent.join('');
    }
}