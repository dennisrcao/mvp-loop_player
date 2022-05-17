import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ModalCircleFifthsDiv } from './styled/ModalCircleFifthsDiv.styled.js';

const style = {
  width: 600,
  height: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  position: 'relative',
  top: '100px',
  left: '100px'
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ModalCircleFifthsDiv>
      <Button onClick={handleOpen} style={{button:{color:'black'} }}variant="outlined" size="small">Keys</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Circle of Fifths
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Ex: 8A -> 7A, 9A, 8B
          </Typography>
          <Box
            component="img"
            sx={{
              marginTop: '50px',
              marginLeft: '35px',
              height: 500,
              width: 500,
            }}
            alt="CIRCLEFIFTHS"
            src="https://mixedinkey.com/wp-content/uploads/2020/04/Camelot-Wheel-Mixed-In-Key-Harmonic-Mixing.png"
          />
        </Box>
      </Modal>
    </ModalCircleFifthsDiv>

  );
}
