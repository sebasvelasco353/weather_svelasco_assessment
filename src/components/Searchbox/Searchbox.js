import React, { Component } from 'react'
import styled from 'styled-components'

const StyledSearch = styled.div`
    margin: 2rem 0;
    .search{
        display: flex;
        flex-direction: row;
        heigh: 0.5rem;
        button {
            padding 1rem;
        }
    }
`;

export default class Searchbox extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <StyledSearch>
                <h3>Busqueda por ciudad.</h3>
                <div className="search">
                    <input onChange={(e) => this.props.handleChange(e)} />
                    <button onClick={() => this.props.onSearch()}><img src="https://img.icons8.com/material-rounded/24/000000/search.png"/></button>
                </div>
            </StyledSearch>
        )
    }
}
