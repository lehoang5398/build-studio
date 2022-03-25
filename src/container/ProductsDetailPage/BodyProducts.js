import React, { useState } from 'react';
import { Carousel, Build, Buildo, MayTinh, Categories, VienImg } from '../../assets/image';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

BodyProducts.propTypes = {
  products: PropTypes.object.isRequired,
  imageProducts: PropTypes.array
};

function BodyProducts({ products, imageProducts }) {
  const [imageProduct, setImageProduct] = useState({});

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 4,
    slidesToShow: 4
  };

  const onShowImageProducts = (item) => {
    const NewImageProduct = {
      id: item.id,
      image: item.imageProduct,
    }
    setImageProduct(NewImageProduct);
  }

  const srcImage = imageProduct.image ?? Categories;

  return (
    <div className='body-templateDetailPage'>
      <div className='templateDetailPage'>
        <div className='container-page'>
          <div className='detailSlider'>
            <div className='slider-privew'>
              <img className='deviceFrame-vien' alt='' src={VienImg} />
              <img alt='' className='deviceFrame' src={srcImage} />
            </div>
            <div className='info-block-wrapper'>
              <span className='show-count'>1/26</span>
              <span className='comment'>comments </span>
            </div>
            <div className='viewSelection'>
              <div className='viewSelection-phone'><img alt='' src={Carousel} /></div>
              <div className='viewSelection-pc'><img alt='' src={MayTinh} /> </div>
            </div>
            <ul className='slider-thumbnil' >
              <Slider {...settings}>
                {imageProducts.map((item, index) => {
                  return (
                    <li key={index} onClick={() => onShowImageProducts(item)} className='slider-item'>
                      <div className='slider-image'><img className='' alt='' src={item.imageProduct} /></div>
                    </li>
                  )
                })}
              </Slider>
            </ul>
            <div className='slider-info'>
              <p>These designs are representative of the features included in the app.
              </p>
              <p>
                They do not show your finished product. You can customise how everything looks with our network of designers.
              </p>
            </div>
          </div>
          <div className='detailContent'>
            <div className='hideOnMobile'>
              <div className='hide-title'>
                <img className='hide-image' alt='' src={products.imageTitle} />
                <h2 className='hide-title-item'>{products.ProductName}</h2>
              </div>
              <div className='feauter'>
                <span className='feauter-item'>{products.features}</span>
              </div>
              <div className='blog-feauter'>
                <span className='blog-list'>A mobile-first body scanning and measuring technology that provides accurate data-driven size and fit recommendations and photorealistic virtual try-on to help optimize processes, reduce returns while boosting sales, and increasing shopping confidence.
                </span>
              </div>
              <div className='from-price'>
                <span className='Price-item'>{products.price}</span>
              </div>
              <div className='configurableSection'>
                <div className='title-wrapper'>
                  {products.platForm} AVAILABLE
                </div>
                <ul className='includeBox platforms'>
                  <li className='detailRow'>
                    <img className='imgSection' alt='' src={Carousel} />
                    <span className='textSection'>
                      iOS app for Apple (iPhones)
                    </span>
                  </li>
                  <li className='detailRow'>
                    <img className='imgSection' alt='' src={Carousel} />
                    <span className='textSection'>
                      Android app (for Android phones)
                    </span>
                  </li>
                  <li className='detailRow'>
                    <img className='imgSection' alt='' src={Carousel} />
                    <span className='textSection'>
                      Progressive Web App for desktop and mobile
                    </span>
                  </li>
                </ul>
              </div>
              <div className='includeBox'>
                <div className='ngcontent-serverapp'>
                  <span className='builder-wrapper'>BUILDER CARE</span>
                  <span className='blueTag graytxt'>Available from $250.68 /month</span>
                </div>
                <div className='detailRow'>
                  <div className='imgSection'>
                    <img alt='' src={Build} />
                  </div>
                  <span className='textSection'>Our aftercare warantee updates, upgrades and keeps your app running smoothly. Learn more
                  </span>
                </div>
              </div>
              <div className='includeBox'>
                <div className='ngcontent-serverapp'>
                  <span className='builder-wrapper'>BUILDER CLOUD</span>
                  <span className='blueTag graytxt'>Available from $250.68 /month</span>
                </div>
                <div className='detailRow'>
                  <div className='imgSection'>
                    <img alt='' src={Buildo} />
                  </div>
                  <span className='textSection'>
                    Cloud to help you run your app is included in this price. It’s topped up each month. Learn more
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodyProducts;