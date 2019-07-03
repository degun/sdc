import React from 'react';
import { Spring } from 'react-spring/renderprops';
import './Koka.sass';

function Koka({titulli, nentitulli}){
    return(
        <Spring from={{y: 50, deg: 20, opacity: 0}} to={{y: 0, deg: 0, opacity: 1}}>
        {({y, deg, opacity}) => <div className="Koka">
            <div className="content">
                <h1 className="titulli" style={{transform: `translateY(${y}px) skew(${-deg}deg)`, opacity: opacity}}>{titulli}</h1>
                <h4 className="nentitulli">{nentitulli}</h4>
            </div>
            <div className="qyteti"></div>
        </div>}
        </Spring>
    )
}

export default Koka;