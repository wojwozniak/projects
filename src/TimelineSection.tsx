import { ReactNode } from 'react';
const TimelineSection = ({ title, children }: { title: string, children:ReactNode }) => {
  return (
    <div className="mt-6">
      <h2 className="text-3xl font-semibold">{title}</h2>
      <div className="mt-4">
        {children}
      </div>
    </div>
  );
}

export default TimelineSection;