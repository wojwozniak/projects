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
  )
}

export default Ecommerce