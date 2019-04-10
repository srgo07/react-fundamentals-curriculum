const React = require('react');
const {string} = require('prop-types');



class GetWeather extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            location: "Santiago"
        }
        this.handleInputText = this.handleInputText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputText (event) {
        console.log(event.target.value);
        this.setState({
            location: event.target.value
        })
    }

    handleSubmit() {
        // sent to axios the city name
    }

    render() {
        return (
            <div className={'get-weather-component' + this.props.direction}
                style={{flexDirection: this.props.direction}}>
                <input className="location-input"  onChange={this.handleInputText} placeholder="St. George, Utah" />
                <button className="get-weather" onClick={this.handleSubmit} >Get Weather</button>
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