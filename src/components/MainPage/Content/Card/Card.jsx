import '@fontsource/roboto/400.css';
import { Typography, Paper, Button } from '@mui/material';
import '../Card/card.css';
import { useState } from 'react';
export default function Card({ characterData }) {
	const [details, setDetails] = useState(false);
	function handleOnClick() {
		setDetails((prevState) => {
			return !prevState;
		});
	}
	return (
		<div className="main-card-div">
			<Paper elevation={6}>
				<img className="character-image" src={characterData.image} alt="" />
				<Typography className="character-name">{characterData.name}</Typography>
				{details ? (
					<Button
						variant="contained"
						sx={{ margin: '10px' }}
						name={characterData.id}
						onClick={handleOnClick}
						color="error">
						Close
					</Button>
				) : (
					<Button variant="contained" sx={{ margin: '10px' }} name={characterData.id} onClick={handleOnClick}>
						View
					</Button>
				)}
			</Paper>
			{details && (
				<div>
					<Paper elevation={6} sx={{ marginTop: '1px', padding: '10px' }}>
						<Typography className="character-name">Status: {characterData.status}</Typography>
						<Typography className="character-name">Gender: {characterData.gender}</Typography>
						<Typography className="character-name">Species:{characterData.species}</Typography>
						<Typography className="character-name">Location: {characterData.location.name}</Typography>
					</Paper>
				</div>
			)}
		</div>
	);
}
