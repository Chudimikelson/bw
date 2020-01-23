import React from 'react';
import { Table, Container } from 'reactstrap';

const WorldCup = () => {
  return (
    <Container>
        <div className="wallpaper img-responsive">
          <div className="text-center py-3 title">WORLD CUP</div>
        </div>  
      <Table borderless size="sm">
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th>Team</th>
          <th>P</th>
          <th>W</th>
          <th>D</th>
          <th>L</th>
          <th>PTs</th>
        </tr>
      </thead>
      <tbody>

      </tbody>
      </Table>
      </Container>
  )
}
export default WorldCup;