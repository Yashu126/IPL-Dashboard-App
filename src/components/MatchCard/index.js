import './index.css'

const MatchCard = props => {
  const {eachMatch} = props
  const {competingTeamLogo, result, matchStatus, competingTeam} = eachMatch

  const getMatchStatus = matchStatus === 'Won' ? 'won-class' : 'lost-class'
  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-logo"
      />
      <p className="team-head">{competingTeam}</p>
      <p className="tesm-result">{result}</p>
      <p className={getMatchStatus}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
