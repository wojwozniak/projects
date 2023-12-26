import { FC } from 'react';

interface TimelineItemProps {
  projectName: string;
  description: string;
  link?: string;
  secondLink?: string;
}

const TimelineItem: FC<TimelineItemProps> = ({ projectName, description, link, secondLink }) => {
  return (
    <div className="border-l-4 border-gold pl-4 mb-4">
      <h3 className="text-2xl font-medium">{projectName}</h3>
      <p className="text-lg">{description}</p>
      {link &&
        <a href={link}
          target="_blank"
          className="text-gold hover:underline">
          Link
        </a>
      }
      {secondLink &&
        <a href={secondLink}
          target="_blank"
          className="text-gold hover:underline">
          Link
        </a>
      }
    </div>
  );
}

export default TimelineItem;