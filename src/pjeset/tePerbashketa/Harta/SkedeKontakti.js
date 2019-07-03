import React from 'react';
import {Link} from 'react-router-dom';
import './SkedeKontakti.sass';

class SkedeKontakti extends React.Component{
    render(){
        return(
            <div className="SkedeKontakti">
                <div className="head">
                    <h1>Contacts</h1>
                </div>
                <table>
                    <tbody>
                        <tr>
                            <td>Address</td>
                            <td>Rr. “Janosh Huniadi“ , P. 27, Sh. 2 , Ap. 20, Tirana, Albania</td>
                        </tr>
                        <tr>
                            <td>Phone/Fax:</td>
                            <td>+355 42 46741</td>
                        </tr>
                        <tr>
                            <td>Mobile:</td>
                            <td>+355 68 20 41 566</td>
                        </tr>
                        <tr>
                            <td>email:</td>
                            <td>sxhixho@yahoo.com</td>
                        </tr>
                    </tbody>
                </table>
                <Link to="/about">Learn more about us</Link>
            </div>
        )
    }
}

export default SkedeKontakti;