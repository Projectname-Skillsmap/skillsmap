import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Modal,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useAppSelector } from 'src/redux/redux-hooks';
import { closeModal } from 'src/redux/widget/modals/modals';
import { useCreateNode } from 'src/hooks/map/nodes/useCreateNode';

const CustomizeCard = () => {
  const { visible } = useAppSelector(({ customizeCard }) => customizeCard);
  const [title, setTitle] = useState('');
  const createNode = useCreateNode();
  return (
    <Modal
      open={visible}
      onClose={() => closeModal('customize-card')}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          minWidth: '400px',
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '5px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <Typography id="modal-modal-title" variant="h5">
          Create a new card
        </Typography>
        <TextField
          fullWidth
          sx={{
            margin: '1rem 0',
          }}
          value={title}
          id="standard-basic"
          label="Title"
          variant="standard"
          size="medium"
          onChange={(input) => setTitle(input.target.value)}
        />
        <FormControl
          sx={{
            minWidth: '150px',
            margin: '1rem 0',
          }}
        >
          <InputLabel id="demo-simple-select-label">Difficulty</InputLabel>
        </FormControl>
        <Button
          sx={{
            maxWidth: 'auto',
            marginTop: '1rem',
          }}
          variant="outlined"
          onClick={() => {
            createNode({
              description: `${title} is VERY VERY FUN. You should try learn it`,
              title,
            });
          }}
        >
          SAVE
        </Button>
      </Box>
    </Modal>
  );
};

export default CustomizeCard;
