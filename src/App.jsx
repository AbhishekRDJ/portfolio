import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
  Footer,
  ContributionGraph
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="z-0 relative">
        <div>
          <Navbar />
          <Hero />
        </div>

        <div className="bg-about bg-cover bg-no-repeat bg-center">
          <About />
        </div>

        <div className="bg-tech bg-cover bg-no-repeat bg-center pb-10">
          <Tech />
        </div>

        <Projects />
        <div className="flex justify-center items-center bg-[#141414] p-8 min-h-screen">
          <ContributionGraph />
        </div>

        <div
          className="bg-experience bg-cover bg-no-repeat bg-center rounded-tl-[150px] rounded-br-[150px]">
          <div
            className="bg-experienceLight bg-cover bg-no-repeat bg-center rounded-tl-[150px] rounded-br-[130px]">
            <Experience />
          </div>
        </div>
        <div className="z-0 relative">
          <Contact />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
