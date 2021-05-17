import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Skede from '../tePerbashketa/Skede';
import { calculateperiod } from '../../functions/useful';
import './Projektet.sass';

class Projektet extends Component{
    constructor(props){
        super(props);
        this.state = {
            offsetTop: 0
        }

    }
    componentDidMount(){
        if(this.tabela){
            this.setState({offsetTop: this.tabela.offsetTop})
        }
    }
    componentDidUpdate(){
        if(this.tabela && !this.state.offsetTop){
            this.setState({offsetTop: this.tabela.offsetTop})
        }
    }

    render(){
        const {filter, projects, table} = this.props;
        const projekts = projects.filter(project => project.type === filter);
        const { head, body } = table;
        return(
            <div id="Projektet">
                <h1 className="titull">{filter[0].toUpperCase() + filter.slice(1)} projects</h1>
                {(filter === "supervision" || filter === "design") && <div className="skedat">
                    {projekts.length ? projekts.map(project => {
                        const {short_name, start_date, completion_date, client, contractor, design_period, construction_cost} = project;
                        let period = calculateperiod(start_date, completion_date, design_period);
                        let properties = [];
                        properties.push(period)
                        properties.push(`Client: ${client}`)
                        if(contractor){properties.push(`Contractor: ${contractor}`)}
                        if(construction_cost){properties.push(`Cost: ${construction_cost}`)}
                        return <Link key={project.id} to={`/projects/${project.id}`}><Skede title={short_name} properties={properties} /></Link>
                    }) : null}
                </div>}
                {filter === "all" && <div className="tableAll">
                    <table  ref={ref=>this.tabela=ref} style={{tableLayout: "fixed"}}>
                        {head && <thead>
                            <tr>
                                {head.map((th, i) => {
                                    return <th key={i}>{th}</th>
                                })}
                            </tr>
                        </thead>}
                        {body && <tbody>
                            {body.map((tr, i) => {
                                return <tr key={i*7}>
                                    {tr.map((td, i) => {
                                        if(i === 2){
                                            return <td key={i*6}>{td.map((row, i) => {
                                                return <p key={i*5}>{row}</p>
                                            })}</td>
                                        }else{
                                            return <td key={i*6}>{td}</td>
                                        }
                                    })}
                                </tr>
                            })}
                        </tbody>}
                    </table>
                </div>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        projects: state.projects.projects,
        filter: state.projects.filter,
        table: state.projects.table
    }
}

export default connect(mapStateToProps)(Projektet);