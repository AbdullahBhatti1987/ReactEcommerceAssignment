import { SlLike } from "react-icons/sl";
import { BiSolidLike } from "react-icons/bi";
import { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function GalleryCard({ image, title, price, description, category, id }) {
  const [like, setLike] = useState(false);

  return (
    <Link to={`/products/${id}`} className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden p-4 hover:shadow-xl flex flex-col justify-between">
      <div >
        <img
          className="w-full h-48 object-fit"
          src={image}
          alt="Product Image"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold capitalize text-gray-500">
            {category}
          </h2>
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <p className="text-2xl font-bold text-blue-500 mt-2">${price}</p>
          <p className="text-gray-500 mt-2 line-clamp-2">{description}</p>
          <div className="flex justify-between items-center mt-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Add to Cart
            </button>
            <button
              onClick={() => {}}
              className="text-gray-600 hover:text-blue-600"
            >
              {like ? (
                <BiSolidLike id="disLike" className="text-2xl color-blue-600" />
              ) : (
                <SlLike id="like" className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default GalleryCard;
