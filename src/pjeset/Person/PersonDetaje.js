import React, { Component } from 'react';
import './PersonDetaje.sass';

class PersonDetaje extends Component{
    render(){
        const {personi} = this.props;
        const {name, profile_picture, title, cv} = personi;
        const {url} = profile_picture;
        return(
            <div id="PersonDetaje">
                <div className="përmbajtja">
                    <div className="koka">
                        <img src={`http://46.101.140.145:1337${url}`} alt={name + " profile picture"} className="profile"/>
                        <div className="who">
                            <h1>{name}</h1>
                            <h3>{title}</h3>
                        </div>
                    </div>
                    <div className="cv">
                        <h1>Curriculum vitae</h1>
                        {cv.map(({type, title, content}, i) => {
                            switch(type){
                                case "word": return <table key={i}>
                                    <tbody>
                                        <tr>
                                            <td className="left">{(i+1) + ". " + title}</td>
                                            <td className="right">{content}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                case "table": 
                                const {head, body} = content;
                                return <div className="table" key={i}>
                                    <div className="left">{(i+1) + ". " + title}</div>
                                    <table>
                                        {head && <thead>
                                            <tr>
                                                {head.map((th,i)=>{
                                                    return <th key={i}>{th}</th>
                                                })}
                                            </tr>
                                        </thead>}
                                        <tbody>
                                            {body.map((tr, i)=>{
                                                return <tr key={i}>
                                                    {tr.map((td,i)=>{
                                                        return <td key={i}>{td}</td>
                                                    })}
                                                </tr>
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                                case "table_list": 
                                return <div className="table" key={i}>
                                        <div className="left">{(i+1) + ". " + title}</div>
                                        {content.map((tab, i)=> {
                                            return <table key={i}>
                                                <tbody>
                                                    {tab.map((tr, i)=>{
                                                        return <tr key={i}>
                                                            {tr.map((td,i) => {
                                                                return <td key={i}>{td}</td>
                                                            })}
                                                        </tr>
                                                    })}
                                                </tbody>
                                            </table>
                                        })}
                                    </div>
                                case "list": 
                                return <table key={i}>
                                        <tbody>
                                            <tr>
                                                <td className="left">{(i+1) + ". " + title}</td>
                                                <td className="right">
                                                    <ul>
                                                        {content.map((li,i) => {
                                                            return <li key={i}>{li}</li>
                                                        })}
                                                    </ul>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                case "year": 
                                return <table key={i}>
                                        <tbody>
                                            <tr>
                                                <td className="left">{(i+1) + ". " + title}</td>
                                                <td className="right">{new Date().getFullYear() - 1994}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                default: return null
                            }
                        })}  
                    </div>
                </div>
            </div>
        )
    }
}

export default PersonDetaje;