import Footer from './Footer';
import ProjectComponent from './ui/ProjectComponent';
import { ThemeProvider, useTheme } from './ThemeContext';
import Navbar from './Navbar';

const App = () => {
  const { theme } = useTheme();
  return (
    <ThemeProvider>
      <div data-theme={theme} 
      className='min-h-screen transition-colors duration-300 ease-in-out' 
      style={{ borderBottom: `1px solid var(--color-border)`, backgroundColor: 'var(--color-background)', color: 'var(--color-text)' }}>
        <Navbar />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          <ProjectComponent
            title="Example title"
            date="Date"
            screenshotUrl="http://placehold.co/400"
            description={
              <div>
                <p>This is a very long HTML description with <strong>formatting</strong> and <a href="#">links</a>.
                </p>
              </div>
            }
          />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;