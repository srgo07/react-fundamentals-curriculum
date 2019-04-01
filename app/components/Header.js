const React = require('react');
const GetWeather = require('../containers/GetWeather');

function Header(props) {
    return(
        <div className="header-container">
            <span>Clever Title </span>
            <GetWeather direction='row'/>
        </div>
    );
}


module.exports = Header;