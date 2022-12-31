import douglas from '../images/crew/image-douglas-hurley.png'
function Destinations() {
    return (
        <div className="flex  p-4">
            <section className='w-[490px] ml-28 mt-4'>
                <h2 className='font-bellefair mt-12 opacity-50 mb-4 text-3xl'>COMMANDER</h2>
                <h2 className='font-bellefair text-5xl'>DOUGLAS HURLEY</h2>
                <p className='max-w-md font-barlow text-light text-lg leading-8 mt-8 mb-12'>
                    Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.
                </p>
                <ul className='flex mt-3 w-[100%]'>
                    <li className='w-4 h-4 m-2 rounded-full opacity-20 cursor-pointer hover:opacity-50 transition-all bg-white'>
                    </li>
                    <li className='w-4 h-4 m-2 rounded-full opacity-20 cursor-pointer hover:opacity-50 transition-all bg-white'>
                    </li>
                    <li className='w-4 h-4 m-2 rounded-full opacity-20 cursor-pointer hover:opacity-50 transition-all bg-white'>
                    </li>
                    <li className='w-4 h-4 m-2 rounded-full opacity-20 cursor-pointer hover:opacity-50 transition-all bg-white'>
                    </li>
                </ul>
            </section>
            <img className='ml-52 w-[400px] -mt-24' src={douglas} alt="Planet" />
        </div>
    )
}

export default Destinations
