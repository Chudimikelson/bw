import React from 'react';
import { Container } from 'reactstrap';
import Comingsoon from './Comingsoon';

const WorldCup = () => {
  return (
    <Container>
        <div className="wallpaper img-responsive">
          <div className="text-center py-3 title">WORLD CUP</div>
        </div>  
      <Comingsoon/>
      </Container>
  )
}
export default WorldCup;