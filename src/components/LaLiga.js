import React from 'react';
import { Container } from 'reactstrap';
import Comingsoon from './Comingsoon';

const LaLiga = () => {
  return (
    <Container>
        <div className="wallpaper img-responsive">
          <div className="text-center py-3 title">LIGA BBVA</div>
        </div>  
     
      <Comingsoon/>
      </Container>
  )
}
export default LaLiga;