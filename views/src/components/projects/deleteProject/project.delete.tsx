import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { deleteProject } from '../../../requests/project.request';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const DeleteModal = () => {
  const { projId } = useParams()
  const navigate = useNavigate()
  const trueStr = String(projId)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = async( ) => {
    await deleteProject(trueStr)
        .then(() => {
            navigate('/discover')
        })
  }

    return (
        <div>
            <Button onClick={handleOpen}>Remove</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    ARE YOU SURE YOU WANT TO REMOVE THIS PROJECT? ALL EARNINGS ARE SUBJECT TO REFUNDS FOR ALL BACKERS!

                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Click below to confirm deletion. Alternatively, click cancel to close this window without deleting.  <br />
                    <br />

                    <Button onClick={handleDelete}>DELETE</Button>
                    <Button onClick={handleClose}>CANCEL</Button>
                </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default DeleteModal
