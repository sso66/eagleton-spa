// File: Datasource.jsx
// Date: 6/25/2020
// Note: How to read local JSON data (PDC) in React 

import React from 'react'
// import data from  '../../data/books.json'
import data from '../../data/books.json'

import './Datasource.sass'


// Proxy Design Pattern: DMC
export default class Datasource extends React.Component {
    render() {
        return (
            <div className="datasource">
                <h2>Data Sources</h2>
                <div>{newdata}</div>    
            </div>       
        )
    }
}

const newdata= data.map((data) => {
    return  (       
        <div key = {data.id}>
            <div>
                <h2>{data.name}</h2>
                <div>{data.desc}</div>
                <div>
                    <a 
                        className="download"
                        href={data.url} 
                        target="_blank"
                        rel=" noopener noreferrer"
                    >
                        Download
                    </a>
                </div>
            </div> 
        </div>
    )
})


// eof
