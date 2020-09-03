// File: TableLayout.jsx
// Date: 7/23/2020
// Note: Applied CSS Flexbox Module

import React from 'react';
import PropTypes from 'prop-types';
import './TableLayout.sass';

class TableLayout extends React.Component {
    render() {
        return (
            <div className='table-layout'>
                <div className="flex-container">

                    <div className='flex-items'>
                    <h3>WebSocket Connection Parameters</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th colSpan="2">Table Layout</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td width='200'>WS Protocol</td>
                                    <td>
                                        <select>
                                            <option value='ws' selected='selected'>ws</option>
                                            <option value='wss'>wss</option>
                                        </select>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot></tfoot>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

TableLayout.propTypes = {

}

export default TableLayout;

// eof