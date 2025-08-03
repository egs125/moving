import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Item from './Item';
import items from "./items.json";

export default function List() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {items.map((item, index) => (
          <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
            <Item info={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}