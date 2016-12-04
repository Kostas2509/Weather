import {WeatherItem} from './weatherItem'

export class Wind extends WeatherItem {
    constructor(wind, speedUnit) {
        super('Wind');
        this.chill = wind.chill;
        this.direction = wind.direction;
        this.speed = wind.speed;
        this.speedUnit = speedUnit;
    }
    getHtml() {
        super.getWeatherItemHtml('Chill', this.chill);
        super.getWeatherItemHtml('Direction', this.getDirectionName());
        super.getWeatherItemHtml('Speed', `${this.speed} ${this.speedUnit}`);
        return this.blockContent.join('');
        
    }
    getDirectionName() {
        const changeAngleValue = 22.5;
        const swapDirectionValue = 0.5;
        const directionCount = 16;

        var val = Math.floor((this.direction / changeAngleValue) + swapDirectionValue);
        var directionNames = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
        return directionNames[(val % directionCount)];
    }
}