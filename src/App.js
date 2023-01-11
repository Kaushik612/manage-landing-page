
import './App.css';
import Features from './components/features/Features';
import Footer from './components/footer/Footer';
import GetStarted from './components/getstarted/GetStarted';
import Hero from './components/hero/Hero';
import Navbar from './components/navigation/Navbar';
import Testimonials from './components/testimonials/Testimonials';

//Toast
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <Toaster  
        position="bottom-center"
        reverseOrder={false}
        toastOptions={{
          className: '',
          duration: 3000,
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }}
        />
      <Navbar/>
      <Hero/>
      <Features/>
      <Testimonials/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
