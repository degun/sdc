import React from 'react';

function List({type, title, items}){
    return(
        <div className="List">
            <h3>{title}</h3>
            {type === "unordered" && <ul>
                {items.map((item, i) => {
                    return <li key={i}>{item}</li>
                })}
            </ul>}
            {type === "ordered" && <ol>
                {items.map((item, i) => {
                    return <li key={i}>{item}</li>
                })}
            </ol>}
        </div>
    )
}

export default List;