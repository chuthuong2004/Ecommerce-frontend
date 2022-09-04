import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Product.module.scss';
import { v4 as uuidv4 } from 'uuid';

import { ArrowDownIcon, HeartIcon, NextArrowIcon, PrevArrowIcon, SizeChartIcon } from '../../components/Icons';
import Button from '../../components/Button';
import './ProductImageColor.scss';
import { trademarkProducts } from '../Home/components/Men/dataMen';
import SlideProduct from '../../components/SlideProduct';
import config from '../../config';
import TabContent from '../../components/TabContent';
import productApi from '../../api/productApi';
const cx = classNames.bind(styles);
const product = {
    name: 'Giày mule Playball Origin',
    colors: [
        {
            _id: uuidv4(),
            imgSmall:
                'https://product.hstatic.net/1000284478/product/50l_32shs1111_1_45793aa1b8064f5f9221d9847dc3f662_small.jpg',
            imgMedium:
                'https://product.hstatic.net/1000284478/product/50l_32shs1111_1_45793aa1b8064f5f9221d9847dc3f662_medium.jpg',
            images: [
                'https://product.hstatic.net/1000284478/product/50l_32shs1111_1_45793aa1b8064f5f9221d9847dc3f662_large.jpg',
                'https://product.hstatic.net/1000284478/product/50l_32shs1111_2_e9ea98f1ae1c4934be18215024c971af_large.jpg',
                'https://product.hstatic.net/1000284478/product/50l_32shs1111_3_9ca393cff546416999fb7b848b984991_large.jpg',
                'https://product.hstatic.net/1000284478/product/50l_32shs1111_4_2e23daa91dd14aa08fca172802b9f68a_large.jpg',
                'https://product.hstatic.net/1000284478/product/50l_32shs1111_5_21ebee2e86934d928ab85f6a0ec1ff86_large.jpg',
                'https://product.hstatic.net/1000284478/product/50l_32shs1111_6_0d82788181b549e890396bbe53acdaec_large.jpg',
            ],
            sizes: [
                {
                    _id: uuidv4(),
                    title: 'XS',
                    quantity: 2,
                },
                {
                    _id: uuidv4(),
                    title: 'S',
                    quantity: 0,
                },
                {
                    _id: uuidv4(),
                    title: 'M',
                    quantity: 5,
                },
                {
                    _id: uuidv4(),
                    title: 'L',
                    quantity: 1,
                },
                {
                    _id: uuidv4(),
                    title: 'XL',
                    quantity: 0,
                },
            ],
        },
        {
            _id: uuidv4(),
            imgSmall:
                'https://product.hstatic.net/1000284478/product/07p_32shs1111_1_990ee6f984a546beade532802838971b_small.jpg',
            imgMedium:
                'https://product.hstatic.net/1000284478/product/07p_32shs1111_1_990ee6f984a546beade532802838971b_medium.jpg',
            images: [
                'https://product.hstatic.net/1000284478/product/07p_32shs1111_1_990ee6f984a546beade532802838971b_large.jpg',
                'https://product.hstatic.net/1000284478/product/07p_32shs1111_2_b9e6b8e7ae484036bd682cdb9a826933_large.jpg',
            ],
        },
        {
            _id: uuidv4(),
            imgSmall:
                'https://product.hstatic.net/1000284478/product/50w_32shs1111_1_a2d9fcec70054bebb50cdb9f99b05b09_small.jpg',
            imgMedium:
                'https://product.hstatic.net/1000284478/product/50w_32shs1111_1_a2d9fcec70054bebb50cdb9f99b05b09_medium.jpg',
            images: [
                'https://product.hstatic.net/1000284478/product/50w_32shs1111_1_a2d9fcec70054bebb50cdb9f99b05b09_large.jpg',
                'https://product.hstatic.net/1000284478/product/50w_32shs1111_2_55b6165b13f24835bd09adbd4f23fc3b_large.jpg',
            ],
        },
    ],
    price: 1690000,
    desc: 'Chất liệu: 100% Cotton. Lớp lót: 100% Cotton. Kiểu dáng bít mũi và hở gót thời trang Thiết kế lấy cảm hứng từ hiệp hội bóng chày MLB Chi tiết logo bóng chày được in nổi bật Đế cao su chống trơn trượt Gam màu hiện đại dễ dàng phối với nhiều trang phục và phụ kiện Xuất xứ thương hiệu: Hàn quốc',
    preservation: `Tránh vật sắc nhọn và nơi có nhiệt độ cao
    Tránh tiếp xúc với môi trường xăng dầu, kiềm
    Không phơi sản phẩm nơi ánh nắng gắt
    Để nơi khô thoáng khi không sử dụng`,
    policy: `QUY ĐỊNH ĐỔI TRẢ HÀNG TẠI  MAISONONLINE

    Sản phẩm áp dụng: Tất cả sản phẩm được giao dịch trên MaisonOnline, có chương trình khuyến mãi không quá 30%.
    Sản phẩm không áp dụng: 
     - Đồ lót, đồ bơi
    
     - Nước hoa
    
     - Phụ kiện: Vớ, Khăn, Trang sức, Móc khóa, Ốp lưng, Shoecare, Khẩu trang,... 
    
     - Không áp dụng cho các sản phẩm mua trực tiếp tại hệ thống cửa hàng của Maison.
    
    Đối tượng khách hàng: Tất cả khách hàng sử dụng dịch vụ tại www.maisononline.vn
    Thời gian đổi trả hàng:
     - Đổi hàng: Trong vòng 14 ngày kể từ ngày khách hàng nhận được sản phẩm.
    
     - Trả hàng: Trong vòng 03 ngày kể từ ngày khách hàng nhận được sản phẩm.
    
    Tham khảo thêm thông tin tại Chính sách đổi trả hàng`,
    trademarkDesc:
        'MLB là tên viết tắt của Major League Baseball – tổ chức thể thao chuyên nghiệp của môn bóng chày. Thương hiệu MLB thuộc tập đoàn F&F đã mở cửa hàng MLB Korea đầu tiên vào năm 1997. Thương hiệu chuyên thiết kế và sản xuất trang phục, giày & phụ kiện cho nam, nữ lấy cảm hứng từ logo của những đội bóng chày danh tiếng đem đến những bộ sưu tập kết hợp giữa tiện ích và thời trang. Cho đến nay, MLB đã có 250 cửa hàng tại khắp khu vực Châu Á.',
    discount: 20,
    _id: uuidv4(),
    trademark: 'mlb',
};
const navItems = [
    {
        _id: uuidv4(),
        title: 'Chi tiết sản phẩm',
        content: product.desc,
    },
    {
        _id: uuidv4(),
        title: 'Thông tin bảo quản',
        content: product.preservation,
    },
    {
        _id: uuidv4(),
        title: 'Giao hàng và đổi trả',
        content: product.policy,
    },
    {
        _id: uuidv4(),
        title: 'Về thương hiệu',
        content: product.trademarkDesc,
    },
];
const Product = () => {
    const [defaultColor, setDefaultColor] = useState(product.colors[0]);
    const NextArrow = (props) => {
        const { style, onClick } = props;
        return (
            <div
                className={`btn-arrow btn-next btn-arrow-product-slide`}
                style={{
                    ...style,
                }}
                onClick={onClick}
            >
                <NextArrowIcon />
            </div>
        );
    };
    const PrevArrow = (props) => {
        const { style, onClick } = props;
        return (
            <div
                className={`btn-arrow btn-prev btn-arrow-product-slide`}
                style={{
                    ...style,
                }}
                onClick={onClick}
            >
                <PrevArrowIcon />
            </div>
        );
    };
    let settings = {
        dots: false,
        infinite: defaultColor.images.length > 6,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 1000,
        draggable: true,
        focusOnSelect: false,
        nextArrow: defaultColor.images.length > 6 ? <NextArrow /> : null,
        prevArrow: defaultColor.images.length > 6 ? <PrevArrow /> : null,
        className: 'slide-image-product',
    };
    const [productList, setProductList] = useState([]);
    useEffect(() => {
        const fetchProductList = async () => {
            try {
                const params = {
                    page: 1,
                    limit: 10,
                };
                const response = await productApi.getAll(params);
                console.log(response);
            } catch (error) {
                console.log('Failed to fetch product list', error);
            }
        };
        fetchProductList();
    }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container-fluid')}>
                <div className={cx('product-details')}>
                    <div className={cx('gallery')}>
                        <div className={cx('images')}>
                            <div className={cx('featured-images')}>
                                <div className={cx('image', 'gallery-image')}>
                                    <img src={defaultColor.images[0]} className={cx('zoom-img')} alt="" />
                                </div>
                                <div className={cx('image', 'gallery-image')}>
                                    <img src={defaultColor.images[1]} className={cx('zoom-img')} alt="" />
                                </div>
                            </div>
                            <div className={cx('thumb-images')}>
                                <div className={cx('slider')}>
                                    <Slider {...settings}>
                                        <div className={cx('image', 'gallery-image')}>
                                            <img src={defaultColor.images[2]} className={cx('zoom-img')} alt="" />
                                        </div>
                                        <div className={cx('image', 'gallery-image')}>
                                            <img src={defaultColor.images[3]} className={cx('zoom-img')} alt="" />
                                        </div>
                                        <div className={cx('image', 'gallery-image')}>
                                            <img src={defaultColor.images[4]} className={cx('zoom-img')} alt="" />
                                        </div>
                                        <div className={cx('image', 'gallery-image')}>
                                            <img src={defaultColor.images[5]} className={cx('zoom-img')} alt="" />
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                        <div className={cx('variants')}>
                            <div className={cx('variants-images')}>
                                {product.colors.map((color) => (
                                    <div className={cx('image')}>
                                        <input
                                            type="radio"
                                            className={cx('d-none')}
                                            id={color._id}
                                            value="41"
                                            data-url=""
                                            data-color="41"
                                            name="product-choose-color"
                                            checked={color._id === defaultColor._id}
                                        />
                                        <label className={cx('color')} htmlFor={color._id}>
                                            <img src={color.imgMedium} alt="" />
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className={cx('details')}>
                        <div className={cx('details__text-content')}>
                            <h3 className={cx('details__brand')}>MLB</h3>
                            <h1 className={cx('details__prd-title')}>Quần shorts lưng thun Basic Big Logo</h1>
                            <div className={cx('details__sku')}>Style Code: 3ASMB0323</div>
                            <div className={cx('details__prd-price')}>
                                <div className={cx('price')}>1,690,000₫</div>
                                <del>899,000đ</del>
                                <div className={cx('sale')}>-80%</div>
                            </div>
                        </div>
                        <div className={cx('details__sizes')}>
                            <label className={cx('d-flex', 'justify-content-between', 'align-items-center')}>
                                <b>KÍCH CỠ</b>
                                <div className={cx('size-guide')}>
                                    <SizeChartIcon />
                                    <span>Hướng Dẫn Chọn Size</span>
                                </div>
                            </label>
                            <div className={cx('details__sizes-data')}>
                                {defaultColor.sizes.map((size) => (
                                    <div key={size._id} className={cx('size', size.quantity === 0 && 'not-available')}>
                                        <input
                                            type="radio"
                                            className={cx('d-none')}
                                            name="product-choose-size"
                                            value={size.title}
                                            id={size._id}
                                        />
                                        <label htmlFor={size._id} className={cx('size-sw')}>
                                            {size.title}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={cx('details__promotion')}>
                            <div className={cx('box-gift-detail')}>
                                <b>Tặng 01 kem mắt AHC cho hóa đơn bất kỳ từ 2690K</b>
                            </div>
                        </div>
                        <div className={cx('details__promotion')}>
                            <div className={cx('box-gift-detail')}>
                                <b>Thanh toán qua Ree-Pay</b>
                                <div>Nhập mã: REEPAY188 Giảm ngay 188K cho hóa đơn từ 1888K</div>
                                <div>Nhập mã: REEPAY88 Giảm ngày 88K cho hóa đơn từ 1088K</div>
                                <div>&nbsp;</div>
                                <b>Thanh toán qua VNPay</b>
                                <div>Nhập mã: QRVIP Giảm ngay 3% tối đa 500K</div>

                                <div>&nbsp;&nbsp;</div>
                                <div>
                                    <span style={{ color: '#000000', fontWeight: 'bold' }}>Chi tiết:</span>{' '}
                                    <span style={{ color: '#000000', textDecoration: 'underline' }}>Tại đây</span>
                                </div>
                            </div>
                        </div>
                        <div className={cx('details__actions_available')}>
                            <div className={cx('btn')}>
                                <Button to={config.routes.cart} className={cx('buy-now')} large primary>
                                    mua ngay
                                </Button>
                            </div>
                            <div className={cx('btn')}>
                                <Button large primary>
                                    thêm vào giỏ
                                </Button>
                            </div>
                            <div className={cx('btn')}>
                                <Button className={cx('add-to-wish')} leftIcon={<HeartIcon />}>
                                    thêm vào wishlist
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('line')}></div>
            </div>
            <div className={cx('container-fluid')}>
                <div className={cx('product-desc')}>
                    <TabContent contents={navItems} />
                </div>
            </div>
            <div className={cx('container-fluid')}>
                <SlideProduct title="Sản phẩm bạn đã xem" showBtn={false} products={trademarkProducts[0].products} />
            </div>
            <div className={cx('container-fluid')}>
                <SlideProduct title="Có thể bạn cũng thích" showBtn={false} products={trademarkProducts[1].products} />
            </div>
            <div className={cx('container-fluid')}>
                <SlideProduct
                    title="Sản phẩm cùng thương hiệu"
                    showBtn={false}
                    products={trademarkProducts[1].products}
                />
            </div>
        </div>
    );
};

export default Product;
