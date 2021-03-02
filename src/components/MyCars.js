import React, { Component } from 'react';
import Car from './Cars';

class MyCars extends Component {

    state = {
        voitures: [
            {name: 'Ford', color: 'red', year: 2000},
            {name: 'Mercedess', color: 'black', year: 2010},
            {name: 'Peugeot', color: 'green', year: 2018},
        ],
        titre: "mon catalogue 2 "
    }

    addTenYears = () =>{
        const updatedState = this.state.voitures.map((param) =>{
                return param.year -= 10;
            })
        
        this.setState({
            updatedState
        })
    }

    render() {

        const year = new Date().getFullYear();
        return(
            <div>
                <h1>{this.state.titre}</h1>

                <button onClick={this.addTenYears}>+ 10 ans</button>

                {
                    this.state.voitures.map((voiture, index) => {
                        return(
                            <Car key={index} color={voiture.color} year={year - voiture.year + ' ans'}>{voiture.name}</Car>
                        )
                    })
                }

            </div>
        )
    }
}

export default MyCars;