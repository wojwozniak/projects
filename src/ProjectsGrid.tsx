import ProjectComponent from './ui/ProjectComponent'

const ProjectsGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <ProjectComponent
        title="Wordpress website for a scout event"
        date="March - May 2022"
        techStack="PHP, Wordpress, CSS, JavaScript"
        screenshotUrl="http://placehold.co/400"
        description={
          <div>
            <p>
              This is a very long HTML description with <strong>formatting</strong> and <a href="#">links</a>.
            </p>
          </div>
        }
      />
    </div>
  )
}

export default ProjectsGrid