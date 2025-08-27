import logo from './logo.svg';
import './App.css';
import BlurBlob from './BlurBlob';


import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Experince from './Components/Experience/Experince';
import Work from './Components/Work/Work';
import Education from './Components/Education/Education';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
// import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="bg-[#050414]">
      <BlurBlob position={{top: '35%', left: '20%'}} size={{width: '30%', height: '40%'}} />
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

      {/* <div className='absolute insert-0 bg-[linear-gradient(to_right, #4f4f4f2e_1px), linear-gradient(to_bottom, #4f4f4f2e_1px, transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%, transparent_100%)]'></div> */}
      {/* Heyyy */}
      <div className='relative pt-20'>
        <Navbar />
        <About />
        <Skills />
        <Experince />
        <Work />
        {/* <Education /> */}
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
