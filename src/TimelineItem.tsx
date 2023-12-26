
const TimelineItem = ({ projectName, description }: { projectName: string, description: string }) => {
  return (
    <div className="border-l-4 border-gold pl-4 mb-4">
      <h3 className="text-2xl font-medium">{projectName}</h3>
      <p className="text-lg">{description}</p>
    </div>
  );
}

export default TimelineItem;