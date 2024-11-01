import Image from 'next/image';
import darkScrollImage from '../../../../public/images/landingPage/scroll (1).png';
import LightScrollImage from '../../../../public/images/landingPage/scroll.png';



interface MoveUpProps {
  darkMode: boolean;
}

const MoveUp: React.FC<MoveUpProps> = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // This adds a smooth scrolling effect
    });
  };

  return (
    <div className='flex flex-row mr-10 justify-end pb-20'>
      <div onClick={scrollToTop} className='cursor-pointer'> {/* Added click handler */}
        <Image 
          src={darkMode ? darkScrollImage : LightScrollImage} 
          width={50} 
          height={50} 
          alt="arrow"
        />
      </div>
    </div>
  );
}

export default MoveUp;

