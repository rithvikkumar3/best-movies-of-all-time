import React from 'react';

function Banner() {
  return (
    <div className="h-[60vh] md:h-[75vh] bg-cover bg-center flex items-end" style={{backgroundImage: `url(https://r4.wallpaperflare.com/wallpaper/887/602/431/interstellar-satellite-wallpaper-7201e2301d060edb9a8842d5b028c962.jpg)`}}>
      <div className="text-white text-3xl md:text-5xl text-center w-full bg-gray-900 bg-opacity-70 p-4">
        <h1 className="font-bold">Interstellar</h1>
        <p className="text-lg mt-2">
          Mankind was born on Earth. It was never meant to die here. The end of Earth will not be the end of us.
        </p>
      </div>
    </div>
  );
}

export default Banner;
