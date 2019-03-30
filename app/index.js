const React = require('react');
const ReactDOM = require('react-dom');
const GetWeather = require('./components/GetWeather');
require('./index.css');

class WeatherApp extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Main.js Header</h1>
                </div>
                <div className="app-container">
                    <div className="weather-container">
                        <h1 className="content-header">Enter a City and State</h1>
                        <GetWeather/>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <WeatherApp/>,
    document.getElementById('app')
);