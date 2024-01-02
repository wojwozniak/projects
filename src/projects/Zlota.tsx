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
            I developed a responsive website for a scout team, intended as an upgrade from their previous site. This project was realized using WordPress, PHP, HTML, CSS, and JavaScript. It boasts a variety of custom features and reusable components, all crafted through a block plugin. Notable elements include custom post types, an integrated calendar, and year-specific galleries.
          </p>
          <p className='mt-4'>
            Alongside the website, I also compiled a series of guides designed to assist team members in website maintenance and content creation, ensuring ease of use and ongoing management.
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