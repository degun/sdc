import React, { Component } from 'react';
import Imazh from '../tePerbashketa/Imazh';
import { capitalize, calculateperiod } from '../../functions/useful';
import './ProjektDetaje.sass';

class ProjektDetaje extends Component{
    render(){
        const {data} = this.props;
        const {head_photos, body_photos, type, name, short_name, client, contractor, length_of_the_road, width_of_the_road, 
               length_of_the_bridge, width_of_the_bridge, construction_cost, start_date, 
               completion_date, design_period, number_of_bridges_span_greaterthan_10_m, description} = data;
        let period = calculateperiod(start_date, completion_date, design_period);
        const table = {name, client, contractor, length_of_the_road, width_of_the_road, length_of_the_bridge, width_of_the_bridge, number_of_bridges_span_greaterthan_10_m, construction_cost, period};
        const tableHeads = Object.keys(table);
        let typeofdescroption;
        if(description){typeofdescroption = Object.keys(description)[0]}
        return(
            <section id="ProjektDetaje">
                <div className="përmbajtja">
                    <div className="head_photos">
                        {head_photos.map((photo, i) => {
                            return <Imazh key={i} photo_url={`http://46.101.140.145:1337${photo.url}`} short_name={short_name} />
                        })}
                    </div>
                    {(description && typeofdescroption === "description") ? <p>{description.description}</p> : null}
                    {(description && typeofdescroption === "civil_works_realized") ? <div>
                        <h3>Civil works realized</h3>
                        <ul>
                            {description.civil_works_realized.map((work, i)=>{
                                return <li key={i}>{work}</li>
                            })}
                        </ul>
                    </div> : null}
                    <table className="details">
                        <caption><h1>Brief description of the project</h1></caption>
                        <tbody>
                            {tableHeads.map(head => {
                                return table[head] && <tr key={head}>
                                    <td>{head === "period" ? (capitalize(type) + " period:") : capitalize(head)+":"}</td>
                                    <td>{table[head].replace("euro", "€").replace(/Year /g, "")}</td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                    <div className="body_photos">
                        {body_photos.map((photo, i) => {
                            return <Imazh key={i} photo_url={`http://46.101.140.145:1337${photo.url}`} short_name={short_name} />
                        })}
                    </div>
                </div>
            </section>
        )
    }
}

export default ProjektDetaje;