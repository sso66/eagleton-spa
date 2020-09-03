// File: Player
// Date: 7/10/2020
// Note: Use cases for react-router-dom service package

import React from 'react'
import { Link } from 'react-router-dom'

import PlayerAPI from '../../data/players';
import './Roster.sass';

// The Player looks up the player using the number parsed from
// the URL's pathname. If no player is found with the given
// number, then a "player not found" message is displayed.
const Player = (props) => {
  const player = PlayerAPI.get(
    parseInt(props.match.params.number, 10)
  )
  if (!player) {
    return <div>Sorry, but the player was not found</div>
  }
  return (
    <div className='player'>
      <h2>Roster Form View</h2>
      <p>Player: {player.name} (#{player.number})</p>
      <p>Position: {player.position}</p>
      <Link to='/roster'>Back</Link>
    </div>
  )
}

export default Player

// eof
