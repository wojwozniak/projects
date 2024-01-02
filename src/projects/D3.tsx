import img__d3charts from './../../assets/images/d3charts.png'
import ProjectComponent from '../ui/ProjectComponent'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const D3 = () => {
  return (
    <ProjectComponent
      title="Collection of D3.js charts"
      date="June 2022"
      techStack="D3.js, Javascript, Vue.js"
      screenshotUrl={img__d3charts}
      description={
        <div>
          <p>
            I've developed a series of charts as a practical exercise to master the D3.js library. The data for these charts were sourced from FreeCodeCamp. This project was part of the final assignment for their Data Visualization course, which I completed to earn a certificate.
          </p>
          <p className='mt-4'>
            A few months after completing the course, I decided to give the charts a new look by rewriting them with Vue.js. To enhance user experience, I integrated all of these charts into a single website, allowing for more streamlined navigation.
          </p>
          <p className='mt-4'>
            The website is tailored for desktop use, offering information that becomes visible upon hovering over different elements.
          </p>
          <ul className='flex flex-row justify-between w-full px-4 pt-4'>
            <li className='flex flex-row items-center justify-center gap-2'>
              <FaExternalLinkAlt className='text-blue-500 hover:underline' />
              <a href="https://wojwozniak.com/d3-charts/index.html"
                className="text-blue-500 hover:underline"
                target='_blank'>
                Live website
              </a>
            </li>
            <li className='flex flex-row items-center justify-center gap-2'>
              <FaGithub className='text-blue-500 hover:underline' />
              <a href="https://github.com/wojwozniak/d3-charts"
                className="text-blue-500 hover:underline"
                target='_blank'>
                Github repository
              </a>
            </li>
            <li className='flex flex-row items-center justify-center gap-2'>
              <FaExternalLinkAlt className='text-blue-500 hover:underline' />
              <a href="https://www.freecodecamp.org/certification/wojwozniak/data-visualization"
                className="text-blue-500 hover:underline"
                target='_blank'>
                FCC Certificate
              </a>
            </li>

          </ul>
        </div>
      }
    />
  )
}

export default D3