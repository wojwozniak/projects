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
            The Bezier Curve Editor is a tool designed for creating and editing Bezier curves. Developed using React and Typescript, this editor utilizes the Canvas API for drawing curves and features a sleek design courtesy of Tailwind CSS. At its core, the editor employs a custom implementation of De Casteljau's algorithm to ensure precise curve rendering.
          </p>
          <p className='mt-4'>
            This user-friendly editor offers functionality to add, remove, and manipulate points on the curve. It supports an unlimited number of layers, allowing for the creation of multiple curves on the same canvas. Additionally, it includes a helpful feature for displaying "helper" lines. For added convenience, users can export their creations in either PNG or SVG format, with the SVG option being optimized for use in font generation.
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