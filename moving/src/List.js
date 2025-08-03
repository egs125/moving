import * as React from 'react';
import Grid from '@mui/material/Grid';
import Item from './Item';
import items from "./items.json";

export default function List() {
  return (
    <Grid container spacing={2} columns={{ xs: 2, md: 9 }}>
      {items.map((item, index) => (
        <Item info={item} key={index} size={{ xs: 2, md: 3 }} />
      ))}
    </Grid>
  );
}