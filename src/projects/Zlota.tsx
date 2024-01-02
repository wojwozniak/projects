import img__zlota from './../../assets/images/zlota.png'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import ProjectComponent from '../ui/ProjectComponent'

const Zlota = () => {
  return (
    <ProjectComponent
      title="Website for a scout team"
      date="July - August 2022"
      techStack="PHP, Wordpress, CSS, Javascript"
      screenshotUrl={img__zlota}
      description={
        <div>
          <p>
            A responsive website I have developed for a scout team to replace their old website. I have created it using Wordpress, PHP, HTML, CSS and Javascript. It has a lot of custom features and reusable components created with block plugin (such as custom post types, calendar, galleries for each year)
          </p>
          <p>
            Along this website I have also created series of guides for the team members to help them with website maintenance and content creation.
          </p>
          <ul className='flex flex-row justify-between w-full px-4 pt-4'>
            <li className='flex flex-row items-center justify-center gap-2'>
              <FaExternalLinkAlt className='text-blue-500 hover:underline' />
              <a href="https://zlotaosemka.dabrowagornicza.zhp.pl/"
                className="text-blue-500 hover:underline"
                target='_blank'>
                Live website
              </a>
            </li>
            <li className='flex flex-row items-center justify-center gap-2'>
              <FaGithub className='text-blue-500 hover:underline' />
              <a href="https://github.com/wojwozniak/wp-zlotaosemka"
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

export default Zlota