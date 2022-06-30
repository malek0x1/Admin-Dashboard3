import { Close } from '@material-ui/icons';
import { Button, FormControlLabel, IconButton, Input, Radio, RadioGroup, Snackbar, TextField } from '@mui/material';
import React, { useState } from 'react'
import '../../App.css';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import './New.css'
import Alert from '@mui/material/Alert';
import PieX from '../PieX/PieX';
import UsersGraph from '../UsersGraph/UsersGraph';



const New = () => {


    const [openAlert, setOpenAlert] = useState(false);
    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            // setOpenAlert(false)
            return;
        }

        setOpenAlert(false);
    };

    return (
        <div className="App">
            <Header />
            <div className="body">
                <SideBar />
                <div className="form">
                    <div className="form-body">
                        <div className="form-title"><h1>Add User</h1></div>
                        <div className="left-inputs">
                            <TextField className="input-form" id="standard-basic" label="First Name" variant="standard" />
                            <TextField className="input-form" id="standard-basic" label="Last Name" variant="standard" />
                            <TextField className="input-form" id="standard-basic" label="Email" variant="standard" />
                            <TextField className="input-form" id="standard-basic" label="Age" variant="standard" />
                        </div>
                        <div className="right-inputs">
                            <TextField className="input-form" id="standard-basic" label="Proffesion" variant="standard" />
                            <TextField className="input-form" id="standard-basic" label="Habits" variant="standard" />
                            <TextField className="input-form" id="standard-basic" label="Other" variant="standard" />
                            <div className="radio">
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                </RadioGroup>
                            </div>                        </div>

                        <div className="form-footer">
                            <Button onClick={() => { setOpenAlert(true); }} color="primary" variant="contained">Submit</Button>
                        </div>
                    </div>
                </div>

                <div className="right-container">
                    <div className="right-container-header">
                        <h3>Added Users graph</h3>
                        {/* <div className="details">
                            <span className="orange">20-30</span>
                            <span className="blue">30-40</span>
                            <span className="green">40-50</span>
                            <span className="yellow">50-60</span>
                        </div> */}

                    </div>
                    {/* <PieX /> */}
                    <UsersGraph />
                </div>
            </div>


            <Snackbar
                open={openAlert}
                autoHideDuration={3000}
                onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            >
                <Alert onClose={handleClose} severity="success">
                    This is a success message!
                </Alert>
            </Snackbar>



        </div>
    )
}

export default New