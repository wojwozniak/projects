import ProjectComponent from './ui/ProjectComponent'
import img__pustynna from './../assets/images/pustynna.png'
import img__eCommerce from './../assets/images/nodeshop.png'
import img__bezier from './../assets/images/bezier.png'
import img__d3charts from './../assets/images/d3charts.png'
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectsGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <ProjectComponent
        title="E-commerce website (backend)"
        date="December 2023"
        techStack="Node.js, Express, MongoDB, EJS, Tailwind"
        screenshotUrl={img__eCommerce}
        description={
          <div>
            <p>
              E-commerce website (built exclusively with backend technologies). Created with Node.js, used MongoDB database. It has a fully functional shopping cart, user authentication, admin panel and more.
            </p>
            <p>
              User authentication is done with custom middleware (and password hashing with bcrypt). Admin panel is protected with a custom middleware as well. The website is styled with Tailwind CSS. It uses EJS as a templating engine.
            </p>
            <p>
              It is not hosted anywhere, but if you want to play with it, you can check the source code on Github and run it locally. (guide in README.md)
            </p>
            <p className='flex flex-row items-center justify-center gap-2'>
              <a href="https://github.com/wojwozniak/nodejs-shop"
                className="text-blue-500 hover:underline flex flex-row items-center justify-center gap-2 mt-2"
                target='_blank'>
                <FaGithub />
                Github repository
              </a>
            </p>
          </div>
        }
      />
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