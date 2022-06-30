import { AccessAlarms, AcUnit, AddAPhoto, AirportShuttle, BrightnessAuto, Build, Group, Person } from '@material-ui/icons'
import { Add, Agriculture, Anchor, BatteryChargingFull, Home, Link, PersonOutlined } from '@mui/icons-material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import './SideBar.css'
const SideBar = () => {

    return (
        <>
            <div className="LeftBar">
                <div className="icons">


                    <div className="icon">
                        <NavLink to="/Admin-Dashboard3/">
                            <Home />
                        </NavLink>
                    </div>


                    <div className="icon">
                        <NavLink to="/Admin-Dashboard3/users" end>
                            <Group />
                        </NavLink>
                    </div>



                    <div className="icon">
                        <NavLink to="/Admin-Dashboard3/users/new/" end>

                            <Add />
                        </NavLink>
                    </div>
                    <div className="icon">
                        <Agriculture />
                    </div>
                    <div className="icon">

                        <AirportShuttle />
                    </div>
                    <div className="icon">
                        <Anchor />
                    </div>
                    <div className="icon">
                        <BatteryChargingFull />
                    </div>
                    <div className="icon">
                        <BrightnessAuto />
                    </div>
                    <div className="icon">
                        <Build />
                    </div>

                </div>


            </div>

        </>
    )
}

export default SideBar