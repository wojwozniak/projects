import ProjectComponent from './../ui/ProjectComponent'
import img__pustynna from './../../assets/images/pustynna.png'
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Pustynna = () => {
  return (
    <ProjectComponent
      title="Website for a scout event"
      date="March - May 2022"
      techStack="PHP, Wordpress, CSS, Javascript"
      screenshotUrl={img__pustynna}
      description={
        <div>
          <p>
            This project marks my initial venture into semi-professional web development and represents my first substantial website creation. It was crafted using a combination of HTML, CSS, JavaScript, and PHP. Additionally, WordPress was employed as the content management system. I continue to contribute to this website by providing ongoing maintenance and developing new features, including seasonal mini-games.
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
  )
}

export default Pustynna