const React = require('react');
const ReactDOM = require('react-dom');
const GetWeather = require('./containers/GetWeather');
const Header = require('./components/Header');
require('./index.css');

class WeatherApp extends React.Component {
    render() {
        return (
            <div>
                <Header/>
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