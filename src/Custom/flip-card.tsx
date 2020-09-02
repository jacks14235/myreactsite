import React from 'react';
import  ReactCardFlip from 'react-card-flip';
import { Card } from 'react-bootstrap';
import MyCard from '../Custom/my-card';


type FlipCardProps = {
    index : number;
    delay : number;
}

type FlipCardState = {
    isFlipped : boolean
}

class FlipCard extends React.Component<FlipCardProps, FlipCardState> {
    constructor(props : FlipCardProps) {
      super(props);
        this.state = {
        isFlipped: true
      };
      this.componentWillMount = this.componentWillMount.bind(this);
    }
   
    componentWillMount() {
        setTimeout( () => {
            this.setState({isFlipped : false});
        }, this.props.delay);
    }
   
    render() {
      return (
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
          <Card className="mb-3">
          <MyCard index={this.props.index}></MyCard>
        </Card>
   
          <Card className="mb-3">
            
          </Card>
        </ReactCardFlip>
      )
    }
  }


  export {
      FlipCard
  }