import React, { useState, useEffect } from "react"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import { CircularProgress } from "@mui/material"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}))

export default function BuoyOhBuoy() {
  const [waveData, setWaveData] = useState([])
  useEffect(() => {
    fetch(
      "https://wawaves.org/wp-admin/admin-ajax.php?action=waf_rest_list_buoy_datapoints&id=14"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setWaveData(data)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs>
          {waveData.length > 0 ? (
            <Item>{waveData.data_points}</Item>
          ) : (
            <Item>
              <CircularProgress />
            </Item>
          )}
        </Grid>
      </Grid>
    </Box>
  )
}
