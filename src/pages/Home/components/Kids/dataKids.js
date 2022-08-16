import { v4 as uuidv4 } from 'uuid';
export const slides = [
    {
        _id: uuidv4(),
        img: 'https://file.hstatic.net/1000284478/file/main_31948aae340b48a294d6a19761a2a008.png',
    },
    {
        _id: uuidv4(),
        img: 'https://file.hstatic.net/1000284478/file/Puma-nam_3b684b081b924c6d83cd1ab85c21374d.png',
    },
    {
        _id: uuidv4(),
        img: 'https://file.hstatic.net/1000284478/file/Havaianas-nam_c522f0fab3604317bc8fa0d8b472a62a.png',
    },
    {
        _id: uuidv4(),
        img: 'https://file.hstatic.net/1000284478/file/puma-nam_4072465276d94b74b2346b707993ae1f.png',
    },
];
export const features = [
    {
        _id: uuidv4(),
        img: 'https://product.hstatic.net/1000284478/product/hpmt_314848l_2_9ac151282f3445709d696f20251ef8c2_grande.jpg',
        trademark: 'Skechers',
        productName: 'Giày thể thao bé gái Sparkle Rayz',
    },
    {
        _id: uuidv4(),
        img: 'https://product.hstatic.net/1000284478/product/02_598397_1_13524130ecb245638d332634bf85f556.jpg',
        trademark: 'Puma',
        productName: 'Áo thun thể thao trẻ em BMW M Motorsport',
    },
    {
        _id: uuidv4(),
        img: 'https://product.hstatic.net/1000284478/product/36_pk2-15210001_1_4b24f06c61f34815b42f20c9a31c84e6.jpg',
        trademark: 'Pedro',
        productName: 'Balo trẻ em form chữ nhật Corduroy',
    },
];
export const trademarkProducts = [
    {
        _id: uuidv4(),
        imgTrademark: 'https://file.hstatic.net/1000284478/file/trends-havai_418db3ced340469f981b57780b4f5f80.png',
        products: [
            {
                name: 'Dép trẻ em Top Disney',
                colors: [
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/7797_4139412_1_9bfa7cb37557481fb7e8949c5d44ef0e_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/7797_4139412_1_9bfa7cb37557481fb7e8949c5d44ef0e_large.jpg',
                            'https://product.hstatic.net/1000284478/product/7797_4139412_3_1a19d71157cf4ffbb02e16d746a10e6c_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/7600_4139412_1_a8ca14ad6506457ca13c743cc494407e_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/7600_4139412_1_a8ca14ad6506457ca13c743cc494407e_large.jpg',
                            'https://product.hstatic.net/1000284478/product/7600_4139412_2_9c8c09c740d54fa9baca301e813edbc7_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/7611_4139412_1_810117957b89437d9e135a594e1c215e_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/7611_4139412_1_810117957b89437d9e135a594e1c215e_large.jpg',
                            'https://product.hstatic.net/1000284478/product/7611_4139412_2_97c2e0bf365a40cb9e639e8ee479f322_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/0057_4139412_1_c2e8598dc68942f59c1abb0ed454ae73_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/0057_4139412_1_c2e8598dc68942f59c1abb0ed454ae73_large.jpg',
                            'https://product.hstatic.net/1000284478/product/0057_4139412_2_42ea64dea9814781ad54acd6c5f66dd4_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/1636_4139412_1_40c33edbd69c4a38b0b7e6ff773938bd_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/1636_4139412_1_40c33edbd69c4a38b0b7e6ff773938bd_large.jpg',
                            'https://product.hstatic.net/1000284478/product/1636_4139412_2_6b20a719b757484ca34ef672299a8868_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/3498_4139412_1_48a20a933abf47bfb6d9b987e24e6b41_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/3498_4139412_1_48a20a933abf47bfb6d9b987e24e6b41_large.jpg',
                            'https://product.hstatic.net/1000284478/product/3498_4139412_2_34920e5b1a854dfc831c28c425eb6f7c_large.jpg',
                        ],
                    },
                ],
                price: 149700,
                discount: 14,
                _id: uuidv4(),
                trademark: 'Havaianas',
            },
            {
                name: 'Dép trẻ em Top Disney',
                colors: [
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/7600_4139412_1_a8ca14ad6506457ca13c743cc494407e_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/7600_4139412_1_a8ca14ad6506457ca13c743cc494407e_large.jpg',
                            'https://product.hstatic.net/1000284478/product/7600_4139412_2_9c8c09c740d54fa9baca301e813edbc7_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/7611_4139412_1_810117957b89437d9e135a594e1c215e_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/7611_4139412_1_810117957b89437d9e135a594e1c215e_large.jpg',
                            'https://product.hstatic.net/1000284478/product/7611_4139412_2_97c2e0bf365a40cb9e639e8ee479f322_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/0057_4139412_1_c2e8598dc68942f59c1abb0ed454ae73_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/0057_4139412_1_c2e8598dc68942f59c1abb0ed454ae73_large.jpg',
                            'https://product.hstatic.net/1000284478/product/0057_4139412_2_42ea64dea9814781ad54acd6c5f66dd4_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/7797_4139412_1_9bfa7cb37557481fb7e8949c5d44ef0e_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/7797_4139412_1_9bfa7cb37557481fb7e8949c5d44ef0e_large.jpg',
                            'https://product.hstatic.net/1000284478/product/7797_4139412_3_1a19d71157cf4ffbb02e16d746a10e6c_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/1636_4139412_1_40c33edbd69c4a38b0b7e6ff773938bd_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/1636_4139412_1_40c33edbd69c4a38b0b7e6ff773938bd_large.jpg',
                            'https://product.hstatic.net/1000284478/product/1636_4139412_2_6b20a719b757484ca34ef672299a8868_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/3498_4139412_1_48a20a933abf47bfb6d9b987e24e6b41_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/3498_4139412_1_48a20a933abf47bfb6d9b987e24e6b41_large.jpg',
                            'https://product.hstatic.net/1000284478/product/3498_4139412_2_34920e5b1a854dfc831c28c425eb6f7c_large.jpg',
                        ],
                    },
                ],
                price: 149700,
                discount: 14,
                _id: uuidv4(),
                trademark: 'Havaianas',
            },
            {
                name: 'Dép trẻ em Mario Bros',
                colors: [
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/0081_4140269_1_15b29d6ecd65473b8b125a679bc45ba9_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/0081_4140269_1_15b29d6ecd65473b8b125a679bc45ba9_grande.jpg',
                            'https://product.hstatic.net/1000284478/product/0081_4140269_2_5b828e10eac04bcdb96564774640284c_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/7883_4140269_1_f51ae7da708d43acb5aea57d24d15788_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/7883_4140269_1_f51ae7da708d43acb5aea57d24d15788_large.jpg',
                            'https://product.hstatic.net/1000284478/product/7883_4140269_2_24712cce3a704d2d92a23297ee4023ec_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/7884_4140269_1_34a796d2dc294be1ab064a31bc1cbe77_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/7884_4140269_1_34a796d2dc294be1ab064a31bc1cbe77_large.jpg',
                            'https://product.hstatic.net/1000284478/product/7884_4140269_2_a2555b4216c44e03a3f852c20f251fbe_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/5178_4140269_1_0a242e30f7104f55b8ca1baf5bc6931f_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/5178_4140269_1_0a242e30f7104f55b8ca1baf5bc6931f_large.jpg',
                            'https://product.hstatic.net/1000284478/product/5178_4140269_2_3e513deb702946119276613bf8f0eda5_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/1976_4140269_1_fbeeb2f655754c48862842d105e2e92f_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/1976_4140269_1_fbeeb2f655754c48862842d105e2e92f_large.jpg',
                            'https://product.hstatic.net/1000284478/product/1976_4140269_2_cb4e4afdd2174928aa6b23284e58304b_large.jpg',
                        ],
                    },
                ],
                price: 299500,
                discount: 34,
                _id: uuidv4(),
                trademark: 'Havaianas',
            },
            {
                name: 'Dép trẻ em Top Disney',
                colors: [
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/7611_4139412_1_810117957b89437d9e135a594e1c215e_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/7611_4139412_1_810117957b89437d9e135a594e1c215e_large.jpg',
                            'https://product.hstatic.net/1000284478/product/7611_4139412_2_97c2e0bf365a40cb9e639e8ee479f322_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/7600_4139412_1_a8ca14ad6506457ca13c743cc494407e_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/7600_4139412_1_a8ca14ad6506457ca13c743cc494407e_large.jpg',
                            'https://product.hstatic.net/1000284478/product/7600_4139412_2_9c8c09c740d54fa9baca301e813edbc7_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/0057_4139412_1_c2e8598dc68942f59c1abb0ed454ae73_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/0057_4139412_1_c2e8598dc68942f59c1abb0ed454ae73_large.jpg',
                            'https://product.hstatic.net/1000284478/product/0057_4139412_2_42ea64dea9814781ad54acd6c5f66dd4_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/7797_4139412_1_9bfa7cb37557481fb7e8949c5d44ef0e_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/7797_4139412_1_9bfa7cb37557481fb7e8949c5d44ef0e_large.jpg',
                            'https://product.hstatic.net/1000284478/product/7797_4139412_3_1a19d71157cf4ffbb02e16d746a10e6c_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/1636_4139412_1_40c33edbd69c4a38b0b7e6ff773938bd_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/1636_4139412_1_40c33edbd69c4a38b0b7e6ff773938bd_large.jpg',
                            'https://product.hstatic.net/1000284478/product/1636_4139412_2_6b20a719b757484ca34ef672299a8868_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/3498_4139412_1_48a20a933abf47bfb6d9b987e24e6b41_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/3498_4139412_1_48a20a933abf47bfb6d9b987e24e6b41_large.jpg',
                            'https://product.hstatic.net/1000284478/product/3498_4139412_2_34920e5b1a854dfc831c28c425eb6f7c_large.jpg',
                        ],
                    },
                ],
                price: 149700,
                discount: 14,
                _id: uuidv4(),
                trademark: 'Havaianas',
            },
            {
                name: 'Dép trẻ em Minions',
                colors: [
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/0776_4133167_1_240e97e8ed6044b88d5e2cda90551f48_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/0776_4133167_1_240e97e8ed6044b88d5e2cda90551f48_large.jpg',
                            'https://product.hstatic.net/1000284478/product/0776_4133167_2_26c767623131413f934fc92fef602d5d_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/0245_4133167_1_e6ba31e6aacd4032ae82ba303e602bda_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/0245_4133167_1_e6ba31e6aacd4032ae82ba303e602bda_large.jpg',
                            'https://product.hstatic.net/1000284478/product/0245_4133167_2_3239d609863041cfb23ca9fab33b7c22_large.jpg',
                        ],
                    },
                ],
                price: 679000,
                discount: 50,
                _id: uuidv4(),
                trademark: 'Havaianas',
            },
            {
                name: 'Dép nam Simpsons',
                colors: [
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/0776_4137889_1_cc02ac4a5c594c9c903f9dc76008a9b0_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/0776_4137889_1_cc02ac4a5c594c9c903f9dc76008a9b0_large.jpg',
                            'https://product.hstatic.net/1000284478/product/0776_4137889_2_c84918e227244db79272cb1f06750f03_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/7033_4137889_1_587d004f64f946a0819bb7af2688e64b_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/7033_4137889_1_587d004f64f946a0819bb7af2688e64b_large.jpg',
                            'https://product.hstatic.net/1000284478/product/7033_4137889_2_3babf618eced4e1eb3bdeb1b63a4f75d_large.jpg',
                        ],
                    },
                ],
                price: 679000,
                discount: 56,
                _id: uuidv4(),
                trademark: 'Havaianas',
            },
            {
                name: 'Dép trẻ em Kids Minecraft',
                colors: [
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/0001_4145125_1_a4f1ccce257f435f8731d9820e4af19e_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/0001_4145125_1_a4f1ccce257f435f8731d9820e4af19e_large.jpg',
                            'https://product.hstatic.net/1000284478/product/0001_4145125_2_c58f8648f8404679bd0f8eb34d36d442_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/2715_4145125_1_524ab82290a649858a8880530bc703df_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/2715_4145125_1_524ab82290a649858a8880530bc703df_large.jpg',
                            'https://product.hstatic.net/1000284478/product/2715_4145125_2_f55a78684e0542c6ae36915496c00667_large.jpg',
                        ],
                    },
                ],
                price: 599000,
                discount: 0,
                _id: uuidv4(),
                trademark: 'Havaianas',
            },
            {
                name: 'Dép trẻ em Slim Disney',
                colors: [
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/5217_4141203_1_484ac64516294d87828d2e76ad9443f5_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/5217_4141203_1_484ac64516294d87828d2e76ad9443f5_large.jpg',
                            'https://product.hstatic.net/1000284478/product/5217_4141203_2_e4114d64aa4843cd8caa8ed346de8456_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/7598_4141203_1_a548f764a9c04012a9d898568a3b584f_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/7598_4141203_1_a548f764a9c04012a9d898568a3b584f_large.jpg',
                            'https://product.hstatic.net/1000284478/product/7598_4141203_2_deb6ce882c7441a6af48727d07559447_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/0031_4141203_1_5a18640d77ac49498731e7003cbddd3d_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/0031_4141203_1_5a18640d77ac49498731e7003cbddd3d_large.jpg',
                            'https://product.hstatic.net/1000284478/product/0031_4141203_2_a32fd0a38f664a0889238c2ed1340898_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/5778_4141203_1_af414e35d05049d4a6b954945f1b9b75_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/5778_4141203_1_af414e35d05049d4a6b954945f1b9b75_large.jpg',
                            'https://product.hstatic.net/1000284478/product/5778_4141203_2_f10d89f0ef3e43b881df98843e4e1977_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/0082_4141203_1_0a0804c0365d483286a09773f0657d92_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/0082_4141203_1_0a0804c0365d483286a09773f0657d92_large.jpg',
                            'https://product.hstatic.net/1000284478/product/0082_4141203_2_d4b8e7fd1b424043a0330fda17a03f72_large.jpg',
                        ],
                    },
                ],
                price: 599000,
                discount: 0,
                _id: uuidv4(),
                trademark: 'Havaianas',
            },
            {
                name: 'Dép trẻ em Top Disney',
                colors: [
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/3498_4139412_1_48a20a933abf47bfb6d9b987e24e6b41_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/3498_4139412_1_48a20a933abf47bfb6d9b987e24e6b41_large.jpg',
                            'https://product.hstatic.net/1000284478/product/3498_4139412_2_34920e5b1a854dfc831c28c425eb6f7c_large.jpg',
                        ],
                    },

                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/7600_4139412_1_a8ca14ad6506457ca13c743cc494407e_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/7600_4139412_1_a8ca14ad6506457ca13c743cc494407e_large.jpg',
                            'https://product.hstatic.net/1000284478/product/7600_4139412_2_9c8c09c740d54fa9baca301e813edbc7_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/7611_4139412_1_810117957b89437d9e135a594e1c215e_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/7611_4139412_1_810117957b89437d9e135a594e1c215e_large.jpg',
                            'https://product.hstatic.net/1000284478/product/7611_4139412_2_97c2e0bf365a40cb9e639e8ee479f322_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/0057_4139412_1_c2e8598dc68942f59c1abb0ed454ae73_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/0057_4139412_1_c2e8598dc68942f59c1abb0ed454ae73_large.jpg',
                            'https://product.hstatic.net/1000284478/product/0057_4139412_2_42ea64dea9814781ad54acd6c5f66dd4_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/7797_4139412_1_9bfa7cb37557481fb7e8949c5d44ef0e_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/7797_4139412_1_9bfa7cb37557481fb7e8949c5d44ef0e_large.jpg',
                            'https://product.hstatic.net/1000284478/product/7797_4139412_3_1a19d71157cf4ffbb02e16d746a10e6c_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/1636_4139412_1_40c33edbd69c4a38b0b7e6ff773938bd_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/1636_4139412_1_40c33edbd69c4a38b0b7e6ff773938bd_large.jpg',
                            'https://product.hstatic.net/1000284478/product/1636_4139412_2_6b20a719b757484ca34ef672299a8868_large.jpg',
                        ],
                    },
                ],
                price: 499000,
                discount: 50,
                _id: uuidv4(),
                trademark: 'Havaianas',
            },
            {
                name: 'Dép trẻ em Kids Minecraft',
                colors: [
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/2715_4145125_1_524ab82290a649858a8880530bc703df_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/2715_4145125_1_524ab82290a649858a8880530bc703df_large.jpg',
                            'https://product.hstatic.net/1000284478/product/2715_4145125_2_f55a78684e0542c6ae36915496c00667_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/0001_4145125_1_a4f1ccce257f435f8731d9820e4af19e_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/0001_4145125_1_a4f1ccce257f435f8731d9820e4af19e_large.jpg',
                            'https://product.hstatic.net/1000284478/product/0001_4145125_2_c58f8648f8404679bd0f8eb34d36d442_large.jpg',
                        ],
                    },
                ],
                price: 699000,
                discount: 57,
                _id: uuidv4(),
                trademark: 'Havaianas',
            },
            {
                name: 'Dép trẻ em Kids Ben',
                colors: [
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/0001_4146091_1_be5aade417e346f59bc3d8a43c764098_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/0001_4146091_1_be5aade417e346f59bc3d8a43c764098_large.jpg',
                            'https://product.hstatic.net/1000284478/product/0001_4146091_2_deb73225d547411d99628ec2995e4d29_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/0212_4146091_1_5713f8bc7eae4d0a8b35ce475d6c445e_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/0212_4146091_1_5713f8bc7eae4d0a8b35ce475d6c445e_large.jpg',
                            'https://product.hstatic.net/1000284478/product/0212_4146091_2_751403a731f64bf7b87017a0d59130e3_large.jpg',
                        ],
                    },
                ],
                price: 599000,
                discount: 50,
                _id: uuidv4(),
                trademark: 'Havaianas',
            },
            {
                name: 'Dép nam Simpsons',
                colors: [
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/7033_4137889_1_587d004f64f946a0819bb7af2688e64b_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/7033_4137889_1_587d004f64f946a0819bb7af2688e64b_large.jpg',
                            'https://product.hstatic.net/1000284478/product/7033_4137889_2_3babf618eced4e1eb3bdeb1b63a4f75d_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/0776_4137889_1_cc02ac4a5c594c9c903f9dc76008a9b0_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/0776_4137889_1_cc02ac4a5c594c9c903f9dc76008a9b0_large.jpg',
                            'https://product.hstatic.net/1000284478/product/0776_4137889_2_c84918e227244db79272cb1f06750f03_large.jpg',
                        ],
                    },
                ],
                price: 679000,
                discount: 50,
                _id: uuidv4(),
                trademark: 'Havaianas',
            },
        ],
    },
    {
        _id: uuidv4(),
        imgTrademark: 'https://file.hstatic.net/1000284478/file/trends-puma_d6dbf03bb6c34a1eae67efa7bf1a49ad.png',
        products: [
            {
                name: 'Áo thun trẻ em ngắn tay Paw Advanced',
                colors: [
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/26_599914_1_a04586d3a5e048a39b7488723c0ce6c2_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/26_599914_1_a04586d3a5e048a39b7488723c0ce6c2_large.jpg',
                            'https://product.hstatic.net/1000284478/product/26_599914_2_d84670f2ff7442808f0c025b1905d14f_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/49_599914_1_69cd19529aba4862b2084eb08c43c025_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/49_599914_1_69cd19529aba4862b2084eb08c43c025_large.jpg',
                            'https://product.hstatic.net/1000284478/product/49_599914_2_c58d2e2711ea4f1d9af14c65f8fc302a_large.jpg',
                        ],
                    },
                ],
                price: 799000,
                discount: 50,
                _id: uuidv4(),
                trademark: 'Puma',
            },
            {
                name: 'Áo thun trẻ em PUMA X PEANUTS Graphic Tee B',
                colors: [
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/26_599463_1_6ed867aa10204a3d96ccc464ba8b75f6_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/26_599463_1_6ed867aa10204a3d96ccc464ba8b75f6_large.jpg',
                            'https://product.hstatic.net/1000284478/product/26_599463_2_0eb97896811a4088b0900d2c54098d99_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/06_599463_1_5b6c7214c64441b4b09a643484d033f5_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/06_599463_1_5b6c7214c64441b4b09a643484d033f5_large.jpg',
                            'https://product.hstatic.net/1000284478/product/06_599463_2_a73fa18878e649a5bc9fc17e14ca7a40_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/42_599463_1_6a4799e4a1074b568ff2c7dccfb6ca32_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/42_599463_1_6a4799e4a1074b568ff2c7dccfb6ca32_large.jpg',
                            'https://product.hstatic.net/1000284478/product/42_599463_2_0e2c9d1bb89340bf9e7e53d4a62cb34b_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/02_599463_1_0677ce5ef571408da7c4d85f1cb45e2b_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/02_599463_1_0677ce5ef571408da7c4d85f1cb45e2b_large.jpg',
                            'https://product.hstatic.net/1000284478/product/02_599463_2_c306aee447364affbe1e423250d5cdf0_large.jpg',
                        ],
                    },
                ],
                price: 799000,
                discount: 55,
                _id: uuidv4(),
                trademark: 'Puma',
            },
            {
                name: 'Quần sorts bé trai lưng thun Paw',
                colors: [
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/42_586223_1_40646841a7c94ec48325b1a60d02136d_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/42_586223_1_40646841a7c94ec48325b1a60d02136d_large.jpg',
                            'https://product.hstatic.net/1000284478/product/42_586223_2_cffc01904d554556a941cb6a26efa426_large.jpg',
                        ],
                    },
                ],
                price: 799000,
                discount: 50,
                _id: uuidv4(),
                trademark: 'Puma',
            },
            {
                name: 'Áo thun trẻ em ngắn tay Paw Advanced',
                colors: [
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/49_599914_1_69cd19529aba4862b2084eb08c43c025_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/49_599914_1_69cd19529aba4862b2084eb08c43c025_large.jpg',
                            'https://product.hstatic.net/1000284478/product/49_599914_2_c58d2e2711ea4f1d9af14c65f8fc302a_large.jpg',
                        ],
                    },
                ],
                price: 799000,
                discount: 50,
                _id: uuidv4(),
                trademark: 'Puma',
            },
            {
                name: 'Áo thun thể thao trẻ em cổ tròn tay ngắn Teamsport',
                colors: [
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/21_656811_1_86d06078800943b0b135782acf22a52b_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/21_656811_1_86d06078800943b0b135782acf22a52b_large.jpg',
                            'https://product.hstatic.net/1000284478/product/21_656811_2_15033d7832124ea4a32fec182ceb0075_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/01_656811_1_d0a67b7d2a864f9ab3247e66bb25ddaf_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/01_656811_1_d0a67b7d2a864f9ab3247e66bb25ddaf_large.jpg',
                            'https://product.hstatic.net/1000284478/product/01_656811_2_570a8717dae140309ec199a97883b065_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/06_656811_1_442d21bd2fc441cd9da2e685836a5f94_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/06_656811_1_442d21bd2fc441cd9da2e685836a5f94_large.jpg',
                            'https://product.hstatic.net/1000284478/product/06_656811_2_ed04dd0a8a8044f98cf6d0bfadc7905a_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/02_656811_1_6b7390033939404d888bfaa33c6d0a91_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/02_656811_1_6b7390033939404d888bfaa33c6d0a91_large.jpg',
                            'https://product.hstatic.net/1000284478/product/02_656811_2_5e0bfa19d20d4d268b162fa9dda88b08_large.jpg',
                        ],
                    },
                ],
                price: 399000,
                discount: 63,
                _id: uuidv4(),
                trademark: 'Puma',
            },
            {
                name: 'Áo thun trẻ em PUMA X PEANUTS Graphic Tee B',
                colors: [
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/42_599463_1_6a4799e4a1074b568ff2c7dccfb6ca32_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/42_599463_1_6a4799e4a1074b568ff2c7dccfb6ca32_large.jpg',
                            'https://product.hstatic.net/1000284478/product/42_599463_2_0e2c9d1bb89340bf9e7e53d4a62cb34b_large.jpg',
                        ],
                    },

                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/06_599463_1_5b6c7214c64441b4b09a643484d033f5_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/06_599463_1_5b6c7214c64441b4b09a643484d033f5_large.jpg',
                            'https://product.hstatic.net/1000284478/product/06_599463_2_a73fa18878e649a5bc9fc17e14ca7a40_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/26_599463_1_6ed867aa10204a3d96ccc464ba8b75f6_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/26_599463_1_6ed867aa10204a3d96ccc464ba8b75f6_large.jpg',
                            'https://product.hstatic.net/1000284478/product/26_599463_2_0eb97896811a4088b0900d2c54098d99_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/02_599463_1_0677ce5ef571408da7c4d85f1cb45e2b_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/02_599463_1_0677ce5ef571408da7c4d85f1cb45e2b_large.jpg',
                            'https://product.hstatic.net/1000284478/product/02_599463_2_c306aee447364affbe1e423250d5cdf0_large.jpg',
                        ],
                    },
                ],
                price: 799000,
                discount: 50,
                _id: uuidv4(),
                trademark: 'Puma',
            },
            {
                name: 'Quần jogger trẻ em không bo gấu BMW Motorsport T7 Slim Fit Track',
                colors: [
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/01_598395_1_dfff2cf9d07f454d8354a2a8331ccc34_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/01_598395_1_dfff2cf9d07f454d8354a2a8331ccc34_large.jpg',
                            'https://product.hstatic.net/1000284478/product/01_598395_2_e8c0c938ff0e4662bb109f6f24ec9d15_large.jpg',
                        ],
                    },
                ],
                price: 169900,
                discount: 71,
                _id: uuidv4(),
                trademark: 'Puma',
            },
            {
                name: 'Áo thun thể thao trẻ em BMW M Motorsport',
                colors: [
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/01_598398_1_2bf500f29f3c485b8c7cc7d5c1a33000_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/01_598398_1_2bf500f29f3c485b8c7cc7d5c1a33000_large.jpg',
                            'https://product.hstatic.net/1000284478/product/01_598398_2_a46848f79a124f5e9cfafbe5b947d8fb_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/02_598398_1_bbe5cc322d91474b88f640da0dd7a86f_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/02_598398_1_bbe5cc322d91474b88f640da0dd7a86f_large.jpg',
                            'https://product.hstatic.net/1000284478/product/02_598398_2_524f512c37804908823eb895ee18fcdb_large.jpg',
                        ],
                    },
                ],
                price: 899000,
                discount: 67,
                _id: uuidv4(),
                trademark: 'Puma',
            },
            {
                name: 'Giày sneaker trẻ em Future Rider Animals Little',
                colors: [
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/01_368741_1_30407eb3da754ba797c661f24b5fbe28_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/01_368741_1_30407eb3da754ba797c661f24b5fbe28_large.jpg',
                            'https://product.hstatic.net/1000284478/product/01_368741_2_dbec07d2384742f4a0e69d8cd76bf67e_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/02_368741_1_42daf27faa61479195549eda5cdd8bcf_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/02_368741_1_42daf27faa61479195549eda5cdd8bcf_large.jpg',
                            'https://product.hstatic.net/1000284478/product/02_368741_2_215cd2c78487405d825b33b8575a2bc7_large.jpg',
                        ],
                    },
                ],
                price: 1999000,
                discount: 50,
                _id: uuidv4(),
                trademark: 'Puma',
            },
            {
                name: 'Giày sneaker trẻ em Future Rider Animals Little',
                colors: [
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/02_368741_1_42daf27faa61479195549eda5cdd8bcf_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/02_368741_1_42daf27faa61479195549eda5cdd8bcf_large.jpg',
                            'https://product.hstatic.net/1000284478/product/02_368741_2_215cd2c78487405d825b33b8575a2bc7_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/01_368741_1_30407eb3da754ba797c661f24b5fbe28_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/01_368741_1_30407eb3da754ba797c661f24b5fbe28_large.jpg',
                            'https://product.hstatic.net/1000284478/product/01_368741_2_dbec07d2384742f4a0e69d8cd76bf67e_large.jpg',
                        ],
                    },
                ],
                price: 1999000,
                discount: 50,
                _id: uuidv4(),
                trademark: 'Puma',
            },
            {
                name: 'Áo thun thể thao trẻ em Teamsport BVB Home Replica',
                colors: [
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/01_757159_1_622081c354e343978ee1905c3f461ba3_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/01_757159_1_622081c354e343978ee1905c3f461ba3_large.jpg',
                            'https://product.hstatic.net/1000284478/product/01_757159_2_7eeb2be35784451084f6903b06a28a50_large.jpg',
                        ],
                    },
                ],
                price: 1299000,
                discount: 69,
                _id: uuidv4(),
                trademark: 'Puma',
            },
            {
                name: 'Áo thun thể thao trẻ em BMW M Motorsport',
                colors: [
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/01_598397_1_f51965dbf44646e7bcf591a306ea922d_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/01_598397_1_f51965dbf44646e7bcf591a306ea922d_large.jpg',
                            'https://product.hstatic.net/1000284478/product/01_598397_2_29c25bc750b04bc6a21fe0ddcee352ba_large.jpg',
                        ],
                    },
                    {
                        _id: uuidv4(),
                        imgSmall:
                            'https://product.hstatic.net/1000284478/product/02_598397_1_13524130ecb245638d332634bf85f556_small.jpg',
                        images: [
                            'https://product.hstatic.net/1000284478/product/02_598397_1_13524130ecb245638d332634bf85f556_large.jpg',
                            'https://product.hstatic.net/1000284478/product/02_598397_3_223a3e2bf0654e369f0789f3bb50b367_large.jpg',
                        ],
                    },
                ],
                price: 899000,
                discount: 67,
                _id: uuidv4(),
                trademark: 'Puma',
            },
        ],
    },
];
export const categoriesKids = [
    {
        _id: uuidv4(),
        categoryName: 'Trang phục',
        categoryDesc:
            'Định hình phong cách thời trang cho các thiên thần nhỏ của bạn với các item năng động và nhí nhảnh nhưng vẫn đảm bảo sự thoải mái và an toàn từ các thương hiệu thời trang quốc tế: Puma, Skechers, Havaianas,…',
        img: 'https://file.hstatic.net/1000284478/file/cate-trangphuc_e54490b0673341c78ab94b5155cce90b.png',
    },
    {
        _id: uuidv4(),
        categoryName: 'Giày dép',
        categoryDesc:
            'Mang lại sự thoải mái và an toàn cho từng bước chân của bé nhưng vẫn đảm bảo thiết kế nổi bật là những tiêu chí mà các thương hiệu thời trang Puma, Puma, Skechers,… luôn hướng đến.',
        img: 'https://file.hstatic.net/1000356698/file/cate-giay-dep_e9e7a3a57ff341b79b95863a56ae9633.jpg',
    },
    {
        _id: uuidv4(),
        categoryName: 'Túi, balo',
        categoryDesc:
            'Đa dạng các mẫu mã đến từ các thương hiệu thời trang nổi tiếng: Havaianas, Charles & Keith, Puma, Skechers, Puma... với phong cách đáng yêu, kiểu dáng năng động, nhí nhảnh, sử dụng chất liệu tốt nhất, đảm bảo an toàn cho bé.',
        img: 'https://file.hstatic.net/1000284478/file/cate-tuivi_e35ca60f53a7458e9ff9eead4e92b31d.png',
    },
    {
        _id: uuidv4(),
        categoryName: 'Phụ kiện',
        categoryDesc:
            'Với kho tàng phụ kiện phong phú như mắt kính, trang sức, mũ nón,... đến từ các thương hiệu đình đám như Havaianas, Mujosh, Charles & Keith, Puma,... sẽ khiến các fashionista nhí mê mẩn và yêu thích.',
        img: 'https://file.hstatic.net/1000284478/file/cate-phukien_27fc87dc1ff2420bb69120e8e894ff4b.png',
    },
];
