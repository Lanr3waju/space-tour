import moon from '../images/destination/image-moon.png'
function Destinations() {
    return (
        <div className="flex  p-4">
            <img className='h-80 w-80 ml ml-52 mt-16 animate-spin-v-slow' src={moon} alt="Planet" />

            <section className='w-80 ml-64 mt-2'>
                <nav className='font-barlow w-3/4 text-base text-light  mb-7 flex justify-left'>
                    <ul className='flex justify-between w-[100%]'>
                        <li className='cursor-pointer mr-[32px] hover:border-opacity-50 hover:border-white hover:transition-all transition-all border-opacity-0 b border-transparent border-b-2 pt-2 pb-2'> MOON</li>
                        <li className='cursor-pointer mr-[32px] hover:border-opacity-50 hover:border-white hover:transition-all transition-all border-opacity-0 b border-transparent border-b-2 pt-2 pb-2'> MARS</li>
                        <li className='cursor-pointer mr-[32px] hover:border-opacity-50 hover:border-white hover:transition-all transition-all border-opacity-0 b border-transparent border-b-2 pt-2 pb-2'> EUROPA</li>
                        <li className='cursor-pointer mr-[32px] hover:border-opacity-50 hover:border-white hover:transition-all transition-all border-opacity-0 b border-transparent border-b-2 pt-2 pb-2'>TITAN</li>
                    </ul>
                </nav>
                <div className='font-bellefair text-7xl'>MOON</div>
                <p className='text-justify font-barlow text-light leading-8 mt-4 mb-12'>
                    See our planet as you’ve never seen it before.
                    A perfect relaxing trip away to help regain perspective and come back refreshed.
                    While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
                </p>
                <div className='h-[1px] bg-[#383B4B] mb-4' />
                <ul className='flex justify-between w-[100%]'>
                    <li className='font-bellefair text-2xl'>
                        <span className='block text-[#D0D6F9] text-sm mb-3 font-barlow'>AVG. DISTANCE</span>
                        384, 400KM
                    </li>
                    <li className='font-bellefair text-2xl'>
                        <span className='block text-[#D0D6F9] text-sm mb-3 font-barlow'>EST. TRAVEL TIME</span>
                        3 DAYS
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default Destinations
