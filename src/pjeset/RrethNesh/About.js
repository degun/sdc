import React from 'react';
import List from '../tePerbashketa/List';
import './About.sass';

class About extends React.Component{
    render(){
        const activities = [
            "Technical economic feasibility studies and preliminary engineering.",
            "Topographical surveys.",
            "Foundation engineering.",
            "Engineering design, preparation of contract and bid evaluation.",
            "Supervision of works."
        ]
        const software = [
            "LEO - Lite (Surveying, Mapping and Road design)",
            "STRATO (Surveying, Mapping and Road design)",
            "EXCEL and Microsoft Word for Windows",
            "Wall (Design of retaining wall)",
            "SCAT (Pipe and Box Culvert calculation)",
            "PONTI01 (Calculation of presstress bridge beam)",
            "CDW Win (Computer Design of Walls)",
            "CDB Win (Computer Design of Bulkheads)"
        ]
        return(
            <section id="About">
                <div className="profile">
                    <h1>Company profile</h1>
                    <p>“S.D.C” ltd is an independent firm of consulting engineers, having no ties with contractors, manufactures or suppliers. The firm was created in April 1994, on the basis of the design and supervision experience of its founders, Eng. Nazmi Patozi, Eng. Sokol Xhixho and Eng. Maksim Arapi, and is a juridical subject by the decision of the Tribunal of Tirana city. The register number is 1075.</p>
                    <List type="unordered" title="The main activities of the firm are:" items={activities} />
                    <p>The permanent staff of the firm consist of ten engineers but time and again the firm has employed part time specialists, about ten people, such as engineers and technicians. The main Clients of the firm are Albanian Road Authority, General Directorate of Customs of Albania and Municipality of Tirana. With the extension of its activity in a near future, the firm is supposed to increase the number of permanent staff and at the same time modernize the process of design using contemporary technique.</p>
                    <p>The final aim of the firm is to maintain the actual position of leading firm in Albania in the consultancy services and to be competitive with the foreign consultant.</p>
                    <p>The firm  owns seven computers , two HP Printers Color A3 format, one Laser Jet printer HP 5100 A3 format and one HP Laser jet color 5500n, one Ploter format A1, two copy machine and two motorcar.</p>
                    <List type="ordered" title="Software used:" items={software} />
                    <h3>Contacts</h3>
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
                </div>
            </section>
        )
    }
}

export default About;