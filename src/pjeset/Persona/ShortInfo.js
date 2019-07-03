import React from 'react';
import './ShortInfo.sass';

class ShortInfo extends React.Component{
    render(){
        return(
            <section className="ShortInfo">
                <h1>Brief description</h1>
                <p>“S.D.C” ltd is an independent firm of consulting engineers, having no ties with contractors, manufactures or suppliers. The firm was created in April 1994, on the basis of the design and supervision experience of its founders, Eng. Nazmi Patozi, Eng. Sokol Xhixho and Eng. Maksim Arapi, and is a juridical subject by the decision of the Tribunal of Tirana city. The register number is 1075.</p>
                <p>The permanent staff of the firm consist of ten engineers but time and again the firm has employed part time specialists, about ten people, such as engineers and technicians. The main Clients of the firm are Albanian Road Authority, General Directorate of Customs of Albania and Municipality of Tirana. With the extension of its activity in a near future, the firm is supposed to increase the number of permanent staff and at the same time modernize the process of design using contemporary technique.</p>
            </section>
        )
    }
}

export default ShortInfo