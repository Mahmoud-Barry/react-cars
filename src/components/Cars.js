import React from 'react';

const Car = ({children, color , year}) => {

    const colorInfo = color ? ( <p>Coleur : { color }</p> ) : (<p>Coleur : Néant</p>)

    if(children){

        return (
            <div style= { {backgroundColor: 'pink', padding: '5px', width: '400px', margin: '5px auto'}}>
                <p>Marque : { children } </p>
                <p>Age : { year } </p>
                {colorInfo}
            </div>
        )

    } else{
        return (null)
    }
    }


export default Car;