// File: ScrollingList.jsx
// Date: 7/26/2020
// Note: React Refs and Rarely Used Lifecycle Methods

import React from 'react';
import PropTypes from 'prop-types';
import './ScrollingList.sass';

class ScrollingList extends React.Component {
    constructor(props) {
        super(props);
        this.listRef = React.createRef();
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        // Are we adding new items to the list?
        // Capture the scroll position so we can adjust scroll later
        if (prevProps.list.length < this.props.list.length) {
            const list = this.listRef.current;
            return list.scrollHeight = list.scrollTop;
        }
        return null
    }
    
    componentDidUpdate(preProps, prevState, snapshot) {
        // Typical usage (don't forget to compare props)
        if (this.props.userID == preProps.userID) {
            this.fetchData(this.props.userID);
        }
        // If we have a snapshot (diff/delta) value, we've just
        // added new items. Adjsst scroll so these new items 
        // don't push the old ones out of view. (snapshot here 
        // is the value retuned from getSnapshotBeforeUpdate):
        if (snapshot !== null) {
            const list = this.listRef.current;
            list.scrollTop = list.scrollHeight
        }
    }

    render() {

        return (
            <div className='scrolling-list'>
                <div className='flex-container'>
                    <div className='flex-items'>
                        <div ref={this.listRef}>
                            <h3>Scrolling List</h3>
                            <div>
                                User ID: {this.props.userID}
                                <hr />
                                Message: {this.props.message}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 

ScrollingList.propTypes = {

}

export default ScrollingList;
// eof