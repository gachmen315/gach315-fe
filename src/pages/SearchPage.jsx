import React, { useEffect, useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import { PATH, PRODUCT_API_HHB } from '@/config';
import './product/style.css';

const useSearchKeyword = () => {
  const location = useLocation();

  // Lấy keyword từ query string
  const searchParams = new URLSearchParams(location.search);
  const keyword = searchParams.get('keyword');

  // Giải mã các ký tự mã hóa (nếu có)
  return keyword ? decodeURIComponent(keyword) : '';
};

const SearchPage = () => {
  const keyword = useSearchKeyword()
  const [dataSearch, setDataSearch] = useState('')

  const param = {
    keyword: keyword,
    pageIndex: 1,
    pageSize: 20,
    code: null,
    type: 0,
    order: 'id',
    sort: 'desc'
  }

  async function fetchSearchList() {
    try {
      const response = await axios.post(`${PRODUCT_API_HHB}/web-get-product-list`, param);
      setDataSearch(response?.data?.data?.data)
    } catch (error) {
      console.error('There has been a problem with your axios request:', error);
    }
  }

  useEffect(() => {
    fetchSearchList()
  }, [keyword])

  return (
    <>
      {/* Breadcrumb */}
      <nav className="py-3 bg-[#f5f5f5] mb-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Breadcrumb>
                <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
                <Breadcrumb.Item>Tìm kiếm</Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
        </div>
      </nav>

      <div className='text-center text-3xl mb-3'>
        Kết quả tìm kiếm: {keyword}
      </div>

      <div className="layout-collection">
        <div className="container">
          <div className='row'>
          <div className={`products-view my-5 col-sm-12 col-12 col-md-12 ${dataSearch?.length === 0 ? 'no-products' : ''}`}>
                {dataSearch && dataSearch.length > 0 ? (
                  <div className="product-grid">
                    {dataSearch.map((product) => (
                      <div key={product.id} className="product-detail">
                        <div className="products-view-card">
                          <Link className="navbar-brand" to={`${PATH.productDetail.replace(':slug', product.code)}`}>
                            <img style={{ height: 'auto' }} srcSet={product.images[0].base_url} alt={product.name} />
                          </Link>
                          <div className="product-card-content">
                            <h3 className="product-card-title">{product.name}</h3>
                            <div className="product-box">
                              <span className="product-box-price">
                                {Number(product.discountedPrice).toLocaleString('vi-VN')}đ
                              </span>
                              <span className="product-compare-price">{Number(product.price).toLocaleString('vi-VN')}đ</span>
                            </div>
                            <div className="product-button">
                              <Link to={PATH.contact} className="btn-product-contact">
                                Liên hệ
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="no-products-message">
                    <img src="/img/not-found.png" alt="" />
                  </div>
                )}
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
