import React, {Component} from 'react';
import { Table, Container } from 'reactstrap';

class Standings extends Component {
  constructor() {
    super();
    this.state = {
      result: [],
      standings: []
    };
  }
  componentDidMount() {
    this.setStandings();
  }
  setStandings = () => {
    let url = "https://api.football-data.org/v2/competitions/2021/standings";
    fetch(url, {
      method: "GET",
      withCredentials: true,
      headers: {
        "X-Auth-Token": "7802229ce06f49a0971f4676bded85de"
      }
    }).then(standings => {
      return standings.json();
    }).then(data => {
      this.setState({result: data.standings[0].table});
      console.log("result", this.state.result[0].team.name);
      let tempResults = [];
      this.state.result.forEach(item => {
        const singleItem = {...item};
        tempResults = [...tempResults, singleItem];
      });
      this.setState(() => {
        return {standings: tempResults};
      });
      console.log(this.state.standings);
    });

  }
  render() {
    
    return (
      <Container>
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
      {
      this.state.standings.map( standing => {
        return (
        <tr key={standing.position}>
          <td>{standing.position}</td>
          <td><img className="crest img-responsive" src={standing.team.crestUrl}/></td>
          <td>{standing.team.name}</td>
          <td>{standing.playedGames}</td>
          <td>{standing.won}</td>
          <td>{standing.draw}</td>
          <td>{standing.lost}</td>
          <th scope="row">{standing.points}</th>
        </tr>  )
      })
      }
      </tbody>
      </Table>
      </Container>
    ) 
  }
}

export default Standings;

