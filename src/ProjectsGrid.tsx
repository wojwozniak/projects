import ProjectComponent from './ui/ProjectComponent'
import img__pustynna from './../assets/images/pustynna.png'
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectsGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <ProjectComponent
        title="Website for a scout event"
        date="March - May 2022"
        techStack="PHP, Wordpress, CSS, Javascript"
        screenshotUrl={img__pustynna}
        description={
          <div>
            <p>
              This is the first semi-professional project and the first "big" website. I have used HTML, CSS, Javascript and PHP to create it. I have also used Wordpress as a content management system (CMS). I help with it's maintenance and develop new features (such as seasonal mini-games).
            </p>
            <ul className='flex flex-row justify-between w-full px-4 pt-4'>
              <li className='flex flex-row items-center justify-center gap-2'>
                <FaExternalLinkAlt className='text-blue-500 hover:underline' />
                <a href="https://pustynnaburza.dabrowagornicza.zhp.pl/"
                  className="text-blue-500 hover:underline"
                  target='_blank'>
                  Live website
                </a>
              </li>
              <li className='flex flex-row items-center justify-center gap-2'>
                <FaGithub className='text-blue-500 hover:underline' />
                <a href="https://github.com/wojwozniak/wp-pustynnaburza"
                  className="text-blue-500 hover:underline"
                  target='_blank'>
                  Github repository
                </a>
              </li>
            </ul>
          </div>
        }
      />
    </div>
  )
}

export default ProjectsGrid