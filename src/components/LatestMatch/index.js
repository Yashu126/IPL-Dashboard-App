import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails

  return (
    <div className="latest-match-con">
      <h1 className="match-heading">Latest Matches</h1>
      <div className="latest-match-card">
        <div className="team-img-con">
          <div className="team-details">
            <p>{competingTeam}</p>
            <p>{date}</p>
            <p>{venue}</p>
            <p>{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="competing-img-logo"
          />
        </div>
        <hr className="seperate" />
        <div>
          <p className="team-innings">First Innings</p>
          <p className="team-innings">{firstInnings}</p>
          <p className="team-innings">Second Innings</p>
          <p className="team-innings">{secondInnings}</p>
          <p className="team-innings">Man OfThe Match</p>
          <p className="team-innings">{manOfTheMatch}</p>
          <p className="team-innings">Umpires</p>
          <p className="team-innings">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
