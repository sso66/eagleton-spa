import React from 'react';

class SimpleTable extends React.Component {
    render() {
        return (
            <div className=''>
                <div className=''>
                    <div className=''>
                        <table frame="hsides" rules="group">
                            <caption>Sites that I like to visit</caption>
                            <thead>
                                <tr>
                                    <th scope="col">Person</th>
                                    <th scope="col">Web Site</th>
                                </tr>
                                </thead>
                            <tbody>
                                 <tr>
                                    <td>John Doe [1]</td>
                                    <td><a href="http://un.org">United Nations</a></td>
                                </tr>

                                <tr>
                                    <td>Bryan Veloso</td>
                                    <td><a href="http://chase.com">Chase Bank</a></td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="2">[1] Enjoy HTML, CSS, and JS</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default SimpleTable;
