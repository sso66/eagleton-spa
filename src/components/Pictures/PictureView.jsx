// File: PictureView.jsx
// Date: 7/14/2020
// Note: React Picture Component

import React from 'react';

import Picture from './Picture';
import Button from './PictureButton';

import './PictureView.sass';

class PictureView extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            pictures: [
                {id: 1, src: 'https://via.placeholder.com/200x100', alt:"Picture"},
                {id: 2, src: 'https://via.placeholder.com/400x200', alt:"Picture"},
                {id: 3, src: 'https://via.placeholder.com/200x100', alt:"Picture"},
            ],
            currentPic: null
        }

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(id) {
        this.setState({currentPic: id});
    }

    render() {
        return (
            <div className="picture-view">
                <div className="picture-view iterator">
                    {/* Iterator Design Pattern */}
                    {this.state.pictures.map((picture) => {
                        return (
                            <Picture key={picture.id} src={picture.src} alt={picture.alt}>
                                <Button
                                    id={picture.id}
                                    pictureSrc={picture.src}
                                    handleOnClick={this.handleOnClick}
                                />
                            </Picture>
                        )
                    })}
                </div>
                <div><p>Current selected picutre ID is {this.state.currentPic}</p></div>
                <div className="picture-view composite">
                    {/* Composite Design Pattern */}
                    <Picture src={this.state.pictures[0].src}>
                        <p>Hey, I'm some text</p>
                    </Picture>
                    <Picture src={this.state.pictures[1].src}>
                        <Button 
                            id={this.state.pictures[1].id}
                            pictureSrc={this.state.pictures[1].src}
                            handleOnClick={this.handleOnClick}
                        >
                            {this.state.pictures[1].alt}
                        </Button>                       
                    </Picture>
                    <Picture src={this.state.pictures[2].src}>
                        <Picture src={this.state.pictures[2].src}/>
                    </Picture>
                </div>
                <div><p>Current selected picture ID is {this.state.currentPic}</p></div>
            </div>
        )
    }
}

export default PictureView;

// eof
