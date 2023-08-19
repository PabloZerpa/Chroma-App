
'use client'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


function Slider() {

    const items = [
        <picture key={1} >
            <img src="https://www.cgspectrum.com/hubfs/what-is-2d-animation.webp" className='w-full h-[200px] md:h-[300px] lg:h-[400px]' />
        </picture>,
        <picture key={2}>
            <img src="https://preview.redd.it/yzwj1sur52t31.png?width=960&crop=smart&auto=webp&s=1c741d16482d3f20d79e884cf1a30ea39b84a2e0" className='w-full h-[200px] md:h-[400px]' />
        </picture>,
        <picture key={3}>
            <img src="https://i.pinimg.com/originals/5f/82/cd/5f82cdc9f24617b506536d20323c3de6.png" className='w-full h-[200px] md:h-[400px]' />
        </picture>,
    ];

    return (
        <div className="w-7/12 mt-20">

            <AliceCarousel 
                autoPlay={true}
                autoPlayInterval={2000}
                disableButtonsControls={true}
                infinite={true}
                items={items}
            />
            
        </div>
            
    )
}

export default Slider