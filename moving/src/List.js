import * as React from 'react';
import Grid from '@mui/material/Grid';
import Item from './Item';
import items from "./items.json";

export default function List() {
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      {items.map((item, index) => (
        <Grid item xs={12} md={4} key={index}>
          <Item info={item} />
        </Grid>
      ))}
    </Grid>
  );
}