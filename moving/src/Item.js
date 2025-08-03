import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Item({ info }) {
  const { id, title, remarks, detail, link, price, img } = info;

  return (
    <Card sx={{ width: 345, height: 350 }}>
      <CardHeader title={`${id}. ${title}`} />
      <CardMedia
        component="img"
        alt={title}
        height="150"
        image={img}
      />
      <CardContent>
        <Typography variant="body2">
          {remarks}
        </Typography>
        <Typography variant="body2">
          {detail}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        { link ? (
          <Link 
            component="button"
            variant="body2"
            underline="hover"
            href={link}
          >
            {'구매 링크'}
          </Link>
        ) : (
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            링크 없음
          </Typography>
        )}
      </CardActions>
    </Card>
  );
}