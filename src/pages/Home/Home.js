import React, { Component } from 'react'
import styled from 'styled-components'
// Components
import Searchbox from '../../components/Searchbox/Searchbox'
import Forecast from '../../components/Forecast/Forecast';
// img
import clouds from '../../assets/img/cloud.svg'
import water from '../../assets/img/water.svg'
import drizzle from '../../assets/img/weather.svg'
import sun from '../../assets/img/sun.svg'

const StyledHome = styled.div`
    padding: 50px 50px;
    .dayWeather{
        margin: 0rem auto;
        width: 60%;
        height: 40vh;
        display: flex;
        flex-direction: column;
        font-weight: bold;
        .imgPlaceholder{
            height: 30vh;
            background-color: transparent;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        p{
            border-top: solid 3px gray;
            margin-top: 20px;
            padding-top: 20px;
            text-align: center;
            .temp_max{
                padding: 0.5rem 1.5rem;
                margin: 0.5rem;
                background-color: rgb(72, 149, 185);
                color: white;
            }
            .temp_min{
                padding: 0.5rem 1.5rem;
                margin: 0.5rem;
                background-color: black;
                color: white;
            }
        }
    }
`;

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            city: "Bogota",
            cityWeather: null
        }
    }
    componentDidMount() {
        console.log("holi");
        this.searchWeather();
    }
    capitalizeSearch = (str) => {
        if(typeof str === 'string') {
            return str.replace(/^\w/, c => c.toUpperCase());
        } else {
            return '';
        }
    };
    searchWeather(){
        if (this.state.city !== "" && this.state.city !== null && this.state.city !== undefined) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.capitalizeSearch(this.state.city)}&units=metric&APPID=71fddc04d2f1bb3ccf0749934ed9b816`)
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                this.setState({
                    cityWeather: data
                });
            }).catch(console.log);
        } else {
            alert("Porfavor ingresa una ciudad");
        }
    };
    handleSearchboxChange(e){
        this.setState({ city: e.target.value });
    };
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
            <StyledHome>
                <Searchbox type="text" value={this.state.city} handleChange={this.handleSearchboxChange.bind(this)} onSearch={this.searchWeather.bind(this)}/>
                {this.state.cityWeather ? (
                    <div className="dayWeather">
                        <div className="imgPlaceholder">
                            {/* img placeholder */}
                            {this.weatherImage()}
                        </div>
                        <p>
                            <b>{this.state.cityWeather.weather[0].description}</b> 
                            <span className="temp_max">{this.state.cityWeather.main.temp_max + " °C."}</span> 
                            <span className="temp_min">{this.state.cityWeather.main.temp_min + " °C."}</span> 
                            <span className="humedad"> Humedad: {this.state.cityWeather.main.humidity}%</span> | 
                            <span className="vientos"> Vientos: {this.state.cityWeather.wind.speed}m/s</span>
                        </p>
                        <p>
                            Icons downloaded from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
                        </p>
                    </div>
                ) : null}
            </StyledHome>
        )
    }
}
