import React from 'react'
import './RightBar.css'
import CreditCard1 from '../assets/f.png'
import CreditCard2 from '../assets/back.png'
import Chart from '../Chart/Chart'
import { ArrowUpward } from '@material-ui/icons'
import PieX from '../PieX/PieX'

const RightBar = () => {
  return (
    <div className="rightbar">

      
      <div className="rightbarHeader">
        <img src={CreditCard1} draggable={true} className="credit-card" alt="" />
        <img src={CreditCard2} draggable={true} className="credit-card" alt="" />
      </div>


      <div className="rightbarBody">
        <h3 className="rightbarBody-title">Users Are most Active in:</h3>
        <div className="details">
          <span className="orange">summer</span>
          <span className="blue">winter</span>
          <span className="green">spring</span>
          <span className="yellow">autumn</span>
        </div>
        {/* <Chart aspect={2 / 1} Title="Last 6 Month (Revenue)" /> */}
        <PieX />


      </div>

    </div>
  )
}

export default RightBar