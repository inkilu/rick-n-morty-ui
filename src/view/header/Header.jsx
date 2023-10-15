import React, { useContext, useState } from "react"
import "./header.css";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Button } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import { AuthContextV2 } from '../../store/AuthContextV2';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import ScienceIcon from '@mui/icons-material/Science';
import FormControl from '@mui/material/FormControl';
import { FilterContext } from "../../store/FilterContext";
export default function Header() {
    const {loginState} = useContext(AuthContextV2);
    const { status, setStatus, gender, setGender } = useContext(FilterContext)

    function handleStatusChange(e) {
        setStatus(e.target.value);
    }
    function handleGenderChange(e) {
        setGender(e.target.value);
    }
    const { setLoginState } = useContext(AuthContextV2)
    return (
        <div>
            <div className="header">
                <div className="left-container">
                    <div className="dashboard"></div>
                    <div className="logo"><ScienceIcon /></div>
                </div>
                {loginState && <div className="right-container">
                    <div className="status-sort">
                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                            <InputLabel id="demo-select-small-label">Status</InputLabel>
                            <Select
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                value={status}
                                label="Status"
                                onChange={handleStatusChange}
                            >
                                <MenuItem value={'All'}>All</MenuItem>
                                <MenuItem value={'Alive'}>Alive</MenuItem>
                                <MenuItem value={'Dead'}>Dead</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="gender-sort">
                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                            <InputLabel id="demo-select-small-label">Gender</InputLabel>
                            <Select
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                value={gender}
                                label="Gender"
                                onChange={handleGenderChange}
                            >
                                <MenuItem value={'All'}>All</MenuItem>
                                <MenuItem value={'Female'}>Female</MenuItem>
                                <MenuItem value={'Male'}>Male</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="Login">
                        <Button variant="outlined" onClick={() => setLoginState(false)}>Logout</Button>
                        {/* <button className="login-button" >Logout</button> */}
                    </div>
                </div>}
                
            </div>
        </div>
    )
}