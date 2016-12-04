export class WeatherItem {
    constructor(blockTitle) {
        this.blockContent = [];
        if (blockTitle) {
            this.blockContent.push(`<article class="article">${blockTitle}</article>`);
            this.blockContent.push('<hr></hr>');
        }
        this.blockContent.push('<div class="weather-block">');
    }
    getWeatherItemHtml(itemTitle, itemValue, isLast) {
        this.blockContent.push('<div class="weather-block-item">');
        this.blockContent.push(`<div class="weather-block-item-title">${itemTitle}</div>`);
        this.blockContent.push(`<div class="weather-block-item-value">${itemValue}</div>`);
        this.blockContent.push('</div>');
        if (isLast)
            this.blockContent.push('</div>');
    }
}