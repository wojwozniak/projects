import img__eCommerce from './../../assets/images/nodeshop.png'
import ProjectComponent from '../ui/ProjectComponent'
import { FaGithub } from 'react-icons/fa'

const Ecommerce = () => {
  return (
    <ProjectComponent
      title="E-commerce website (backend)"
      date="December 2023"
      techStack="Node.js, Express, MongoDB, EJS, Tailwind"
      screenshotUrl={img__eCommerce}
      description={
        <div>
          <p>
            This e-commerce website, focusing purely on backend technologies, was developed using Node.js and incorporates a MongoDB database. It features a comprehensive shopping cart, secure user authentication, an admin panel, and several other functionalities.
          </p>
          <p className='mt-4'>
            For user authentication, it employs custom middleware along with bcrypt for password hashing. The admin panel also utilizes custom middleware for additional security. The website's design is crafted using Tailwind CSS, and it leverages EJS as its templating engine.
          </p>
          <p className='mt-4'>
            While this website isn't hosted online, those interested in exploring its features can access the source code on Github. Instructions for local deployment and operation are provided in the README.md file.
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
  )
}

export default Ecommerce