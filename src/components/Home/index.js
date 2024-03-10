import './index.css'

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const dataList = data.teams
    const formatedData = dataList.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamsList: formatedData, isLoading: false})
  }

  render() {
    const {teamsList, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="background-img-con">
            <div className="ipl-logo-heading">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="ipl-img"
              />
              <h2 className="dash-heading">IPL Dashboard</h2>
            </div>
            <ul className="team-card-con">
              {teamsList.map(eachTeamCard => (
                <TeamCard key={eachTeamCard.id} eachTeamCard={eachTeamCard} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
