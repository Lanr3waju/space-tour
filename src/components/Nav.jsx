
import logo from '../images/shared-assets/logo.svg';
import { Link } from "react-router-dom";

function Nav() {
    return (
        <header className='pl-14 pt-10 flex items-center'>
            <img className='w-12 h-12 mr-auto' src={logo} alt='logo' />
            <div className='h-[1px] bg-white w- lg:w-[35%] md:w-[10%] absolute ml-16 z-10'></div>
            <nav className='w-[830px] bg-[#ffffff0a] filter backdrop-blur-2xl font-barlow text-base flex justify-center'>
                <div className='flex w-3/4 justify-around'>
                    <Link to={'/home/1'} className='cursor-pointer pt-7 pb-7 hover:border-opacity-50 hover:border-white hover:transition-all transition-all border-opacity-0 b border-transparent border-b-2 '>
                        <span className='font-bold mr-3 ml-1'>00</span> HOME</Link>
                    <Link to={'/destination/1'} className='cursor-pointer pt-7 pb-7 hover:border-opacity-50 hover:border-white hover:transition-all transition-all border-opacity-0 b border-transparent border-b-2 '>
                        <span className='font-bold mr-3 ml-1'>01</span> DESTINATION</Link>
                    <Link to={'/crew/1'} className='cursor-pointer pt-7 pb-7 hover:border-opacity-50 hover:border-white hover:transition-all transition-all border-opacity-0 b border-transparent border-b-2 '>
                        <span className='font-bold mr-3 ml-1'>02</span> CREW</Link>
                    <Link to={'/technology/1'} className='cursor-pointer pt-7 pb-7 hover:border-opacity-50 hover:border-white hover:transition-all transition-all border-opacity-0 b border-transparent border-b-2 '>
                        <span className='font-bold mr-3 ml-1'>03</span> TECHNOLOGY</Link>
                </div>
            </nav>
        </header>
    )
}

export default Nav