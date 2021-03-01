import React, { Component } from 'react';
import Car from './Cars';

class MyCars extends Component {
    render() {
        console.log(this)
        return(
            <div>
                <h1>{this.props.title}</h1>

                <Car ></Car>
                <Car >Mercedes</Car>
                <Car color= "White">Peaugeot</Car>
            </div>
        )
    }
}

export default MyCars;