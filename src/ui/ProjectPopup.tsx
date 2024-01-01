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
    <Dialog
      onClose={onClose}
      open={open}
      maxWidth="sm"
      fullWidth
      sx={{
        '& .MuiDialog-container .MuiPaper-rounded': {
          borderRadius: 'var(--border-radius)',
        },
      }}
    >
      <DialogTitle sx={{
        textAlign: 'center',
        m: 0, p: 2,
        backgroundColor: 'var(--color-background)',
        color: 'var(--color-text)',
        borderBottom: `1px solid var(--color-divider)`,
      }}>
        <strong>{title}</strong> <em>({date})</em>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            backgroundColor: 'transparent',
            color: 'var(--color-text)',
            '&:hover': {
              backgroundColor: 'var(--color-border)',
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent
        dividers
        sx={{
          position: 'relative',
          backgroundColor: 'var(--color-background)',
          color: 'var(--color-text)',
          '& .MuiDialogContent-dividers': {
            borderTop: `1px solid var(--color-divider)`,
            borderBottom: `1px solid var(--color-divider)`,
          },
        }}
      >
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