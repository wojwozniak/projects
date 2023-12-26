import { FC } from 'react';

interface TimelineItemProps {
  projectName: string;
  description: string;
  link?: string;
  linkTitle?: string;
  secondLink?: string;
  secondLinkTitle?: string;
}

const TimelineItem: FC<TimelineItemProps> = ({ projectName, description, link, linkTitle, secondLink, secondLinkTitle }) => {
  return (
    <div className="border-l-4 border-gold pl-4 mb-4">
      <h3 className="text-2xl font-medium">{projectName}</h3>
      <p className="text-lg">{description}</p>
      {link &&
        <a href={link}
          target="_blank"
          className="text-gold hover:underline mr-5">
          {linkTitle}
        </a>
      }
      {secondLink &&
        <a href={secondLink}
          target="_blank"
          className="text-gold hover:underline">
          {secondLinkTitle}
        </a>
      }
    </div>
  );
}

export default TimelineItem;