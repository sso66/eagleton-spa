// File: DataLocations.jsx
// Date: 6/25/2020
// Note: To handle hard-coded data into your React application

import React from 'react';
import './DataLocations.sass';

class DataLocations extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            locations: [
                {
                    "id": 1,
                    "name": "Ojo",
                    "zone": "Lagos State",
                    "region": "South West"
                },
                {
                    "id": 2,
                    "name": "Ahiazu Mbaise",
                    "zone": "Imo State",
                    "region": "South East"
                },
                {
                    "id": 3,
                    "name": "Akoko-Edo",
                    "zone": "Edo State",
                    "region": "South South"
                },
                {
                    "id": 4,
                    "name": "Anka",
                    "zone": "Zamfara State",
                    "region": "North West"
                },
                {
                    "name": "Akwanga",
                    "zone": "Nasarawa State",
                    "region": "North Central"
                }
            ]
        }
    }
    
    render() {
        return (
            <div className="data-locations">
                <div>
                    <div>
                        <h2>Data Locations</h2>
                    </div>
                </div>
                
                <div>
                    {this.state.locations.map((location, id) => 
                        <DataLocation key={id} {...location} />
                    )}
                </div>

            </div>
        )
    }
}

const DataLocation= (props) => {
    return (
        <div>
            <hr />
            <p><b>Id:</b> {props.id}</p>
            <p><b>Name:</b> {props.name.toUpperCase()}</p>
            <p><b>Zone:</b> {props.zone}</p>
            <p><b>Region:</b> {props.region}</p>
            <hr />
        </div>
    )
}

export default DataLocations;

// eof
