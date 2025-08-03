import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

export default function Item({ info }) {
  const { id, title, remarks, detail, link, price, img } = info;

  const [open, setOpen] = React.useState(false);
  const onClickImage = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <Card sx={{ width: '100%' }}>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            minWidth: 300,
            textAlign: 'center',
            p: 2,
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <div style={{ cursor: 'pointer' }} onClick={onClose}>
              <Typography variant="h6" sx={{ color: 'text.primary' }}>X</Typography>
            </div>
          </Box>
          <Box sx={{ mt: 2 }}>
            <img src={`/moving/images/${img}`} alt={title} style={{ maxHeight: '80vh', maxWidth: '90vw', display: 'block', margin: '0 auto' }} />
          </Box>
        </Box>
      </Modal>
      <CardHeader title={`${id}. ${title}`} />
      <CardMedia
        component="img"
        alt={title}
        sx={{ height: 150, width: '100%' }}
        image={`/moving/images/${img}`} // Fallback image
        onClick={onClickImage}
      />
      <CardContent sx={{ height: 80 }}>
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
            variant="body2"
            underline="hover"
            href={link}
            target="_blank"
            rel="noopener"
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