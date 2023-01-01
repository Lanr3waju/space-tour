import { Link } from "react-router-dom";
import logo from '../../images/shared-assets/logo.svg';
import Links from './Links';

function Nav({ activeDestination }) {
    const navs = [
        { route: 'home', index: '00' },
        { route: 'destination', index: '01' },
        { route: 'crew', index: '02' },
        { route: 'technology', index: '03' }
    ]

    const LinksEl = navs.map(({ route, index }) => (
        <Links activeDestination={activeDestination} route={route} index={index} key={route} />
    ))

    return (
        <header className='pl-14 pt-10 flex items-center'>
            <Link to={'/'} className='cursor-pointer w-12 h-12 mr-auto'><img src={logo} alt='logo' /></Link>
            <div className='h-[1px] bg-white w- lg:w-[35%] md:w-[10%] absolute ml-16 z-10'></div>
            <nav className='w-[830px] bg-[#ffffff0a] filter backdrop-blur-2xl font-barlow text-base flex justify-center'>
                <div className='flex w-3/4 justify-around'>
                    {LinksEl}
                </div>
            </nav>
        </header>
    )
}

export default Nav