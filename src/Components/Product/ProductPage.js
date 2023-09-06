import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./ProductPage.css";
import CartContext from "../Store/CartContext";

const ProductPage = () => {
  const productImages = [
    {
      url: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      url: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      url: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      url: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const [fullImage, setFullImage] = useState(productImages[0].url);
  const { selectedItem } = useContext(CartContext);

  const product = {
    ...selectedItem[0],
    reviews: [
      { author: "Sam", content: "Lorem ipsum carrots enhanced rebates." },
    ],
  };

  console.log(product);
  const changeImageHandler = (imageURL) => {
    setFullImage(imageURL);
  };
  // const [productImages, setProductImages] = useState([]);

  // useEffect(() => {
  //   // Get the product images from the API.
  //   fetch(`https://api.example.com/products/${product.id}/images`)
  //     .then(response => response.json())
  //     .then(images => setProductImages(images));
  // }, [product.id]);

  return (
    <div className="product-page">
      <div className="product-images">
        <ul className="images-list">
          {productImages.map((image, index) => (
            <li>
              <img
                key={index}
                src={image.url}
                alt={image.alt}
                onClick={() => changeImageHandler(image.url)}
              />
            </li>
          ))}
        </ul>
        <div className="full-image">
          <img src={fullImage} alt="" />
        </div>
      </div>
      <div className="product-details">
        <h1 className="product-name">{product.title} </h1>
        <p className="product-description">
          {product.description} Lorem ipsum carrots enhanced rebates. Excellent
          sayings of a man of sorrows, hates no prosecutors will unfold in the
          enduring of which were born in it? Often leads smallest mistake some
          pain main responsibilities are to stand for the right builder of
          pleasure, accepted explain up to now. , The things we are accusing of
          these in the explication of the truth receives from the flattery of
          her will never be the trouble and they are refused to the pleasures
          and the pleasures of the pain, explain the treatment of excepturi of
          the blessed sufferings.
        </p>
        <div className="product-reviews">
          <h2>Reviews</h2>
          {product.reviews.map((review, index) => (
            <div key={index}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </div>
          ))}
        </div>
        <Link to="/products">Back to Products</Link>
      </div>
    </div>
  );
};

export default ProductPage;
