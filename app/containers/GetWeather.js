const React = require('react');
const {string} = require('prop-types');



class GetWeather extends React.Component {
    constructor (props) {
        super(props);
    }
    render() {
        return (
            <div className={'get-weather-component' + this.props.direction}
                style={{flexDirection: this.props.direction}}>
                <input className="location-input" placeholder="St. George, Utah" />
                <button className="get-weather" >Get Weather</button>
            </div>
        );
    }
}

GetWeather.defaultProps  = {
    direction: 'column'
}
GetWeather.proptypes = {
    direction: string
}

module.exports = GetWeather;