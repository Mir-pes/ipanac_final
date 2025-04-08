import { Routes, Route } from 'react-router-dom';
import Navbar from './navbar.jsx';
import FeatureSection from './featuresection.jsx';
import Workflow from './WhyChoose.jsx';
import Head from './head.jsx';
import Footer from './footer.jsx';
import About from './about.jsx';
import Enquire from './enquire.jsx';
import ServicesPage from './services.jsx';
import Quote from './quickquote.jsx';
import ContactUs from './Contactus.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div>
            <Head />
            <Workflow />
            {/* <FeatureSection /> */}
            <Footer />
          </div>
        } />
        
        <Route path="/about" element={<About />} />
        
      
        <Route path = "/enquire" element={<Enquire/>}/>
        <Route path = "/services" element= {<FeatureSection/>}/>
        <Route path = "/quickquote" element={<Quote/>}/>
        <Route path = "/contact" element={<ContactUs/>}/>
      </Routes>
    </>
  );
}

export default App;
