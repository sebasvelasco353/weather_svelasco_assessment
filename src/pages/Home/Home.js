import React, { Component } from 'react'
import styled from 'styled-components'
// Components
import Searchbox from '../../components/Searchbox/Searchbox'
import Forecast from '../../components/Forecast/Forecast';

const StyledHome_page = styled.div`
    padding: 50px 50px;
`;

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            city: "e",
            cityWeather: null
        }
    }
    componentDidMount() {
        console.log("holi");
        this.searchWeather();
    }
    searchWeather(){
        if (this.state.city !== "" && this.state.city !== null && this.state.city !== undefined) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=metric&APPID=71fddc04d2f1bb3ccf0749934ed9b816`)
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                this.setState({
                    cityWeather: data
                });
            }).catch(console.log);
        } else {
            alert("Check the search input");
        }
    }
    handleSearchboxChange(e){
        this.setState({ city: e.target.value });
    }
    render() {
        return (
            <StyledHome_page>
                <Searchbox type="text" value={this.state.city} handleChange={this.handleSearchboxChange.bind(this)} onSearch={this.searchWeather.bind(this)}/>
                <Forecast data={this.state.cityWeather ? this.state.cityWeather : {}} />
            </StyledHome_page>
        )
    }
}
