'use client';

import * as React from 'react';
// import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Container } from '@mui/material';

// Transition for the modal
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// Props interface
interface FullScreenDialogProps {
  label?: string;
  title: string;
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

const FullScreenDialog: React.FC<FullScreenDialogProps> = ({  title, children, open, onClose }) => {

  return (
    <React.Fragment>
      <Dialog
      fullScreen
      open={open}
      onClose={onClose}
     slots={{
          transition: Transition,
        }}
    >
       <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
              edge="start"
              color="inherit"
              onClick={onClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          <Typography sx={{ flex: 1 }} variant="h6" component="div">
            {title}
          </Typography>
          
        </Toolbar>
        </Container>
      </AppBar>
      <div className="p-6">{children}</div>
    </Dialog>
    </React.Fragment>
  );
};

export default FullScreenDialog;
