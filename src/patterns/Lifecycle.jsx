// File: Lifecycle.jsx
// Date: 0/19/2020
// Note: Understanding React Lifecycle Methods

import React from 'react';
import './App.sass'; 

console.log("Mounting Lifecycle.jsx... <Lifecycle name='' />" ); 


class Lifecycle extends React.Component { 
    constructor(props) {
        super(props);

        this.state = {
            name: "ReactJS"
        }
        this.updateName = this.updateName.bind(this);
    }
    
    updateName() {
        // do something...TMC
        this.setState( { name: 'VueJS' } )
    }

    // fetchDataAndUpdate() {
    //     // do someting...DMC
    // }

    // updateTimer() {
    //     // do something...STC
    // }

    // ___ Get called Mounting | Updating Phase ___
    // static getDerivedStateFromProps(props, state) {
    //     return {
    //         name: props.name
    //     }
    // }

    componentDidMount() {
        // this.fetchDataAndUpdate();
        // 
        // this.timerID = setInterval(() => {
        //     this.updateTimer();
        // }, 1000);
        
        this.updateName(this.state.name)
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     if (this.state.name === nextState.name) {
    //         return false;
    //     }
    // }

    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     // method override
    // }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if (prevState.name === "ReactJS" && this.state.name === "VueJS") {
    //         this.setState({name: "Angular"});
    //     }
    // }

    // componentWillUnmount() {
    //     this.clearInterval(this.timerID)
    // }

    // ___ Get called Mounting | Updating Phase ___
    render() {
        const helloWorld = 'Understanding React Lifecycle Methods';

        return (
            <div className="App"> 
                <h2>{helloWorld}</h2>
                <div style={{ background: 'purple', fontSize: '1em', color: 'snow' }}>
                    <div>State: {this.state.name}</div>
                    <div>Props: {this.props.name}</div>
                </div>
            </div>
        )
    }
}

export default Lifecycle;

// eof
