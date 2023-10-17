import React, { useContext, useEffect, useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Button, Grid, Box, Switch } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import { AuthContextV2 } from '../../store/AuthContextV2';
import ScienceIcon from '@mui/icons-material/Science';
import FormControl from '@mui/material/FormControl';
import { FilterContext } from '../../store/FilterContext';
import TextField from '@mui/material/TextField';
import './header.css';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
export default function Header() {
	const [features, setFeatures] = useState({
		status: '',
		gender: '',
		name: '',
	});
	const { loginState } = useContext(AuthContextV2);
	const { setSearch } = useContext(FilterContext);
	const [checked, setChecked] = React.useState(false);
	const handleChange = (event) => {
		setChecked(event.target.checked);
	};
	function handleSearchChange(e) {
		setFeatures((prevState) => {
			console.log(features);
			return { ...prevState, [e.target.name]: e.target.value };
		});
	}
	function handleStatusChange(e) {
		setFeatures((prevState) => {
			console.log(features);
			return { ...prevState, [e.target.name]: e.target.value };
		});
	}
	function handleGenderChange(e) {
		setFeatures((prevState) => {
			console.log(features);
			return { ...prevState, [e.target.name]: e.target.value };
		});
	}
	function handleSubmit(e) {
		setSearch((prevState) => {
			return { ...prevState, ...features };
		});
	}

	useEffect(()=>{
		if(checked){
			document.body.classList.add('dark');
		}else{
			document.body.classList.remove('dark')
		}
	},[checked])
	const { setLoginState } = useContext(AuthContextV2);
	return (
		<div>
			<div className="header">
				<div className="left-container">
					<div className="dashboard"></div>
					<div className="logo">
						<ScienceIcon />
					</div>
				</div>
				{loginState && (
					<div>
						<Grid container columns={{ xs: 2 }}>
							<Box
								display="flex"
								marginTop="10"
								justifyContent="center"
								alignItems="center"
								textAlign="center"
								borderRadius="20px">
								<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
									<InputLabel id="demo-select-small-label">Status</InputLabel>
									<Select
										labelId="demo-select-small-label"
										id="demo-select-small"
										value={features.status}
										label="Status"
										onChange={handleStatusChange}
										name="status">
										<MenuItem value={''}>All</MenuItem>
										<MenuItem value={'Alive'}>Alive</MenuItem>
										<MenuItem value={'Dead'}>Dead</MenuItem>
										<MenuItem value={'unknown'}>Unknown</MenuItem>
									</Select>
								</FormControl>
							</Box>
							<Box
								display="flex"
								marginTop="10"
								justifyContent="center"
								alignItems="center"
								textAlign="center"
								borderRadius="20px">
								<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
									<InputLabel id="demo-select-small-label">Gender</InputLabel>
									<Select
										labelId="demo-select-small-label"
										id="demo-select-small"
										value={features.gender}
										label="Gender"
										onChange={handleGenderChange}
										name="gender">
										<MenuItem value={'All'}>All</MenuItem>
										<MenuItem value={'Female'}>Female</MenuItem>
										<MenuItem value={'Male'}>Male</MenuItem>
									</Select>
								</FormControl>
							</Box>
							<Box
								display="flex"
								marginTop="5"
								justifyContent="center"
								alignItems="center"
								textAlign="center"
								borderRadius="20px">
								<TextField
									sx={{ minWidth: 4 }}
									id="outlined-basic"
									name="name"
									label="Search"
									variant="outlined"
									size="small"
									onChange={handleSearchChange}
									autoComplete="off"
								/>
								<Button
									variant="contained"
									sx={{ marginLeft: '20px', minWidth: 120 }}
									onClick={handleSubmit}>
									Search
								</Button>
								<Button
									color="error"
									sx={{ minWidth: 120, marginLeft: 3 }}
									variant="outlined"
									onClick={() => setLoginState(false)}
									size="medium">
									Logout
								</Button>
							</Box>
						</Grid>
						<Grid container justifyContent={'center'}>
							<Grid item display={'flex'} alignItems={'center'} justifyContent={'center'}>
								<DarkModeIcon />
								<Switch
									checked={checked}
									onChange={handleChange}
									inputProps={{ 'aria-label': 'controlled' }}
									value={checked}
								/>
								<LightModeIcon />
							</Grid>
						</Grid>
					</div>
				)}
			</div>
		</div>
	);
}
