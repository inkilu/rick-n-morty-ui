import React, { useContext, useState } from "react"
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Button } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import { AuthContextV2 } from '../../store/AuthContextV2';
import ScienceIcon from '@mui/icons-material/Science';
import FormControl from '@mui/material/FormControl';
import { FilterContext } from "../../store/FilterContext";
import TextField from '@mui/material/TextField';
import "./header.css";
export default function Header() {
    const [features,setFeatures]=useState({
        status:'',
        gender:'',
        name:''
    });
    const { loginState } = useContext(AuthContextV2);
    const { setSearch} = useContext(FilterContext);

    function handleSearchChange(e){
        setFeatures(prevState=>{
            console.log(features);
            return {...prevState,[e.target.name]:e.target.value}
        })
    }
    function handleStatusChange(e) {
        setFeatures(prevState=>{
            console.log(features);
            return {...prevState,[e.target.name]:e.target.value}
        })
    }
    function handleGenderChange(e) {
        setFeatures(prevState=>{
            console.log(features);
            return {...prevState,[e.target.name]:e.target.value}
        })
    }
    function handleSubmit(e){
        setSearch(prevState=>{
            return {...prevState,...features}
        })
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
                    <div className="input-field">
                        <TextField id="outlined-basic" name="name" label="Search" variant="outlined" size="small"  onChange={handleSearchChange}/>
                        <Button variant="contained" sx={{marginLeft:"20px",marginTop:"1px"}} onClick={handleSubmit}>Search</Button>
                    </div>
                    <div className="status-sort">
                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                            <InputLabel id="demo-select-small-label">Status</InputLabel>
                            <Select
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                value={features.status}
                                label="Status"
                                onChange={handleStatusChange}
                                name="status"
                            >
                                <MenuItem value={''}>All</MenuItem>
                                <MenuItem value={'Alive'}>Alive</MenuItem>
                                <MenuItem value={'Dead'}>Dead</MenuItem>
                                <MenuItem value={'unknown'}>Unknown</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="gender-sort">
                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                            <InputLabel id="demo-select-small-label">Gender</InputLabel>
                            <Select
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                value={features.gender}
                                label="Gender"
                                onChange={handleGenderChange}
                                name="gender"
                            >
                                <MenuItem value={'All'}>All</MenuItem>
                                <MenuItem value={'Female'}>Female</MenuItem>
                                <MenuItem value={'Male'}>Male</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="Login">
                        <Button variant="outlined" onClick={() => setLoginState(false)}>Logout</Button>
                    </div>
                </div>}

            </div>
        </div>
    )
}