import { decode } from 'html-entities'
import launchVehicle from '../images/technology/image-launch-vehicle-portrait.jpg'
function Technologies() {
    return (
        <div className="flex  p-4">
            <nav>
                <ul className='ml-28 mt-16'>
                    <li className='text-3xl rounded-full w-20 flex h-20 justify-center items-center border-2 border-[#ffffff40] hover:border-white hover:transition-all transition-all cursor-pointer mb-8'>1</li>
                    <li className='text-3xl rounded-full w-20 flex h-20 justify-center items-center border-2 border-[#ffffff40] hover:border-white hover:transition-all transition-all cursor-pointer mb-8'>2</li>
                    <li className='text-3xl rounded-full w-20 flex h-20 justify-center items-center border-2 border-[#ffffff40] hover:border-white hover:transition-all transition-all cursor-pointer mb-8'>3</li>
                </ul>
            </nav>
            <section className='w-[500px] ml-28 mt-16'>
                <h3 className='font-barlow opacity-50 mb-4 t text-base text-light tracking-[2.7px]'>THE TERMINOLOGY...</h3>
                <h2 className='font-bellefair text-5xl'>LAUNCH VEHICLE</h2>
                <p className='max-w-md font-barlow text-light text-lg leading-8 mt-8 mb-12'>
                    {decode('A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth&#39;s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it&#39s quite an awe - inspiring sight on the launch pad!')}
                </p>
            </section>
            <img className='ml-52 w-[400px] -m-4 h-[450px] -mt-16' src={launchVehicle} alt="Planet" />
        </div>
    )
}

export default Technologies
