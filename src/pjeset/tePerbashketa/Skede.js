import React, { Component } from 'react';
import './Skede.sass';

class Skede extends Component{
    render(){
        const {title, properties} = this.props;
        return(
            <div className="Skede">
                <div className="titulli">{title}</div>
                <div className="përmbajtje">
                    <ul>
                        {properties.map((property, i) => {
                            return <li key={i}>{property}</li>
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Skede;