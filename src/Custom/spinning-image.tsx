import React from 'react';
import '../App.css';
import Image from '../Images/tospin.png'


class SpinningImage extends React.Component {
    constructor (props : any){
        super(props);
        this.state = {
            speed : 2
        }
    }

    render() {
        return (
            <img src={Image} alt="An awesome spinning image" style={{animation: `App-Logo-Spin 2s linear infinite`}}></img>
        )
    }
}

export {
    SpinningImage
}