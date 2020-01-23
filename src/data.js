this.state.standings.map( standing => {
    return <div key={standing.position}>
      <div>{standing.team.name}</div>
    </div>
  })

  <Table borderless size="sm">
      <thead>
        <tr>
          <th>#</th>
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
