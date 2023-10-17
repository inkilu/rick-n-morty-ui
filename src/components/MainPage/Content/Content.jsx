import React, { useContext, useEffect, useState } from 'react';
import { fetchCharacterDetails } from '../../../services/fetchAPI';
import Card from './Card/Card';
import { FilterContext } from '../../../store/FilterContext';
import Pagination from '@mui/material/Pagination';
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Typography } from '@mui/material';
import '../Content/content.css';
export default function Content() {
	const { search, setSearch } = useContext(FilterContext);
	const [fetchData, setFetchData] = useState([]);
	const [maxPage, setMaxPage] = useState();
	const [page, setPage] = useState(1);
	const handleChange = (event, value) => {
		setPage(value);
		setSearch((prevState) => {
			return { ...prevState, page };
		});
	};
	useEffect(() => {
		fetchCharacterDetails(search.name, search.page, search.gender, search.status)
			.then((response) => {
				setFetchData(response?.results);
				setMaxPage(response?.info.pages);
			})
			.catch((e) => {
				setFetchData([]);
				setMaxPage([]);
			});

		// getMaxPageCount().then(response => setMaxPage(response));
	}, [search, page]);

	return (
		<div>
			<Typography style={{ textAlign: 'center', margin: '20px', fontSize: '3rem' }}>Rick and Morty</Typography>
			<Grid container spacing={{ xs: 4, md: 2 }} columns={{ xs: 1, sm: 8, md: 12 }} sx={{ maxWidth: '99%' }}>
				{fetchData.map((e, index) => (
					<Grid xs={2} sm={4} md={4} lg={3} key={index} sx={{ paddingBottom: '10' }}>
						<Box
							display="flex"
							marginTop="10"
							justifyContent="center"
							alignItems="center"
							textAlign="center"
							borderRadius="20px">
							<Card characterData={e} />
						</Box>
					</Grid>
				))}
			</Grid>
			<div className="pagination-div">
				<Pagination count={maxPage} size="large" onChange={handleChange} />
			</div>
		</div>
	);

	// const renderData = fetchData.map((e, index) => {
	//     if (e.gender === gender && e.status === status) {
	//         console.log(e)
	//         return (
	//             <>
	//                 <Box
	//                     display="flex"
	//                     marginTop='20px'
	//                     justifyContent="center"
	//                     alignItems="center"
	//                     textAlign="center"
	//                     borderRadius="20px"
	//                 >
	//                     <Card key={e.name} characterData={e} />
	//                 </Box>

	//             </>
	//         )
	//     }
	// }

	// )
	// return (
	//     <div>
	//         <h1 style={{ textAlign: "center", margin: "20px" }}>Rick n Morty</h1>
	//         <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }} sx={{ maxWidth: '99%' }}>
	//             <Grid xs={2} sm={3} md={3} sx={{ paddingBottom: '10' }}>
	//                 {renderData}
	//             </Grid>
	//         </Grid>
	//     </div>
	// )
}
