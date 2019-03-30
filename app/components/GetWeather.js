const React = require('react');
const PropTypes = require('prop-types');

class GetWeather extends React.Component {
    constructor (props){
        super(props);
    }
    render() {
        return (
            <div className="get-weather-component"
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
    direction: PropTypes.string
}

module.exports = GetWeather;