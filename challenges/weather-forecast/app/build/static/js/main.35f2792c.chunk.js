(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(37)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,,,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/icon-low.4c0f8edd.svg"},function(e,t,a){e.exports=a.p+"static/media/icon-high.2191c1b5.svg"},function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/icon-search.87a42f03.svg"},function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/icon-heart.e22f6384.svg"},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(4),l=a.n(c),i=a(5),s=a(6),o=a(8),u=a(7),m=a(9),d=a(2);var h=function(e){return Math.round(5/9*(e-32))};var f=function(e){e=Array.isArray(e)?e:[e];var t='text="'.concat(e.join('" or text="'),'"'),a="select woeid from geo.places(1) where ".concat(t),r="select * from weather.forecast where woeid in (".concat(a,") and u='c'");return"https://query.yahooapis.com/v1/public/yql?q=".concat(r,"&format=json")},E=function(e){return{city:e.location.city,region:e.location.region,country:e.location.country,forecastList:e.item.forecast.map(function(e){return e.high=Number(e.high),e.low=Number(e.low),e}),currentTemperature:Number(e.item.condition.temp),currentConditionText:e.item.condition.text,windSpeed:Math.round(e.wind.speed),windChill:h(e.wind.chill),humidity:Number(e.atmosphere.humidity)}},p={getForecast:function(e){return new Promise(function(t,a){fetch(f(e)).then(function(e){return e.json()}).then(function(e){if(!e||!e.query||!e.query.count)return t(null);var a=e.query.results.channel;return(Array.isArray(a)?a:[a]).map(E)}).then(t).catch(a)})},mountUrl:f},w=(a(15),a(17),function(e){return n.a.createElement("div",{className:"error-message"},e.message)}),b=(a(19),function(){return n.a.createElement("header",{className:"header"},n.a.createElement("h1",{className:"header__title"},"Weather forecast"))}),y=a(1),g=(Object(y.shape)({city:y.string.isRequired,region:y.string.isRequired,country:y.string.isRequired,forecastList:Object(y.arrayOf)(Object(y.shape)({day:y.string.isRequired,high:y.number.isRequired,low:y.number.isRequired,text:y.string.isRequired})).isRequired,currentTemperature:y.number.isRequired,currentConditionText:y.string.isRequired,windSpeed:y.number.isRequired,windChill:y.number.isRequired,humidity:y.number.isRequired}),Object(y.oneOf)(["left","right"]),{SUN:"Sunday",MON:"Monday",TUE:"Tuesday",WED:"Wednesday",THU:"Thursday",FRI:"Friday",SAT:"Saturday"});var v=function(e){return g[e.toUpperCase()]||null},C=(a(23),a(25)),_=a(26),N=function(e){var t=e.forecast,a=e.onClickClose,r=t.forecastList[0],c=t.forecastList.slice(1,6);return n.a.createElement("section",{className:"weather-card"},n.a.createElement("div",{className:"weather-card__close",onClick:a},"x"),n.a.createElement("div",{className:"weather-card__body"},n.a.createElement("div",{className:"weather-card__city"},t.city,", ",t.region," - ",t.country),n.a.createElement("h2",{className:"weather-card__temperature"},t.currentTemperature,"\xbaC ",t.currentConditionText),n.a.createElement("table",{className:"weather-card__now"},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",{className:"weather-card__now__first-column"},n.a.createElement("img",{src:C,width:"12",height:"12",alt:"Low"}),n.a.createElement("b",null,r.low,"\xba"),"\xa0\xa0\xa0",n.a.createElement("img",{src:_,width:"12",height:"12",alt:"High"}),n.a.createElement("b",null,r.high,"\xba")),n.a.createElement("td",{className:"weather-card__now__second-column"},"Wind chill ",n.a.createElement("b",null,t.windChill,"\xbaC"))),n.a.createElement("tr",null,n.a.createElement("td",null,"Wind ",n.a.createElement("b",null,t.windSpeed,"km/h")),n.a.createElement("td",null,"Humidity ",n.a.createElement("b",null,t.humidity,"%")))))),n.a.createElement("table",{className:"weather-card__footer"},n.a.createElement("tbody",null,n.a.createElement("tr",null,c.map(function(e,t){return n.a.createElement("td",{key:t},n.a.createElement("div",null,v(e.day)),n.a.createElement("span",{className:"weather-card__weekdays__temp"},e.low,"\xba\xa0\xa0",e.high,"\xba"))})))))},q=(a(27),function(e){var t=e.onSubmit,r="Amsterdam";return n.a.createElement("section",{className:"search-bar"},n.a.createElement("form",{className:"search-bar__form",onSubmit:function(e){e.preventDefault(),t(r)}},n.a.createElement("input",{className:"search-bar__input",type:"search",required:!0,placeholder:"Search a city",pattern:"[^\\s]{1,}",title:"Must contain at least one non-empty character.",defaultValue:r,onChange:function(e){return r=e.target.value}}),n.a.createElement("button",{className:"search-bar__submit",type:"submit",title:"Search"},n.a.createElement("img",{src:a(29),width:"22",height:"22",alt:"Search"}))))});var k=function(e){return{firstChunk:(e=Array.isArray(e)?e:[]).slice(0,e.length/2),secondChunk:e.slice(e.length/2)}},S=(a(30),a(32),function(e){var t=e.side,a=e.forecast;return n.a.createElement("tr",null,"right"===t&&n.a.createElement("td",null,a.city),n.a.createElement("td",null,a.forecastList[0].low,"\xba"),n.a.createElement("td",null,a.forecastList[0].high,"\xba"),"left"===t&&n.a.createElement("td",null,a.city))});S.defaultProps={side:"left"};var j=S,F=function(e){var t=e.side,a=e.forecasts;return n.a.createElement("div",{className:"capitals__column-wrapper"},n.a.createElement("table",{className:"capitals__table","data-side":t,border:"0"},n.a.createElement("thead",null,n.a.createElement("tr",null,"right"===t&&n.a.createElement("th",null),n.a.createElement("th",null,"Min"),n.a.createElement("th",null,"Max"),"left"===t&&n.a.createElement("th",null))),n.a.createElement("tbody",null,a.map(function(e,a){return n.a.createElement(j,{key:a,forecast:e,side:t})}))))};F.defaultProps={side:"left"};var O=F,x=(a(34),function(){return n.a.createElement("div",{className:"author"},"Made with",n.a.createElement("img",{className:"author-heart",src:a(36),alt:"Heart",width:"16",height:"16"}),"by ",n.a.createElement("a",{className:"author-link",href:"https://blog.andersonmamede.com.br/"},"Anderson Mamede"))}),R=function(e){var t=e.forecasts,a=k(t),r=a.firstChunk,c=a.secondChunk;return n.a.createElement("footer",{className:"footer"},n.a.createElement("h3",{className:"footer__title"},"Capitals"),n.a.createElement("div",null,n.a.createElement(O,{forecasts:r,side:"left"}),n.a.createElement(O,{forecasts:c,side:"right"})),n.a.createElement(x,null))},W=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={capitalsForecasts:null,capitalsError:null,weatherCardForecast:null,weatherCardError:null},a.showWeatherCard=a.showWeatherCard.bind(Object(d.a)(Object(d.a)(a))),a.closeWeatherCard=a.closeWeatherCard.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.loadCapitalsForecasts()}},{key:"loadCapitalsForecasts",value:function(){var e=this,t=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e.setState({capitalsForecasts:t,capitalsError:a})};p.getForecast(this.props.capitals).then(function(e){e?t(e):t(null,"Capitals forecasts not found")}).catch(function(e){return t(null,"Error: could not load capitals.\n(".concat(e.toString(),")"))})}},{key:"showWeatherCard",value:function(e){var t=this,a=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;t.setState({weatherCardForecast:e,weatherCardError:a})};p.getForecast(e).then(function(e){e?a(e[0]):a(null,"City not found")}).catch(function(e){return a(null,"Error: could not load weather card data.\n(".concat(e.toString(),")"))})}},{key:"closeWeatherCard",value:function(){this.setState({weatherCardForecast:null})}},{key:"render",value:function(){return n.a.createElement("div",{className:"app"},n.a.createElement("div",{className:"app__wrapper"},n.a.createElement(b,null),n.a.createElement("main",{className:"app__main"},this.state.weatherCardError&&n.a.createElement(w,{message:this.state.weatherCardError}),this.state.weatherCardForecast&&n.a.createElement(N,{forecast:this.state.weatherCardForecast,onClickClose:this.closeWeatherCard}),n.a.createElement(q,{onSubmit:this.showWeatherCard})),this.state.capitalsError&&n.a.createElement(w,{message:this.state.capitalsError}),this.state.capitalsForecasts&&n.a.createElement(R,{forecasts:this.state.capitalsForecasts})))}}]),t}(n.a.Component);l.a.render(n.a.createElement(W,{capitals:["Bras\xedlia","Amsterdam","London","Dublin","Berlin","London","Lisbon","Paris","Brussels","Madrid"]}),document.getElementById("root"))}],[[10,2,1]]]);
//# sourceMappingURL=main.35f2792c.chunk.js.map