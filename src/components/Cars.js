import React from 'react';

const Car = ({children, color , year}) => {

    const colorInfo = color ? ( <p>Coleur : { color }</p> ) : (<p>Coleur : Néant</p>)

    if(children){

        return (
            <tr>
                <td><p>Marque : { children } </p></td>
                <td><p>Age : { year } </p></td>
                <td>{colorInfo}</td>
            </tr>
        )

    } else{
        return (null)
    }
    }


export default Car;