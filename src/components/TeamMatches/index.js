import './index.css'

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    teamUrlBanner: '',
    latestMatchDetails: {},
    recentMatchesList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatchDetails()
  }

  getTeamMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const matchData = await response.json()
    const modifiedData = {
      teamBannerUrl: matchData.team_banner_url,
      matchDetails: matchData.latest_match_details,
      recentMatches: matchData.recent_matches,
    }
    const getMatchDetails = modifiedData.matchDetails
    const modifiedDetils = {
      umpires: getMatchDetails.umpires,
      result: getMatchDetails.result,
      manOfTheMatch: getMatchDetails.man_of_the_match,
      id: getMatchDetails.id,
      date: getMatchDetails.date,
      venue: getMatchDetails.venue,
      competingTeam: getMatchDetails.competing_team,
      competingTeamLogo: getMatchDetails.competing_team_logo,
      firstInnings: getMatchDetails.first_innings,
      secondInnings: getMatchDetails.second_innings,
      matchStatus: getMatchDetails.match_status,
    }
    const getRecentMatchList = modifiedData.recentMatches
    const modifiedMatchList = getRecentMatchList.map(each => ({
      competingTeamLogo: each.competing_team_logo,
      result: each.result,
      matchStatus: each.match_status,
      competingTeam: each.competing_team,
      id: each.id,
    }))
    this.setState({
      teamUrlBanner: modifiedData.teamBannerUrl,
      latestMatchDetails: modifiedDetils,
      recentMatchesList: modifiedMatchList,
      isLoading: false,
    })
  }

  getClassname = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'CSK':
        return 'csk'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'SH':
        return 'sh'
      case 'DC':
        return 'dc'
      default:
        return ''
    }
  }

  render() {
    const {
      teamUrlBanner,
      latestMatchDetails,
      recentMatchesList,
      isLoading,
    } = this.state
    const classname = `team-matches-con ${this.getClassname()}`
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className={classname}>
            <img src={teamUrlBanner} alt="team banner" className="banner-img" />
            <LatestMatch
              key={latestMatchDetails.id}
              latestMatchDetails={latestMatchDetails}
            />
            <ul className="matches-cards-cons">
              {recentMatchesList.map(eachMatch => (
                <MatchCard key={eachMatch.id} eachMatch={eachMatch} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
