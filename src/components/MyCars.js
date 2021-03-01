import React, { Component } from 'react';
import Car from './Cars';

class MyCars extends Component {


    render() {
        return(
            <div>
                <h1>{this.props.title}</h1>

                <p >mon pragraphe</p>

                <Car ></Car>
                <Car >Mercedes</Car>
                <Car color= "White">Peaugeot</Car>
            </div>
        )
    }
}

export default MyCars;