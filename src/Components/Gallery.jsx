import React, { useEffect, useState } from "react";
import GalleryCard from "./GalleryCard";
// import { useParams } from "react-router";
import Chip from "./Chip";
import axios from "axios";
import Loader from "./Loader";

function Gallery() {
  const [products, setProducts] = useState([]);
  // const [product, setProduct] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [chosenCategory, setChosenCategory] = useState("All");


  useEffect(() => {
    const url = chosenCategory === "All" ? "https://dummyjson.com/products" : `https://dummyjson.com/products/category/${chosenCategory}`;
   

    axios.get(url)
    .then((res)=>{
      setProducts(res.data.products)
      setLoading(false)
    })
    
    .catch((error)=>{console.log(error)
        setLoading(false)
    })
      
  }, [chosenCategory]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <div className="flex w-10/12 sm:w-2/2 gap-3 m-auto flex-wrap">
        <Chip
          onclick={() => {
            setChosenCategory("All");
          }}
          isChosen={chosenCategory === "All"}
          title={"All"}
        />
        {categories.map(({ slug, name } = data) => {
          return (
            <Chip
              onclick={() => (setChosenCategory(slug))}
              key={slug}
              isChosen={chosenCategory === slug}
              title={name}
            />
          );
        })}
      </div>
      <div className="py-10 lg:w-10/12 sm:w-full m-auto flex gap-5 justify-between items-center">
        <div className="flex justify-center items-center gap-5">
          <p>Filter:</p>
          <select name="stockCheck" id="stockCheck" className="w-32">
            <option value="availability" disabled>
              Availability
            </option>
            <option value="stockIn">Stock In</option>
            <option value="stockOut">Stock Out</option>
          </select>
          <select name="price" id="price" className="w-32">
            <option value="price" disabled>
              price
            </option>
            <option value="100">$100</option>
            <option value="200">$200</option>
            <option value="500">$500</option>
            <option value="1000">$1000</option>
            <option value="10000">$10000</option>
          </select>
        </div>
        <div className="flex justify-center items-center gap-5">
          <p>Sort:</p>
          <select name="highlow" id="highlow" className="w-48">
            <option value="stockIn">High to Low</option>
            <option value="stockOut">Low to High</option>
          </select>
        </div>
      </div>
      <div className="lg:w-10/12 mx-auto my-5 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
       {loading ? (<Loader/>) : 
       ( products.map(
        ({ id, thumbnail, title, price, description, category }) => (
          <GalleryCard
            key={id}
            category={category}
            image={thumbnail}
            title={title}
            price={price}
            description={description}
          />
        )
      ))
       }
      </div>
    </div>
  );
}
export default Gallery;