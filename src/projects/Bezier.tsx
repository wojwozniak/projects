import ProjectComponent from '../ui/ProjectComponent'
import img__bezier from './../../assets/images/bezier.png'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const Bezier = () => {
  return (
    <ProjectComponent
      title="Bezier curve editor"
      date="December 2023"
      techStack="React, Typescript, Tailwind, Canvas API"
      screenshotUrl={img__bezier}
      description={
        <div>
          <p>
            Bezier curve editor. It allows to create and edit bezier curves. It is built with React and Typescript. It uses Canvas API to draw curves and is styled with Tailwind CSS. It uses custom implementation of De Casteljau's algorithm to render curves.
          </p>
          <p>
            It allows to add, remove and move points. It works with unlimited number of layers - so we can have multiple curves on the same canvas. It also has feature to render "helper" lines. You can also export your image as a PNG or SVG file (SVG is optimised so it can be used as font generator).
          </p>
          <ul className='flex flex-row justify-between w-full px-4 pt-4'>
            <li className='flex flex-row items-center justify-center gap-2'>
              <FaExternalLinkAlt className='text-blue-500 hover:underline' />
              <a href="https://wojwozniak.com/bezier-curves/"
                className="text-blue-500 hover:underline"
                target='_blank'>
                Live website
              </a>
            </li>
            <li className='flex flex-row items-center justify-center gap-2'>
              <FaGithub className='text-blue-500 hover:underline' />
              <a href="https://github.com/wojwozniak/bezier-curves"
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

export default Bezier