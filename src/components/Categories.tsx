
'use client'
// import Slider from 'react-styled-carousel';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
  }
}

function Card({img, first, second}: {img:string, first:string, second:string}): JSX.Element {
  return(
    <div className='flex justify-center items-center w-44 gap-2 p-2 my-2 hover:bg-zinc-600 rounded-lg cursor-pointer'>
      <button 
        style={{ backgroundImage: `url(${img})` }}
        className='w-24 h-16 border-none text-zinc-200 text-xl font-bold bg-cover bg-center rounded cursor-pointer'
      >
      </button>
      <span className='text-sm text-zinc-200 font-semibold'>{first} <br/> {second}</span>
    </div>
  );
}

const Categories = () => {

  return (

      <Carousel 
        responsive={responsive} 
        className="w-[480px] md:w-[600px] lg:w-[1080px] mt-24 "
        arrows
        centerMode
        draggable
        focusOnSelect={false}
        itemClass="mx-2 md:mx-4 lg:mx-8"
        slidesToSlide={1}
      >
        <Card img='https://i.pinimg.com/236x/18/f3/64/18f364f68b308a5180ed8016dd4e70c2.jpg' first='2D' second='Art' />
        <Card img='https://i.pinimg.com/236x/9a/0a/96/9a0a963053dba3ad106df29cd23e7dab.jpg' first='3D' second='Art' />
        <Card img='https://i.pinimg.com/564x/31/c8/15/31c8150c2a16cb35572ff28433d50513.jpg' first='Characters' second='Design' />
        <Card img='https://i.pinimg.com/564x/06/f5/85/06f58589f51b2bb75db523d0b8363e43.jpg' first='Enviroment' second='Design' />
        <Card img='https://i.pinimg.com/564x/c0/44/dd/c044dd8b51765933a8c69d1d0d180366.jpg' first='Props' second='Design' />
        <Card img='https://i.pinimg.com/236x/ba/71/8f/ba718fba824778b4519ffdf675882daa.jpg' first='Concept' second='Art' />
        <Card img='https://i.pinimg.com/236x/f4/5a/ba/f45abad712cc7c5d1d98a5b7325e6946.jpg' first='Animation' second='Works' />
        <Card img='https://i.pinimg.com/236x/dd/d8/9c/ddd89cc9673861a5197c09523e3446cf.jpg' first='Game' second='Art' />
        <Card img='https://www.roadtovr.com/wp-content/uploads/2018/03/cardboard-race-quill-fujita.jpg' first='VR/AR' second='Art' />
      </Carousel>

  );
      // <Slider
      //   showArrows={true}
      //   showDots={false}
      //   cardsToShow={4}
      //   margin="48px 0px"
      //   className="w-full flex justify-center items-center bg-zinc-900 rounded [&>*:nth-child(2)]:ml-24 [&>*:nth-child(2)]:mr-16 "
      //   LeftArrow={<i className="fas fa-arrow-circle-left text-zinc-200 hover:text-blue-500 text-2xl font-bold cursor-pointer"></i>}
      //   RightArrow={<i className="fas fa-arrow-circle-right text-zinc-200 hover:text-blue-500 text-2xl font-bold cursor-pointer"></i>}
      // >
      //     <Card img='https://i.pinimg.com/236x/18/f3/64/18f364f68b308a5180ed8016dd4e70c2.jpg' first='2D' second='Art' />

      //     <Card img='https://i.pinimg.com/236x/9a/0a/96/9a0a963053dba3ad106df29cd23e7dab.jpg' first='3D' second='Art' />

      //     <Card img='https://i.pinimg.com/564x/31/c8/15/31c8150c2a16cb35572ff28433d50513.jpg' first='Characters' second='Design' />

      //     <Card img='https://i.pinimg.com/564x/06/f5/85/06f58589f51b2bb75db523d0b8363e43.jpg' first='Enviroment' second='Design' />

      //     <Card img='https://i.pinimg.com/564x/c0/44/dd/c044dd8b51765933a8c69d1d0d180366.jpg' first='Props' second='Design' />

      //     <Card img='https://i.pinimg.com/236x/ba/71/8f/ba718fba824778b4519ffdf675882daa.jpg' first='Concept' second='Art' />
          
      //     <Card img='https://i.pinimg.com/236x/f4/5a/ba/f45abad712cc7c5d1d98a5b7325e6946.jpg' first='Animation' second='Works' />

      //     <Card img='https://i.pinimg.com/236x/dd/d8/9c/ddd89cc9673861a5197c09523e3446cf.jpg' first='Game' second='Art' />

      //     <Card img='https://www.roadtovr.com/wp-content/uploads/2018/03/cardboard-race-quill-fujita.jpg' first='VR/AR' second='Art' />

      //     <Card img='https://i.pinimg.com/236x/4a/1c/74/4a1c74a3b606255b166b9cb3538eed47.jpg' first='Sketches' second='' />
      
      // </Slider>
}

export default Categories;