import React, { Component } from 'react'
import styled from 'styled-components'

// img
import clouds from '../../assets/img/cloud.svg'
import water from '../../assets/img/water.svg'
import drizzle from '../../assets/img/weather.svg'
import sun from '../../assets/img/sun.svg'

const StyledForecast = styled.div`
    padding: 4rem 1rem;
    display: flex;
    flex-direction: column;
`;

export default class Forecast extends Component {

    weatherImage(){
        switch (this.state.cityWeather.weather[0].main) {
            case "Clouds":
                return <img style={{ width: '200px' }} src={clouds} alt="Clouds"/>
            case "Drizzle":
                return <img style={{ width: '200px' }} src={drizzle} alt="Clouds"/>
            case "Rain":
                return <img style={{ width: '200px' }} src={water} alt="Clouds"/>    
            default:
                return <img style={{ width: '200px' }} src={sun} alt="Clouds"/>
        }
    }
    render() {
        return (
            <StyledForecast>
                {this.props.cityWeather ? (
                    <div className="dayWeather">
                        <div className="imgPlaceholder">
                            {/* img placeholder */}
                            {this.weatherImage()}
                        </div>
                        <p>
                            <b>{this.props.cityWeather.weather[0].description}</b> 
                            <span className="temp_max">{this.props.cityWeather.main.temp_max + " °C."}</span> 
                            <span className="temp_min">{this.props.cityWeather.main.temp_min + " °C."}</span> 
                            <span className="humedad"> Humedad: {this.props.cityWeather.main.humidity}%</span> | 
                            <span className="vientos"> Vientos: {this.props.cityWeather.wind.speed}m/s</span>
                        </p>
                        <p>
                            Icons downloaded from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
                        </p>
                    </div>
                ) : null}
            </StyledForecast>
        )
    }
}
