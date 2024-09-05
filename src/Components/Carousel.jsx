import { Carousel as CarousalBox } from "flowbite-react";

function Carousel() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 ">
      <CarousalBox onSlideChange={(index) => ('onSlideChange()', index)}>
        <div className="flex h-full items-center justify-center dark:bg-gray-700 dark:text-white">
          <div className="flex  w-full h-full"> 
          <img className="h-full" src="https://png.pngtree.com/thumb_back/fh260/background/20230617/pngtree-visualizing-e-commerce-in-benin-through-3d-rendering-for-social-media-image_3640688.jpg" alt="Mastang Car" />
          <div className="bg-green-500 w-full p-10">
            <h1 className="text-7xl text-white">ECOMMERCE</h1>
            <h1 className="text-7xl text-amber-950 font-bold">$299</h1>
            <h1 className="text-5xl text-white">Everything in single place</h1>

          </div>
          </div>
        </div>
        <div className="flex h-full items-center justify-center dark:bg-gray-700 dark:text-white">
        <div className="flex w-full h-full">
          <img className="h-full" src="https://png.pngtree.com/thumb_back/fh260/background/20230703/pngtree-d-smartphone-with-gifts-and-discount-percentage-e-commerce-web-banner-image_3753281.jpg" alt="Mastang Car" />
          <div className="bg-green-500 w-full p-10">
            <h1 className="text-7xl text-white">E-STORE</h1>
            <h1 className="text-7xl text-amber-950 font-bold">$10 to $99</h1>
            <h1 className="text-5xl text-white">Groccery</h1>

          </div>
          </div>
        </div>
        <div className="flex h-full items-center justify-center dark:bg-gray-700 dark:text-white">
        <div className="flex w-full h-full">
          <img className="h-full" src="https://png.pngtree.com/thumb_back/fh260/background/20230617/pngtree-e-commerce-in-india-3d-rendering-for-social-media-and-websites-image_3637552.jpg" alt="Mastang Car" />
          <div className="bg-green-500 w-full p-10">
            <h1 className="text-7xl text-white">FASHION</h1>
            <h1 className="text-7xl text-amber-950 font-bold">$59</h1>
            <h1 className="text-5xl text-white">All Categories</h1>

          </div>
          </div>
        </div>
      </CarousalBox>
    </div>
  );
}

export default Carousel