import React from 'react';
import './DefinitionList.sass';


console.log('Mounting DefinitionList.jsx... <DefinitionList />');

const DefinitionList = () => (
    <div>
        <dl id="feature">
            <dt>Roundabout</dt>
            <dd>
                A roundabout or rotary is a stype of road junction (or
                traffic calming device) at which traffice streams around
                a central island, after first yielding (giving way) to
                the circulating traffic.
            </dd>
        </dl>
    </div>
)

export default DefinitionList;

