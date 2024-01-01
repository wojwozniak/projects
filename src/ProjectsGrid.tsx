import Ecommerce from './projects/Ecommerce';
import Bezier from './projects/Bezier';
import D3 from './projects/D3';
import Pustynna from './projects/Pustynna';

const ProjectsGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <Ecommerce />
      <Bezier />
      <D3 />
      <Pustynna />
    </div>
  )
}

export default ProjectsGrid