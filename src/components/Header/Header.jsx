import { Chat, Person, PersonOutline } from '@material-ui/icons'
import { NotificationAdd, NotificationAddOutlined, NotificationsTwoTone } from '@mui/icons-material'
import logoX from '../assets/at.png'
import React from 'react'
import './Header.css'
import HeaderSelectBox from './HeaderSelectBox'
const Header = () => {
    return (
        <>
            <div className="header">
                <div className="LeftHeader">
                    <div className="AppLogo">
                        {/* <img src={logoX} className="logox" alt="logox" /> */}

                        <h2 className="oG">MN</h2>

                    </div>
                    <div className="greeting">
                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="logo" alt="logo" /> <h4 className="h4-greeting">Welcome To Malek0x1 Dashboard</h4>
                    </div>
                </div>

                <div className="RightHeader">
                    <HeaderSelectBox />
                    <Chat className="chatIcon" />
                    <NotificationAddOutlined className=""/>
                    <PersonOutline className="remove-me"/>

                </div>


            </div>

        </>
    )
}

export default Header