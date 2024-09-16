import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaApple } from 'react-icons/fa';

const DaysGoneComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      easing: 'ease-in-out',
      once: true, 
    });
  }, []);

  return (
    <div className="min-h-screen text-white flex flex-col justify-center items-center text-center p-4">
    
      <h1 className="text-6xl font-bold mb-6" data-aos="fade-up">
        Days Gone
      </h1>

  
      <p className="text-xl mb-4" data-aos="fade-up" data-aos-delay="200">
        RELEASE DATE: 30TH DECEMBER
      </p>


      <p className="text-md max-w-xl mb-6" data-aos="fade-up" data-aos-delay="400">
      Players assume the role of Deacon St. John, a former bounty hunter struggling to survive in a post-apocalyptic world filled with zombie-like creatures called Freaks. Though players are surrounded by death and danger on all sides, the world that they get to explore feels as though it's truly alive, which can encourage players to take risks when they probably shouldn't.
      </p>


      <button 
        className="text-white border-2 border-yellow-400 rounded-full px-8 py-3 mb-4"
        style={{ borderRadius: '30%' }}
        data-aos="fade-up" data-aos-delay="600"
      >
        Try for Free
      </button>

   
      <div className="flex items-center justify-center mb-6" data-aos="fade-up" data-aos-delay="800">
        <FaApple className="text-2xl mr-2" />
        <p className="text-lg">Available on: iOS</p>
      </div>

 
      <p className="text-lg font-bold mb-6" data-aos="fade-up" data-aos-delay="1000">
        Buy now for $40 only
      </p>

  
      <div className="flex items-center justify-center" data-aos="fade-up" data-aos-delay="1200">
        <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
        <p className="text-md">40 of your friends are playing</p>
      </div>
    </div>
  );
};

export default DaysGoneComponent;
