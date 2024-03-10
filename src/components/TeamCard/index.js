import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {eachTeamCard} = props
  const {name, id, teamImageUrl} = eachTeamCard
  return (
    <Link className="link-style" to={`/team-matches/${id}`}>
      <li className="team-card">
        <img src={teamImageUrl} alt={name} className="team-img" />
        <p>{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
