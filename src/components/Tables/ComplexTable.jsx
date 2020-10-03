import React from 'react';
import './ComplexTable.sass';


class ComplexTable extends React.Component {
    render() {
        return (
            <div className=''>
                <div className=''>
                    <div className=''>
                        <table frame="hsides" rules="group">
                            <caption>Growth Chart</caption>
                            <thead>                            

                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Age</th>
                                    <th scope="col">Height</th>
                                </tr>
                                </thead>
                            <tbody className='tbody'>
                                 <tr>
                                    <th rowSpan="3" align="left">Albert</th>
                                    <td>1</td>
                                    <td align="center">2 ft. 8 in.</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td align="center">4 ft. 6 in.</td>
                                </tr>
                                <tr>
                                    <td>20</td>
                                    <td align="center">6 ft. 1 in.</td>
                                </tr>
                            </tbody>

                            <tbody className='tbody'>
                                 <tr>
                                    <th rowSpan="3" align="left">Betty</th>
                                    <td>1</td>
                                    <td align="center">2 ft. 3 in.</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td align="center">4 ft. 2 in.</td>
                                </tr>
                                <tr>
                                    <td>20</td>
                                    <td align="center">7 ft. 2 in.</td>
                                </tr>
                            </tbody>

                            <tfoot>
                                <tr>
                                    <td colSpan="3">[1] Has {" "}
                                        <a href="http://en.wikipedia.org/wiki/Gigantism">Gitantism</a>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default ComplexTable;
