import { v4 as uuidv4 } from 'uuid';
export const slides = [
    {
        _id: uuidv4(),
        img: 'https://file.hstatic.net/1000284478/file/main_31948aae340b48a294d6a19761a2a008.png',
    },
    {
        _id: uuidv4(),
        img: 'https://file.hstatic.net/1000284478/file/pedro-nam_3b684b081b924c6d83cd1ab85c21374d.png',
    },
    {
        _id: uuidv4(),
        img: 'https://file.hstatic.net/1000284478/file/mlb-nam_c522f0fab3604317bc8fa0d8b472a62a.png',
    },
    {
        _id: uuidv4(),
        img: 'https://file.hstatic.net/1000284478/file/puma-nam_4072465276d94b74b2346b707993ae1f.png',
    },
];
export const features = [
    {
        _id: uuidv4(),
        img: 'https://product.hstatic.net/1000284478/product/03_382088_1_48a5efded8344568a5b4d37455be8b73.jpg',
        trademark: 'Puma',
        productName: 'Giày thể thao cổ thấp hiện đại RS Connect Dust',
    },
    {
        _id: uuidv4(),
        img: 'https://product.hstatic.net/1000284478/product/44_pm2-25210190_1_9af2f03d9bc84457bf561e0f81b378ef.jpg',
        trademark: 'Pedro',
        productName: 'Túi đeo chéo nam form chữ nhật Boxy',
    },
    {
        _id: uuidv4(),
        img: 'https://product.hstatic.net/1000284478/product/50kal_3ajp21016_1_c5c67b04e322424d8a1d1b00efa7c5de.jpg',
        trademark: 'Mlb',
        productName: 'Áo khoác bóng chày Basic Padded Mego Logo',
    },
];
export const trademarkProducts = [
    {
        _id: uuidv4(),
        imgTrademark:
            'https://file.hstatic.net/1000284478/file/ezgif.com-gif-maker__2__f77ab134a46a4b8190ae05b50202cf8b.jpg',
        products: [
            {
                name: 'Giày mule Playball Origin',
                colors: [
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/50l_32shs1111_1_45793aa1b8064f5f9221d9847dc3f662_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/50l_32shs1111_1_45793aa1b8064f5f9221d9847dc3f662_large.jpg',
                            'https://product.hstatic.net/1000284478/product/50l_32shs1111_2_e9ea98f1ae1c4934be18215024c971af_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/07p_32shs1111_1_990ee6f984a546beade532802838971b_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/07p_32shs1111_1_990ee6f984a546beade532802838971b_large.jpg',
                            'https://product.hstatic.net/1000284478/product/07p_32shs1111_2_b9e6b8e7ae484036bd682cdb9a826933_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/50w_32shs1111_1_a2d9fcec70054bebb50cdb9f99b05b09_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/50w_32shs1111_1_a2d9fcec70054bebb50cdb9f99b05b09_large.jpg',
                            'https://product.hstatic.net/1000284478/product/50w_32shs1111_2_55b6165b13f24835bd09adbd4f23fc3b_large.jpg',
                        ],
                    },
                ],
                price: 1690000,
                discount: 20,
                _id: uuidv4(),
                trademark: 'mlb',
            },
            {
                name: 'Giày mule Playball Monogram',
                colors: [
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/50w_32shsm111_1_a7ec4f4843f84ebdbb25e2ab5c721ad1_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/50w_32shsm111_1_a7ec4f4843f84ebdbb25e2ab5c721ad1_large.jpg',
                            'https://product.hstatic.net/1000284478/product/50w_32shsm111_2_a8429c670c354c99b7195acfdc8a510b_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/50l_32shsm111_1_0088198a88c544e0a02d2a3a227f7f36_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/50l_32shsm111_1_0088198a88c544e0a02d2a3a227f7f36_large.jpg',
                            'https://product.hstatic.net/1000284478/product/50l_32shsm111_2_3b2f73a6da5148b8b5379470b798afc5_large.jpg',
                        ],
                    },
                ],
                price: 1690000,
                discount: 15,
                _id: uuidv4(),
                trademark: 'mlb',
            },
            {
                name: 'Giày mule Playball Monogram',
                colors: [
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/50l_32shsm111_1_0088198a88c544e0a02d2a3a227f7f36_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/50l_32shsm111_1_0088198a88c544e0a02d2a3a227f7f36_large.jpg',
                            'https://product.hstatic.net/1000284478/product/50l_32shsm111_2_3b2f73a6da5148b8b5379470b798afc5_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/50w_32shsm111_1_a7ec4f4843f84ebdbb25e2ab5c721ad1_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/50w_32shsm111_1_a7ec4f4843f84ebdbb25e2ab5c721ad1_large.jpg',
                            'https://product.hstatic.net/1000284478/product/50w_32shsm111_2_a8429c670c354c99b7195acfdc8a510b_large.jpg',
                        ],
                    },
                ],
                price: 1690000,
                discount: 15,
                _id: uuidv4(),
                trademark: 'mlb',
            },
            {
                name: 'Giày mule thời trang Playball Origin',
                colors: [
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/50bks_3amuua11n_1_4e0794a6f2a347baad615a57d4b28a7d_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/50bks_3amuua11n_1_4e0794a6f2a347baad615a57d4b28a7d_large.jpg',
                            'https://product.hstatic.net/1000284478/product/50bks_3amuua11n_2_9f9aaa1def884acea8ef6c39633756ce_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/43kal_3amuua11n_1_54b24835fc0e45a289be266bae9a721c_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/43kal_3amuua11n_1_54b24835fc0e45a289be266bae9a721c_large.jpg',
                            'https://product.hstatic.net/1000284478/product/43kal_3amuua11n_2_8a131b08cfef4924bdd55fe707b75de0_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/50whs_3amuua11n_1_c8ceeb2d7c804448a9b4cc89fe13dd34_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/50whs_3amuua11n_1_c8ceeb2d7c804448a9b4cc89fe13dd34_large.jpg',
                            'https://product.hstatic.net/1000284478/product/50whs_3amuua11n_2_e3157c5ee75b4d268628b88db499bbaa_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/50pks_3amuua11n_1_9e6e4a336a3c479486253f57244468d8_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/50pks_3amuua11n_1_9e6e4a336a3c479486253f57244468d8_large.jpg',
                            'https://product.hstatic.net/1000284478/product/50pks_3amuua11n_2_598b3bd875bd4762b44b9c73ef3c305b_large.jpg',
                        ],
                    },
                ],
                price: 1690000,
                discount: 20,
                _id: uuidv4(),
                trademark: 'mlb',
            },
            {
                name: 'Giày thể thao Big Ball Chunky A',
                colors: [
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/50ivs_3ashc101n_1_bc11cc03aa6c40a8a23f08086d01b4bf_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/50ivs_3ashc101n_1_bc11cc03aa6c40a8a23f08086d01b4bf_large.jpg',
                            'https://product.hstatic.net/1000284478/product/50ivs_3ashc101n_2_59188e02a0b7425ebe0c26485a17d032_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/50bgs_3ashc101n_1_5f570c078d754ad3bb4a9d14efac5056_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/50bgs_3ashc101n_1_5f570c078d754ad3bb4a9d14efac5056_large.jpg',
                            'https://product.hstatic.net/1000284478/product/50bgs_3ashc101n_2_3e5662ae24154a4fb34af4cb121aaa1f_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/07whs_3ashc101n_1_bd32cb00a1134d5ab9aa19d83aca4b5c_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/07whs_3ashc101n_1_bd32cb00a1134d5ab9aa19d83aca4b5c_large.jpg',
                            'https://product.hstatic.net/1000284478/product/07whs_3ashc101n_2_9c784f2ca77748d38654a04dd34c91dc_large.jpg',
                        ],
                    },
                ],
                price: 2490000,
                discount: 20,
                _id: uuidv4(),
                trademark: 'mlb',
            },
            {
                name: 'Giày sneaker Playball Origin',
                colors: [
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/50l_32shp1111_1_645492083bf24041b253e2ae202076e0_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/50l_32shp1111_1_645492083bf24041b253e2ae202076e0_large.jpg',
                            'https://product.hstatic.net/1000284478/product/50l_32shp1111_2_8e10d86194c94a2a9badd1bc53bea23f_large.jpg',
                        ],
                    },
                ],
                price: 1590000,
                discount: 10,
                _id: uuidv4(),
                trademark: 'mlb',
            },
            {
                name: 'Giày mule Playball Origin',
                colors: [
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/50w_32shs1111_1_a2d9fcec70054bebb50cdb9f99b05b09_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/50w_32shs1111_1_a2d9fcec70054bebb50cdb9f99b05b09_large.jpg',
                            'https://product.hstatic.net/1000284478/product/50w_32shs1111_2_55b6165b13f24835bd09adbd4f23fc3b_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/50l_32shs1111_1_45793aa1b8064f5f9221d9847dc3f662_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/50l_32shs1111_1_45793aa1b8064f5f9221d9847dc3f662_large.jpg',
                            'https://product.hstatic.net/1000284478/product/50l_32shs1111_2_e9ea98f1ae1c4934be18215024c971af_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/07p_32shs1111_1_990ee6f984a546beade532802838971b_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/07p_32shs1111_1_990ee6f984a546beade532802838971b_large.jpg',
                            'https://product.hstatic.net/1000284478/product/07p_32shs1111_2_b9e6b8e7ae484036bd682cdb9a826933_large.jpg',
                        ],
                    },
                ],
                price: 1690000,
                discount: 10,
                _id: uuidv4(),
                trademark: 'mlb',
            },
            {
                name: 'Dép vai ngang Multi Color Monogram',
                colors: [
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/50l_32shhm111_1_2f141a8dee704a79bf75e0726522c95c_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/50l_32shhm111_1_2f141a8dee704a79bf75e0726522c95c_large.jpg',
                            'https://product.hstatic.net/1000284478/product/50l_32shhm111_2_88078f1df0c049699b7ae8d6f77110de_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/50w_32shhm111_1_e2888b7aaba247f2b28c172b4edcee42_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/50w_32shhm111_1_e2888b7aaba247f2b28c172b4edcee42_large.jpg',
                            'https://product.hstatic.net/1000284478/product/50w_32shhm111_2_8f2192d95db24b5dbdfbd2688ba993b9_large.jpg',
                        ],
                    },
                ],
                price: 1590000,
                discount: 10,
                _id: uuidv4(),
                trademark: 'mlb',
            },
            {
                name: 'Dép quai ngang Multi Color Monogram',
                colors: [
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/50w_32shhm111_1_e2888b7aaba247f2b28c172b4edcee42_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/50w_32shhm111_1_e2888b7aaba247f2b28c172b4edcee42_large.jpg',
                            'https://product.hstatic.net/1000284478/product/50w_32shhm111_2_8f2192d95db24b5dbdfbd2688ba993b9_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/50l_32shhm111_1_2f141a8dee704a79bf75e0726522c95c_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/50l_32shhm111_1_2f141a8dee704a79bf75e0726522c95c_large.jpg',
                            'https://product.hstatic.net/1000284478/product/50l_32shhm111_2_88078f1df0c049699b7ae8d6f77110de_large.jpg',
                        ],
                    },
                ],
                price: 1590000,
                discount: 10,
                _id: uuidv4(),
                trademark: 'mlb',
            },
            {
                name: 'Giày sneaker Big Ball Chunky Lite',
                colors: [
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/50i_32shc3111_1_aae5f631ebdd44b2a6558d392d00ffb3_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/50i_32shc3111_1_aae5f631ebdd44b2a6558d392d00ffb3_large.jpg',
                            'https://product.hstatic.net/1000284478/product/50i_32shc3111_3_a91463a66cee41c2ae6eead3a5d95249_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/07m_32shc3111_1_0668fb1dc50548a0927560202ab6e77e_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/07m_32shc3111_1_0668fb1dc50548a0927560202ab6e77e_large.jpg',
                            'https://product.hstatic.net/1000284478/product/07m_32shc3111_2_84f7a56e88084453b932f6d51025936c_large.jpg',
                        ],
                    },
                ],
                price: 2490000,
                discount: 10,
                _id: uuidv4(),
                trademark: 'mlb',
            },
            {
                name: 'Set 2 vớ unisex cổ thấp Small Logo',
                colors: [
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/00mgd_3asosa116_1_2bb67e8eec6d4137b4a25c42444ef56a_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/00mgd_3asosa116_1_2bb67e8eec6d4137b4a25c42444ef56a_large.jpg',
                            'https://product.hstatic.net/1000284478/product/00mgd_3asosa116_2_f97a5674d2ab4ef89f1ce72957c57b54_large.jpg',
                        ],
                    },
                ],
                price: 269000,
                discount: 10,
                _id: uuidv4(),
                trademark: 'mlb',
            },
            {
                name: 'Nón bóng chày thời trang phối logo thời trang',
                colors: [
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/50l_32cp50111_1_48fccb8c35fb43dda4873b7478917474_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/50l_32cp50111_1_48fccb8c35fb43dda4873b7478917474_large.jpg',
                            'https://product.hstatic.net/1000284478/product/50l_32cp50111_2_e03af6cf68b94970bd8f041722e30a18_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/50w_32cp50111_1_2d6f2153cebd4ea3b689280ef9362356_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/50w_32cp50111_1_2d6f2153cebd4ea3b689280ef9362356_large.jpg',
                            'https://product.hstatic.net/1000284478/product/50w_32cp50111_2_c4c1dc2d0c194b31ba21d1e268bcf067_large.jpg',
                        ],
                    },
                ],
                price: 1290000,
                discount: 10,
                _id: uuidv4(),
                trademark: 'mlb',
            },
        ],
    },
    {
        _id: uuidv4(),
        imgTrademark:
            'https://file.hstatic.net/1000284478/file/ezgif.com-gif-maker__4__cacb317c694f455cb9b3d1165fa0ec47.jpg',
        products: [
            {
                name: 'Ví nam da dang gập Textured Leather Bi Fold',
                colors: [
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/01_pm4-15940200_1_68015ec97a764533be85914205ec5a71_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/01_pm4-15940200_1_68015ec97a764533be85914205ec5a71_large.jpg',
                            'https://product.hstatic.net/1000284478/product/01_pm4-15940200_2_e567b228855c4ab3b396dc0951a3dc1c_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/02_pm4-15940200_1_03fb381c9f3a46aabca907d9ac535c21_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/02_pm4-15940200_1_03fb381c9f3a46aabca907d9ac535c21_large.jpg',
                            'https://product.hstatic.net/1000284478/product/02_pm4-15940200_2_b96b7fac7e6f451ca68c0faa7c483954_large.jpg',
                        ],
                    },
                ],
                price: 1399000,
                discount: 20,
                _id: uuidv4(),
                trademark: 'pedro',
            },
            {
                name: 'Túi đeo chéo nam Anniversary Exclusive Casual Sling',
                colors: [
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/01_pm2-26320101_1_9bc9287684834597afe7483bfe3010eb_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/01_pm2-26320101_1_9bc9287684834597afe7483bfe3010eb_large.jpg',
                            'https://product.hstatic.net/1000284478/product/01_pm2-26320101_2_8c6188a3ad4147a2b6b962bd2dce0fc3_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/10_pm2-26320101_1_032ac460f0004dfcb069abb3c96ad1ca_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/10_pm2-26320101_1_032ac460f0004dfcb069abb3c96ad1ca_large.jpg',
                            'https://product.hstatic.net/1000284478/product/10_pm2-26320101_2_8326c16b6a344db7963bf7f20e7d9571_large.jpg',
                        ],
                    },
                ],
                price: 1999000,
                discount: 15,
                _id: uuidv4(),
                trademark: 'pedro',
            },
            {
                name: 'Ví nam dạng gập Textured Leather Bi Fold',
                colors: [
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/01_pm4-15940204_1_3c04ca67000242a9b5c7d198be390068_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/01_pm4-15940204_1_3c04ca67000242a9b5c7d198be390068_large.jpg',
                            'https://product.hstatic.net/1000284478/product/01_pm4-15940204_2_2c245d109a2645f0be2dc89dc24fe33b_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/51_pm4-15940204_1_800fb816c93543f8bcccde2793f5fff6_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/51_pm4-15940204_1_800fb816c93543f8bcccde2793f5fff6_large.jpg',
                            'https://product.hstatic.net/1000284478/product/51_pm4-15940204_2_f1566964e176482185caa92c89e0f57f_large.jpg',
                        ],
                    },
                ],
                price: 1399000,
                discount: 20,
                _id: uuidv4(),
                trademark: 'pedro',
            },
            {
                name: 'Ví nam dạng gập Textured Leather Bi Fold',
                colors: [
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/10_pm4-15940205_1_55a7ad5e83cf47868d23c58782d38d47_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/10_pm4-15940205_1_55a7ad5e83cf47868d23c58782d38d47_large.jpg',
                            'https://product.hstatic.net/1000284478/product/10_pm4-15940205_2_f9e721f959c04da597a43e171bcb2336_large.jpg',
                        ],
                    },
                ],
                price: 1399000,
                discount: 10,
                _id: uuidv4(),
                trademark: 'pedro',
            },
            {
                name: 'Ví nam da dạng gập Textured Leather Bi Fold',
                colors: [
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/02_pm4-15940200_1_03fb381c9f3a46aabca907d9ac535c21_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/02_pm4-15940200_1_03fb381c9f3a46aabca907d9ac535c21_large.jpg',
                            'https://product.hstatic.net/1000284478/product/02_pm4-15940200_2_b96b7fac7e6f451ca68c0faa7c483954_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/01_pm4-15940200_1_68015ec97a764533be85914205ec5a71_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/01_pm4-15940200_1_68015ec97a764533be85914205ec5a71_large.jpg',
                            'https://product.hstatic.net/1000284478/product/01_pm4-15940200_2_e567b228855c4ab3b396dc0951a3dc1c_large.jpg',
                        ],
                    },
                ],
                price: 1399000,
                discount: 10,
                _id: uuidv4(),
                trademark: 'pedro',
            },
            {
                name: 'Ví nam dạng gập Icon Leather Bi Fold',
                colors: [
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/01_pm4-16500056_1_ffbbb36a928043959daafc5a93cf3bb1_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/01_pm4-16500056_1_ffbbb36a928043959daafc5a93cf3bb1_large.jpg',
                            'https://product.hstatic.net/1000284478/product/01_pm4-16500056_2_e640c2297e5d458ea1fb2bc8cf0db1b7_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/29_pm4-16500056_1_2868b60283f64027933efd5627b5d3bf_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/29_pm4-16500056_1_2868b60283f64027933efd5627b5d3bf_large.jpg',
                            'https://product.hstatic.net/1000284478/product/29_pm4-16500056_2_1c58163d791e412c865b729fd8202e29_large.jpg',
                        ],
                    },
                ],
                price: 1399000,
                discount: 10,
                _id: uuidv4(),
                trademark: 'pedro',
            },
            {
                name: 'Ví nam dạng gập Leather Bi Fold',
                colors: [
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/01_pm4-16500050_1_c3d139136efb428d9fe2e86221ddfe92_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/01_pm4-16500050_1_c3d139136efb428d9fe2e86221ddfe92_large.jpg',
                            'https://product.hstatic.net/1000284478/product/01_pm4-16500050_2_987cb84a13fa4609912ccbd875e258b4_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/02_pm4-16500050_1_1c694234bbd24f87a9ad53f2d4f39aa3_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/02_pm4-16500050_1_1c694234bbd24f87a9ad53f2d4f39aa3_large.jpg',
                            'https://product.hstatic.net/1000284478/product/02_pm4-16500050_2_857579877bb343ebba86f3435a31750c_large.jpg',
                        ],
                    },
                ],
                price: 1399000,
                discount: 10,
                _id: uuidv4(),
                trademark: 'pedro',
            },
            {
                name: 'Dép nam vai ngang thời trang',
                colors: [
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/01_pm1-85110395_1_352b0c08c8c341d1bc3315f0d73383fa_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/01_pm1-85110395_1_352b0c08c8c341d1bc3315f0d73383fa_large.jpg',
                            'https://product.hstatic.net/1000284478/product/01_pm1-85110395_2_50e8b5a042bc4b2b9da69823e4b429f8_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/06_pm1-85110395_1_90156d876c754440a71e5e25f3604a9f_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/06_pm1-85110395_1_90156d876c754440a71e5e25f3604a9f_large.jpg',
                            'https://product.hstatic.net/1000284478/product/06_pm1-85110395_2_f295e2d02bfe4e9fbac00e8475d9cd8b_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/23_pm1-85110395_1_e65691f3f1ab46979c070fe0ad8b787f_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/23_pm1-85110395_1_e65691f3f1ab46979c070fe0ad8b787f_large.jpg',
                            'https://product.hstatic.net/1000284478/product/23_pm1-85110395_2_1e36b3a9281f4d269baa9ca46aeab51c_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/08_pm1-85110395_1_3afcef4055b847d0a618cb26208cdb2b_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/08_pm1-85110395_1_3afcef4055b847d0a618cb26208cdb2b_large.jpg',
                            'https://product.hstatic.net/1000284478/product/08_pm1-85110395_2_4ffcc9d0bf85435890ca65e5ca28c0b4_large.jpg',
                        ],
                    },
                ],
                price: 1399000,
                discount: 10,
                _id: uuidv4(),
                trademark: 'pedro',
            },
            {
                name: 'Ví nam dạng gập Textured Leather',
                colors: [
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/01_pm4-15940215_1_f583673d4f4342d397b82972f102dfd7_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/01_pm4-15940215_1_f583673d4f4342d397b82972f102dfd7_large.jpg',
                            'https://product.hstatic.net/1000284478/product/01_pm4-15940215_2_cfa8bc42fdce4137bb1ebbf2a1fb699a_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/10_pm4-15940215_1_304df18605154178aa2bb61a0735d3c9_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/10_pm4-15940215_1_304df18605154178aa2bb61a0735d3c9_large.jpg',
                            'https://product.hstatic.net/1000284478/product/10_pm4-15940215_2_4ee134e479fd4e67a63c08c90083dbc7_large.jpg',
                        ],
                    },
                ],
                price: 1399000,
                discount: 10,
                _id: uuidv4(),
                trademark: 'pedro',
            },
            {
                name: 'Balo nam da chữ nhật Structured Chain',
                colors: [
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/01_pm2-26320125_1_4037f934aefa41d3b1fe692fe3fb7c71_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/01_pm2-26320125_1_4037f934aefa41d3b1fe692fe3fb7c71_large.jpg',
                            'https://product.hstatic.net/1000284478/product/01_pm2-26320125_2_a0d0d3f2788d467d9a62bb9d283b54d8_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/24_pm2-26320125_1_c3334c94c02d4d9db3fa16d2b4cbed32_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/24_pm2-26320125_1_c3334c94c02d4d9db3fa16d2b4cbed32_large.jpg',
                            'https://product.hstatic.net/1000284478/product/24_pm2-26320125_2_434a0d039c9f4b85818d87ed83e0445e_large.jpg',
                        ],
                    },
                ],
                price: 2999000,
                discount: 10,
                _id: uuidv4(),
                trademark: 'pedro',
            },
            {
                name: 'Set 3 đôi vớ nam cổ thấp Casual Loafer',
                colors: [
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/24_pm5-26090001_1_3539fc01becf4459ad256582b507e8c6_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/24_pm5-26090001_1_3539fc01becf4459ad256582b507e8c6_large.jpg',
                            'https://product.hstatic.net/1000284478/product/24_pm5-26090001_2_ef03a8d6a8734abca6f48b2a6323b7c6_20bac8d0badd49fdb774b06c62f10e82_large.jpg',
                        ],
                    },
                ],
                price: 299000,
                discount: 10,
                _id: uuidv4(),
                trademark: 'pedro',
            },
            {
                name: 'Balo nam da chữ nhật Structured Chain',
                colors: [
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/10_pm1-85110380_1_fed0ead43dce49bb9678b47a127884c1_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/10_pm1-85110380_1_fed0ead43dce49bb9678b47a127884c1_large.jpg',
                            'https://product.hstatic.net/1000284478/product/10_pm1-85110380_2_ec65e12b04194e9fb138729552017453_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/44_pm1-85110380_1_431c2ad05df94fbeacc40dce33f497a8_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/44_pm1-85110380_1_431c2ad05df94fbeacc40dce33f497a8_large.jpg',
                            'https://product.hstatic.net/1000284478/product/44_pm1-85110380_2_ae0c406d8a71446fad31d6a75e87f6cc_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/03_pm1-85110380_1_d7f355081857428ea693f43770e5a257_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/03_pm1-85110380_1_d7f355081857428ea693f43770e5a257_large.jpg',
                            'https://product.hstatic.net/1000284478/product/03_pm1-85110380_2_be8aba56e783421fad2600ddf64d38ee_large.jpg',
                        ],
                    },
                ],
                price: 1399000,
                discount: 10,
                _id: uuidv4(),
                trademark: 'pedro',
            },
        ],
    },
];
export const categoriesMen = [
    {
        _id: uuidv4(),
        categoryName: 'Trang phục',
        categoryDesc:
            'Thoải mái lựa chọn và khẳng định phong cách thời trang lịch lãm và cá tính dành cho mọi quý ông với các item quần áo đến từ các thương hiệu thời trang quốc tế: DSquared2, Ted Baker, Puma,…',
        img: 'https://file.hstatic.net/1000284478/file/nam-trang-phuc_2ea04cdf7ce14a18a20ef86bc2e23416.png',
        slug: 'trang-phuc-nam',
    },
    {
        _id: uuidv4(),
        categoryName: 'Giày dép',
        categoryDesc:
            'Giúp mọi quý ông tự tin sải bước với các thiết kế giày dép thời trang, lịch lãm: giày tây, giày sandals, giày thể thao, dép,…đến từ các thương hiệu nổi tiếng như DSquared2, Pedro, Havaianas,…',
        img: 'https://file.hstatic.net/1000284478/file/nam-giay-dep_2e7f953fb7ad4095b520db6ec430bdac.png',
        slug: 'giay-dep-nam',
    },
    {
        _id: uuidv4(),
        categoryName: 'Túi, ví, balo',
        categoryDesc:
            'Với thiết kế lịch lãm và không kém phần hiện đại từ các thương hiệu Pedro, Dsquared2, MLB, Puma, The Kooples... các bộ sưu tập sẽ giúp tôn lên sự nam tính và nét thanh lịch cho các quý ông, hoàn thiện vẻ ngoài một cách hoàn hảo.',
        img: 'https://file.hstatic.net/1000284478/file/nam-tui-vi_56696d1818ff46aeaef80ccd9f51c12b.png',
        slug: 'tui-vi-nam',
    },
    {
        _id: uuidv4(),
        categoryName: 'Phụ kiện',
        categoryDesc:
            'Với kho tàng phụ kiện phong phú như thắt lưng, mắt kính, trang sức,... đến từ các thương hiệu đình đám Aojo, Mujosh, Pedro,... sẽ khiến các fashionista mê mẩn và yêu thích, giúp hoàn thiện vẻ ngoài một cách hoàn hảo.',
        img: 'https://file.hstatic.net/1000284478/file/nam-phu-kien_e26f9d5ac756478f8c660be777d3c3e7.png',
        slug: 'phu-kien-nam',
    },
];
