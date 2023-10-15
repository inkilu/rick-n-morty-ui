import React, { useContext, useEffect, useState } from "react";
import { apiCall } from "../../../services/fetchAPI";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Typography } from "@mui/material";
import Card from "./Card/Card";
import { FilterContext } from "../../../store/FilterContext";
export default function Content() {
  const { gender, status } = useContext(FilterContext);
  const [fetchData, setFetchData] = useState([]);
  useEffect(() => {
    apiCall().then((response) => setFetchData(response));
  }, []);

  let filterData = [];
  if (gender === "All" || status === "All") {
    filterData = fetchData;
  } else {
    filterData = fetchData.filter(
      (e) => e.gender === gender && e.status === status
    );
  }
  return (
    <div>
      <Typography style={{ textAlign: "center", margin: "20px",fontSize:"3rem" }}>Rick and Morty</Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
        sx={{ maxWidth: "99%" }}
      >
        {filterData.map((e, index) => (
          <Grid xs={2} sm={3} md={3} key={index} sx={{ paddingBottom: "10" }}>
            <Box
              display="flex"
              marginTop="20px"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              borderRadius="20px"
            >
              <Card key={e.name} characterData={e} />
            </Box>
          </Grid>
        ))}
      </Grid>
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
