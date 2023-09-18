import imagen from '../assets/images/imagen.jpg'
import { TypeAnimation } from 'react-type-animation';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedinIn} from 'react-icons/fa';


const Main = () => {
    return ( 
        <div id="main">
            <img className='w-full h-screen object-cover object-left scale-x-[-1]' src={imagen} alt="/" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>{`I'm Diego Palacios`}</h1>
                <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>{`I'm a `}
                <TypeAnimation
                     sequence={[
                        'FrontEnd Developer',
                          2000, 
                         'Coder',
                          1000,
                          'Tech Enthusiast',
                         1000,
                        ]}
                            wrapper="span"
                           cursor={true}
                          style={{ fontSize: '1em', paddingLeft: '5px' }}
                         repeat={Infinity}
                    />
                </h2>
                <div className='flex justify-between pt-6 max-w-[200px] w-full '>
                    <FaFacebook size={20} className='cursor-pointer' />
                    <FaTwitter size={20} className='cursor-pointer' />
                    <FaInstagram size={20} className='cursor-pointer' />
                    <FaLinkedinIn size={20} className='cursor-pointer' />
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default Main;