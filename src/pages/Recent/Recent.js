import React, { Component } from 'react'
import styled from 'styled-components'
// Components
import Searchbox from '../../components/Searchbox/Searchbox'
import Forecast from '../../components/Forecast/Forecast';

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

export default class Recent extends Component {
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
    render() {
        return (
            <StyledHome>
                <Forecast info={this.state.cityWeather} />
            </StyledHome>
        )
    }
}
