import Footer from './Footer';
import { ThemeProvider, useTheme } from './ThemeContext';
import Navbar from './Navbar';
import ProjectsGrid from './ProjectsGrid';

const App = () => {
  const { theme } = useTheme();
  return (
    <ThemeProvider>
      <div data-theme={theme} 
      className='min-h-screen transition-colors duration-300 ease-in-out' 
      style={{ borderBottom: `1px solid var(--color-border)`, backgroundColor: 'var(--color-background)', color: 'var(--color-text)' }}>
        <Navbar />
        <ProjectsGrid />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;