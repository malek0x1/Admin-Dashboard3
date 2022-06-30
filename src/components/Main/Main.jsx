import React from 'react'
import './Main.css'
import Pic from '../assets/graph.png'
import { Menu, Search } from '@material-ui/icons'
import { ArrowRight, DoubleArrow } from '@mui/icons-material'
const Main = () => {
  return (
    <div className="main">
      <div className="widget1">

        <div className="leftWidget1">
          <div className="price">
            <h3>$15,980</h3>
            <p>Credits</p>
          </div>
          <img src={Pic} draggable={false} alt="img" className="graph" />
        </div>
        <div className="rightWidget1">
          <div className="price">
            <h3>$15,980</h3>
            <p>Credits</p>
          </div>
          <img src={Pic} draggable={false} alt="img" className="graph" />

        </div>
      </div>
      <div className="widget2">
        <div className="widget2_row">
          <p>Latest Transactions</p>
          <div className="widget2_row_icons">
            <Search />
            <Menu />
          </div>

        </div>

        <p className="widget2_date">Mon,Mar 1</p>





        <div className="widget2_row">
          <div className="widget2_icon_text">
            <div className="colored">
              <DoubleArrow className="Arrow" />
            </div>
            <p> Payment to Malek0x1</p>
          </div>

          <div className="widget2_price">
            $560
          </div>
        </div>


        <div className="widget2_row">
          <div className="widget2_icon_text">
            <div className="colored2">
              <DoubleArrow className="Arrow" />
            </div>
            <p> Payment to Malek0x1</p>
          </div>

          <div className="widget2_price2">
            $999
          </div>
        </div>


        <div className="widget2_row">
          <div className="widget2_icon_text">
            <div className="colored3">
              <DoubleArrow className="Arrow" />
            </div>
            <p> Payment to Malek0x1</p>
          </div>

          <div className="widget2_price">
            $560
          </div>
        </div>








        <p className="widget2_date">Mon,Mar 1</p>

        <div className="widget2_row">
          <div className="widget2_icon_text">
            <div className="colored2">
              <DoubleArrow className="Arrow" />
            </div>
            <p> Payment to Mikey</p>
          </div>

          <div className="widget2_price2">
            $560
          </div>
        </div>

      </div>


    </div>
  )
}

export default Main