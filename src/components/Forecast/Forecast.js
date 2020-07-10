import React, { Component } from 'react'
import styled from 'styled-components'

const StyledForecast = styled.div`
    padding: 4rem 1rem;
    display: flex;
    flex-direction: column;
`;

export default class Forecast extends Component {
    render() {
        return (
            <StyledForecast>
                <h4>fecha</h4>
                {/* <img src="" alt="" srcset=""/> */}
                <h3>temperatura C</h3>
                <p>estado</p>
            </StyledForecast>
        )
    }
}
