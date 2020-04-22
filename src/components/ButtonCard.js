import React from 'react';




export default function ButtonCard(props) {

    const { label, updateLists } = props;

    return (
        <button onClick={updateLists} >
            {label}
        </button>
    )



}
