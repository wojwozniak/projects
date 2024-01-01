import React from "react";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

interface ProjectPopupProps {
  open: boolean;
  onClose: () => void;
  title: string;
  date: string;
  screenshotUrl: string;
  description: JSX.Element;
}

const ProjectPopup: React.FC<ProjectPopupProps> = ({
  open,
  onClose,
  title,
  date,
  screenshotUrl,
  description,
}) => {
  return (
    <Dialog onClose={onClose} open={open} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ textAlign: 'center', m: 0, p: 2 }}>
        <strong>{title}</strong> <em>({date})</em>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers sx={{ position: 'relative' }}>
        <img src={screenshotUrl} alt={`Screenshot of ${title}`}
          style={{
            maxWidth: '100%',
            height: 'auto',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '20px'
          }} />
        <div style={{ textAlign: 'center' }}>
          {description}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectPopup;