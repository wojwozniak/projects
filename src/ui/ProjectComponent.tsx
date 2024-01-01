import React, { useState } from "react";
import ProjectPopup from './ProjectPopup';

interface ProjectProps {
  title: string;
  date: string;
  screenshotUrl: string;
  description: JSX.Element;
}

const ProjectComponent: React.FC<ProjectProps> = ({
  title,
  date,
  screenshotUrl,
  description,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div
        className="cursor-pointer border border-gray-500 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
        onClick={handleOpen}
      >
        <img src={screenshotUrl} alt={`Screenshot of ${title}`} className="w-full h-auto" />
        <div className="p-4 style={{ borderBottom: `1px solid var(--color-border)`, backgroundColor: 'var(--color-background)', color: 'var(--color-text)' }}">
          <p className="text-lg font-bold">{title}</p>
          <p className="text-sm text-gray-600">{date}</p>
        </div>
      </div>

      <ProjectPopup
        open={open}
        onClose={handleClose}
        title={title}
        date={date}
        screenshotUrl={screenshotUrl}
        description={description}
      />
    </div>
  );
};

export default ProjectComponent;