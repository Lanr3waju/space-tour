
import logo from '../images/shared-assets/logo.svg';

function Nav() {
    return (
        <header className='pl-14 pt-10 flex items-center'>
            <img className='w-12 h-12 mr-auto' src={logo} alt='logo' />
            <div className='lg:h-[1px] lg:bg-white w- w-[473px] absolute ml-16 z-10'></div>
            <nav className='w-[830px] bg-[#ffffff0a] pt-7 pb-7 filter backdrop-blur-2xl font-barlow text-base flex justify-center'>
                <ul className='flex w-3/4 justify-around'>
                    <li className='cursor-pointer'><span className='font-bold mr-3 ml-1'>00</span> HOME</li>
                    <li className='cursor-pointer'><span className='font-bold mr-3 ml-1'>01</span> DESTINATION</li>
                    <li className='cursor-pointer'><span className='font-bold mr-3 ml-1'>02</span> CREW</li>
                    <li className='cursor-pointer'><span className='font-bold mr-3 ml-1'>03</span> TECHNOLOGY</li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav