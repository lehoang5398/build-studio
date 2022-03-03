import React from 'react';
import { John, Carousel, Build, Buildo, MayTinh, Categories } from '../../assets/image';
function Model(props) {
  const { onClose, onView } = props
  const handleClose = () => {
    if (onClose) {
      onClose()
    }
  }
  const imageProducts = [{
    imageProduct: Categories,
  },
  {
    imageProduct: John,
  },
  {
    imageProduct: Categories,
  },
  {
    imageProduct: Categories,
  },
  ]
  return (
    <div className='popHolder'>
      <div className='popup-header'>
        <div className='close-Popup'>
          <button onClick={handleClose} className='btn-close' >close</button>
        </div>
      </div>
      <div className='body-templateDetailPage'>
        <div className='templateDetailPage'>
          <div className='container-page'>
            <div className='detailSlider'>
              <div className='slider-privew'>
                <img alt='' className='deviceFrame' src={John} />
              </div>
              <div className='info-block-wrapper'>
                <span className='show-count'>1/26</span>
                <span className='comment'>comments </span>
              </div>
              <div className='viewSelection'>
                <div className='viewSelection-phone'><img alt="" src={Carousel} /></div>
                <div className='viewSelection-pc'><img alt='' src={MayTinh} /> </div>
              </div>
              <ul className='slider-thumbnil'>
                {imageProducts.map((item) => (
                  <li className='slider-item'>
                    <div className='slider-image'><img className='' alt='' src={item.imageProduct} /></div>
                  </li>
                ))}
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
              <di className='hideOnMobile'>
                <div className='hide-title'>
                  <img className='hide-image' alt ='' src={onView.imageTitle} />
                  <h2 className='hide-title-item'>{onView.ProductName}</h2>
                </div>
                <div className='feauter'>
                  <span className='feauter-item'>{onView.features}</span>
                </div>
                <div className='blog-feauter'>
                  <span className='blog-list'>A mobile-first body scanning and measuring technology that provides accurate data-driven size and fit recommendations and photorealistic virtual try-on to help optimize processes, reduce returns while boosting sales, and increasing shopping confidence.
                  </span>
                </div>
                <div className='from-price'>
                  <span className='Price-item'>{onView.price}</span>
                </div>
                <div className='configurableSection'>
                  <div className='title-wrapper'>
                    {onView.platForm} AVAILABLE
                  </div>
                  <ul className='includeBox platforms'>
                    <li className='detailRow'>
                      <img className='imgSection' alt="" src={Carousel} />
                      <span className='textSection'>
                        iOS app for Apple (iPhones)
                      </span>
                    </li>
                    <li className='detailRow'>
                      <img className='imgSection' alt="" src={Carousel} />
                      <span className='textSection'>
                        Android app (for Android phones)
                      </span>
                    </li>
                    <li className='detailRow'>
                      <img className='imgSection' alt="" src={Carousel} />
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
              </di>
            </div>
          </div>
        </div>
      </div>
      <div className='sticky-Footer'>
        <div className='sticky-bottom-bar'>
          <button className='AddTemplateButton'>
            Add template
          </button>
        </div>
      </div>
    </div>
  );
}

export default Model;