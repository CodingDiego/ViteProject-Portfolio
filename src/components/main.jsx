import imagen from '../assets/images/imagen.jpg'
import { TypeAnimation } from 'react-type-animation';

const Main = () => {
    return ( 
        <div id="main">
            <img className='w-full h-screen object-cover object-left scale-x-[-1]' src={imagen} alt="" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
            <div>
                <h1>Soy Diego Palacios</h1>
                <h2>Soy un 
                <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Coder',
        1000,
        'Tech Enthusiast',
        1000,
      ]}
      wrapper="div"
      cursor={true}
      style={{ fontSize: '1em', paddingLeft: '5px' }}
      repeat={Infinity}
    />

                </h2>
            </div>
        </div>
        </div>
     );
}
 
export default Main;