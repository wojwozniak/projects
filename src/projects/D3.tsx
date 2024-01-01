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
            I have created a collection of charts to learn D3.js library. Data for charts is from FreeCodeCamp - I have finished their Data Visualization course and did those charts as a final project to get a certificate.
          </p>
          <p>
            Few months later I decided to rewrite them using Vue.js. I have also made them into a single website for easier navigation.
          </p>
          <p>
            Website is optimised for desktop devices - a lot of information is displayed on hover.
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