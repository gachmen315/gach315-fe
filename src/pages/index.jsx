import Carousel from '@/components/Carousel';
import Slider from '@/components/Slider';
import useScrollTop from '@/hooks/useScrollTop';
import React, { useState } from 'react';
import './style.css'
import { Link } from 'react-router-dom';
import { PATH } from '@/config';

export const generateRandomProductData = (count) => {
  const names = [
    'Gạch Bông Lát Nền 60X60 VL75205 đá mờ',
    'Gạch Bông Lát Nền 80X80 VL75206 bóng kính',
    'Gạch Bông Lát Nền 30X30 VL75207 granite',
    'Gạch Bông Lát Nền 40X40 VL75208 sứ',
    'Gạch Bông Lát Nền 60X60 VL75209 nhám',
    'Gạch Bông Lát Nền 60X60 VL75209 nhám',
    'Gạch Bông Lát Nền 60X60 VL75209 nhám',
    'Gạch Bông Lát Nền 60X60 VL75209 nhám',
    'Gạch Bông Lát Nền 50X50 VL75210 gạch ốp saddadadasdasd',
    'Gạch Bông Lát Nền',
  ];

  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: names[index % names.length],
    price: `${Math.floor(Math.random() * 100000) + 200}đ`,
  }));
};

export const Home = () => {
  useScrollTop();

  const sliders = [
    '/img/banner_1.jpg',
    '/img/banner_2.jpg',
    '/img/banner_3.jpg',
  ]
 
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTitle, setActiveTitle] = useState('Gạch ốp lát');

  const tabs = [
    'Gạch ốp lát',
    'Thiết bị vệ sinh',
    'Tấm ốp nhựa'
  ];

  const clickProductSell = (index) => {
    setActiveIndex(index)
    setActiveTitle(tabs[index]);
  }

  const products = generateRandomProductData(10); 

  return (
    <>
      {/* SLIDERS */}
      <section style={{ marginTop: '-100px' }}>
        <Carousel autoSlide={true}>
          {sliders.map((s, index) => (
            <img key={index} src={s} alt={s} className="w-full" />
          ))}
        </Carousel>
      </section>
      {/* TOP SELLERS */}
      <section className="py-12">
        <div className="container">
          <div className="flex">
            <h2 className="mb-4 inline-block font-bold text-3xl uppercase font-oswald relative pb-2 product-h2-custom">
              Sản phẩm giảm giá
            </h2>
            <div className='h-auto flex justify-end flex-1 overflow-hidden'>
              <div className="relative max-w-full">
                <ul className='flex max-w-full whitespace-nowrap p-0 m-0 text-right pb-2 overflow-x-auto overflow-y-hidden list-none'>
                  {['Gạch ốp lát', 'Thiết bị vệ sinh', 'Tấm ốp nhựa'].map((item, index) => (
                    <li
                      key={index}
                      className={`relative font-medium bg-gray-200 px-5 py-1.5 transition-all duration-300 tab-cate ${activeIndex === index ? 'li-current' : ''}`}
                      onClick={() => clickProductSell(index)}
                    >
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className='mt-4 p-4 bg-gray-100 border border-gray-300 rounded'>
            <h2 className='text-lg font-semibold'>{activeTitle}</h2>
          </div>
          <div className="block-product-sell">
            <div className="product-row row">
              {products.map((product) => (
                <div key={product.id} className="product-card">
                  <Link className="navbar-brand" to={`/loa-thung-klipsch-r-8sw-subwoofer-150w-hang-chinh-hang`}>
                    <img
                      style={{ height: 'auto' }}
                      srcSet="/img/Gach-bong-lat-nen-2.jpg"
                      alt={product.name}
                    />
                  </Link>
                  <div className="product-card-content">
                    <h3 className="product-card-title">{product.name}</h3>
                    <div className='price-box'>
                      <span className='price'>
                        80,000đ
                      </span>
                      <span className='compare-price'>
                        {product.price}
                      </span>
                    </div>
                    <div className='product-button'>
                      <Link to={PATH.contact} className='btn-sell-contact'>
                        Liên hệ
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* REVIEWS */}
      <section className="py-12">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6 text-center">
              {/* Preheading */}
              <h6 className="heading-xxs mb-3 text-gray-400">
                What buyers say
              </h6>
              {/* Heading */}
              <h2 className="mb-10">Latest buyers Reviews</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Slider
                className="select-none !pb-20"
                slidesPerView={1}
                spaceBetween={32}
                loop
                grabCursor
                speed={600}
                pagination={{ clickable: true }}
                breakpoints={{
                  //min-width
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
              >
                <div className="card-lg card border">
                  <div className="card-body">
                    <div className="row align-items-center mb-6">
                      <div className="col-4">
                        <img
                          src="/img/products/product-13.jpg"
                          alt="..."
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-8 ml-n2">
                        <a className="font-size-xs text-muted" href="shop.html">
                          Shoes
                        </a>
                        <a
                          className="d-block font-weight-bold text-body"
                          href="product.html"
                        >
                          Low top Sneakers
                        </a>
                        <div
                          className="rating font-size-xxs text-warning"
                          data-value={3}
                        >
                          <div className="rating-item">
                            <i className="fas fa-star" />
                          </div>
                          <div className="rating-item">
                            <i className="fas fa-star" />
                          </div>
                          <div className="rating-item">
                            <i className="fas fa-star" />
                          </div>
                          <div className="rating-item">
                            <i className="fas fa-star" />
                          </div>
                          <div className="rating-item">
                            <i className="fas fa-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <blockquote className="mb-0">
                      <p className="text-muted">
                        From creepeth said moved given divide make multiply of
                        him shall itself also above second doesn't unto created
                        saying land herb sea midst night wherein.
                      </p>
                      <footer className="font-size-xs text-muted">
                        Logan Edwards,{' '}
                        <time dateTime="2019-06-01">01 Jun 2019</time>
                      </footer>
                    </blockquote>
                  </div>
                </div>
                <div className="card-lg card border">
                  <div className="card-body">
                    <div className="row align-items-center mb-6">
                      <div className="col-4">
                        <img
                          src="/img/products/product-14.jpg"
                          alt="..."
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-8 ml-n2">
                        <a className="font-size-xs text-muted" href="shop.html">
                          Dresses
                        </a>
                        <a
                          className="d-block font-weight-bold text-body"
                          href="product.html"
                        >
                          Cotton print Dress
                        </a>
                        <div
                          className="rating font-size-xxs text-warning"
                          data-value={5}
                        >
                          <div className="rating-item">
                            <i className="fas fa-star" />
                          </div>
                          <div className="rating-item">
                            <i className="fas fa-star" />
                          </div>
                          <div className="rating-item">
                            <i className="fas fa-star" />
                          </div>
                          <div className="rating-item">
                            <i className="fas fa-star" />
                          </div>
                          <div className="rating-item">
                            <i className="fas fa-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <blockquote className="mb-0">
                      <p className="text-muted">
                        God every fill great replenish darkness unto. Very open.
                        Likeness their that light. Given under image to. Subdue
                        of shall cattle day fish form saw spirit and given
                        stars, us you whales may, land, saw fill unto.
                      </p>
                      <footer className="font-size-xs text-muted">
                        Jane Jefferson,{' '}
                        <time dateTime="2019-05-29">29 May 2019</time>
                      </footer>
                    </blockquote>
                  </div>
                </div>
                <div className="card-lg card border">
                  <div className="card-body">
                    <div className="row align-items-center mb-6">
                      <div className="col-4">
                        <img
                          src="/img/products/product-15.jpg"
                          alt="..."
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-8 ml-n2">
                        <a className="font-size-xs text-muted" href="shop.html">
                          T-shirts
                        </a>
                        <a
                          className="d-block font-weight-bold text-body"
                          href="product.html"
                        >
                          Oversized print T-shirt
                        </a>
                        <div
                          className="rating font-size-xxs text-warning"
                          data-value={4}
                        >
                          <div className="rating-item">
                            <i className="fas fa-star" />
                          </div>
                          <div className="rating-item">
                            <i className="fas fa-star" />
                          </div>
                          <div className="rating-item">
                            <i className="fas fa-star" />
                          </div>
                          <div className="rating-item">
                            <i className="fas fa-star" />
                          </div>
                          <div className="rating-item">
                            <i className="fas fa-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <blockquote className="mb-0">
                      <p className="text-muted">
                        Fill his waters wherein signs likeness waters. Second
                        light gathered appear sixth fourth, seasons behold
                        creeping female.
                      </p>
                      <footer className="font-size-xs text-muted">
                        Darrell Baker,{' '}
                        <time dateTime="2019-05-18">18 May 2019</time>
                      </footer>
                    </blockquote>
                  </div>
                </div>
                <div className="card-lg card border">
                  <div className="card-body">
                    <div className="row align-items-center mb-6">
                      <div className="col-4">
                        <img
                          src="/img/products/product-10.jpg"
                          alt="..."
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-8 ml-n2">
                        <a className="font-size-xs text-muted" href="shop.html">
                          Bags &amp; Accessories
                        </a>
                        <a
                          className="d-block font-weight-bold text-body"
                          href="product.html"
                        >
                          Suede cross body Bag
                        </a>
                        <div
                          className="rating font-size-xxs text-warning"
                          data-value={4}
                        >
                          <div className="rating-item">
                            <i className="fas fa-star" />
                          </div>
                          <div className="rating-item">
                            <i className="fas fa-star" />
                          </div>
                          <div className="rating-item">
                            <i className="fas fa-star" />
                          </div>
                          <div className="rating-item">
                            <i className="fas fa-star" />
                          </div>
                          <div className="rating-item">
                            <i className="fas fa-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <blockquote className="mb-0">
                      <p className="text-muted">
                        God every fill great replenish darkness unto. Very open.
                        Likeness their that light. Given under image to. Subdue
                        of shall cattle day fish form saw spirit and given
                        stars.
                      </p>
                      <footer className="font-size-xs text-muted">
                        Pavel Doe,{' '}
                        <time dateTime="2019-05-29">29 May 2019</time>
                      </footer>
                    </blockquote>
                  </div>
                </div>
                <div className="card-lg card border">
                  <div className="card-body">
                    <div className="row align-items-center mb-6">
                      <div className="col-4">
                        <img
                          src="/img/products/product-13.jpg"
                          alt="..."
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-8 ml-n2">
                        <a className="font-size-xs text-muted" href="shop.html">
                          Shoes
                        </a>
                        <a
                          className="d-block font-weight-bold text-body"
                          href="product.html"
                        >
                          Low top Sneakers
                        </a>
                        <div
                          className="rating font-size-xxs text-warning"
                          data-value={3}
                        >
                          <div className="rating-item">
                            <i className="fas fa-star" />
                          </div>
                          <div className="rating-item">
                            <i className="fas fa-star" />
                          </div>
                          <div className="rating-item">
                            <i className="fas fa-star" />
                          </div>
                          <div className="rating-item">
                            <i className="fas fa-star" />
                          </div>
                          <div className="rating-item">
                            <i className="fas fa-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <blockquote className="mb-0">
                      <p className="text-muted">
                        From creepeth said moved given divide make multiply of
                        him shall itself also above second doesn't unto created
                        saying land herb sea midst night wherein.
                      </p>
                      <footer className="font-size-xs text-muted">
                        Logan Edwards,{' '}
                        <time dateTime="2019-06-01">01 Jun 2019</time>
                      </footer>
                    </blockquote>
                  </div>
                </div>
                <div className="card-lg card border">
                  <div className="card-body">
                    <div className="row align-items-center mb-6">
                      <div className="col-4">
                        <img
                          src="/img/products/product-14.jpg"
                          alt="..."
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-8 ml-n2">
                        <a className="font-size-xs text-muted" href="shop.html">
                          Dresses
                        </a>
                        <a
                          className="d-block font-weight-bold text-body"
                          href="product.html"
                        >
                          Cotton print Dress
                        </a>
                        <div
                          className="rating font-size-xxs text-warning"
                          data-value={5}
                        >
                          <div className="rating-item">
                            <i className="fas fa-star" />
                          </div>
                          <div className="rating-item">
                            <i className="fas fa-star" />
                          </div>
                          <div className="rating-item">
                            <i className="fas fa-star" />
                          </div>
                          <div className="rating-item">
                            <i className="fas fa-star" />
                          </div>
                          <div className="rating-item">
                            <i className="fas fa-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <blockquote className="mb-0">
                      <p className="text-muted">
                        God every fill great replenish darkness unto. Very open.
                        Likeness their that light. Given under image to. Subdue
                        of shall cattle day fish form saw spirit and given
                        stars, us you whales may, land, saw fill unto.
                      </p>
                      <footer className="font-size-xs text-muted">
                        Jane Jefferson,{' '}
                        <time dateTime="2019-05-29">29 May 2019</time>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      {/* BRANDS */}
    </>
  );
};

export default Home;
