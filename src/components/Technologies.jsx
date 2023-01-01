import TechnologySpace from './TechnologySpace';

function Technologies({ activeTech, setActiveTech, image, name, description }) {
    const tech = [{ index: 1, terminology: 'launch vehicle' }, { index: 2, terminology: 'spaceport' }, { index: 3, terminology: 'space capsule' }];
    const technologySpaceEl = tech.map(({ index, terminology }) => (
        <TechnologySpace index={index} terminology={terminology} key={terminology} activeTech={activeTech} setActiveTech={setActiveTech} />
    ))
    return (
        <div className="flex  p-4">
            <nav>
                <div className='ml-28 mt-16'>
                    {technologySpaceEl}
                </div>
            </nav>
            <section className='w-[500px] ml-28 mt-16'>
                <h3 className='font-barlow opacity-50 mb-4 t text-base text-light tracking-[2.7px]'>THE TERMINOLOGY...</h3>
                <h2 className='font-bellefair text-5xl uppercase'>{name}</h2>
                <p className='max-w-md font-barlow text-light text-lg leading-8 mt-8 mb-12'>
                    {description}
                </p>
            </section>
            <img className='ml-32 w-[400px] -m-4 h-[450px] -mt-16' src={image} alt="Planet" />
        </div>
    )
}

export default Technologies
