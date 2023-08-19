
'use client'
import Radio from './Radio';

const images = [
  "https://wallpaperaccess.com/full/1625465.jpg",
  "https://i.pinimg.com/originals/db/1c/1a/db1c1ad07b38e8feab26ab31c2961b75.jpg",
  "https://i.pinimg.com/originals/f0/a2/2c/f0a22cde914baa3a566dd113da41d4ab.jpg",
  "https://hdwallpaperim.com/wp-content/uploads/2017/08/23/459518-illustration-Firewatch-video_games-748x468.jpg",
  "https://free4kwallpapers.com/uploads/originals/2020/02/01/astronaut-illustration--wallpaper.jpg",
  "https://c4.wallpaperflare.com/wallpaper/77/41/102/wildlife-landscape-illustration-wallpaper-preview.jpg",
  "https://www.teahub.io/photos/full/35-354722_illustration-wallpapers-widescreen.jpg",
  "https://images.hdqwalls.com/wallpapers/spiderman-illustration-4k-y3.jpg",
  "https://www.wallpapertip.com/wmimgs/92-929404_illustration-wallpaper.jpg",
  "https://3d-ace.com/wp-content/uploads/Vector-art.jpg",
  "https://c4.wallpaperflare.com/wallpaper/58/483/756/digital-digital-art-artwork-illustration-romain-trystram-hd-wallpaper-preview.jpg",
  "https://p4.wallpaperbetter.com/wallpaper/77/395/701/pixel-art-andlt-aestheticandgt-town-city-waneella-hd-wallpaper-preview.jpg",
  
  "https://wallpaperaccess.com/full/1625465.jpg",
  "https://i.pinimg.com/originals/db/1c/1a/db1c1ad07b38e8feab26ab31c2961b75.jpg",
  "https://i.pinimg.com/originals/f0/a2/2c/f0a22cde914baa3a566dd113da41d4ab.jpg",
  "https://hdwallpaperim.com/wp-content/uploads/2017/08/23/459518-illustration-Firewatch-video_games-748x468.jpg",
  "https://free4kwallpapers.com/uploads/originals/2020/02/01/astronaut-illustration--wallpaper.jpg",
  "https://www.teahub.io/photos/full/35-354722_illustration-wallpapers-widescreen.jpg",
  "https://c4.wallpaperflare.com/wallpaper/77/41/102/wildlife-landscape-illustration-wallpaper-preview.jpg",
  "https://images.hdqwalls.com/wallpapers/spiderman-illustration-4k-y3.jpg",
  "https://www.wallpapertip.com/wmimgs/92-929404_illustration-wallpaper.jpg",
  "https://3d-ace.com/wp-content/uploads/Vector-art.jpg",
  "https://c4.wallpaperflare.com/wallpaper/58/483/756/digital-digital-art-artwork-illustration-romain-trystram-hd-wallpaper-preview.jpg",
  "https://p4.wallpaperbetter.com/wallpaper/77/395/701/pixel-art-andlt-aestheticandgt-town-city-waneella-hd-wallpaper-preview.jpg",

  "https://wallpaperaccess.com/full/1625465.jpg",
  "https://i.pinimg.com/originals/db/1c/1a/db1c1ad07b38e8feab26ab31c2961b75.jpg",
  "https://i.pinimg.com/originals/f0/a2/2c/f0a22cde914baa3a566dd113da41d4ab.jpg",
  "https://hdwallpaperim.com/wp-content/uploads/2017/08/23/459518-illustration-Firewatch-video_games-748x468.jpg",
];

const Grid = () => {

  return (
    <div className="flex flex-col justify-center gap-2 p-6 pt-24" >

      <Radio label='opc' name='opc' opciones={['Random', 'Trending', 'Latest']} size='small' />

      <div className="w-full bg-zinc-900 grid gap-0 grid-cols-[repeat(auto-fill,minmax(256px,1fr))] auto-rows-[144px]
        [&>*:nth-child(1)]:row-span-2 [&>*:nth-child(1)]:col-span-2 [&>*:nth-child(5)]:row-span-3 [&>*:nth-child(18)]:col-span-3">

        {images.map((image, index) => {
          return(
            <picture key={index}>
              <img
                src={image}
                alt={`${index}`}
                className="w-full h-full object-cover contrast-75 hover:scale-105 hover:contrast-100 transition duration-200 ease-in-out"
              />
            </picture>
          )
        })}

      </div>
    
    </div>
  );
}

export default Grid;