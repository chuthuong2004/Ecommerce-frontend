import config from '../config';
import { v4 as uuidv4 } from 'uuid';
export const headerLinks = [
    {
        to: config.routes.newIn,
        title: 'New In',
        subLinks: [
            {
                title: 'New in',
                _id: uuidv4(),
                links: [
                    {
                        content: 'GOODBYE SUMMER',
                        _id: uuidv4(),
                        to: '/goodbye-summer',
                    },
                    {
                        content: 'Minimalism',
                        _id: uuidv4(),
                        to: '/minimalism',
                    },
                    {
                        content: 'Denim',
                        _id: uuidv4(),
                        to: '/denim',
                    },
                    {
                        content: 'Basketball',
                        _id: uuidv4(),
                        to: '/basketball',
                    },
                ],
            },
            {
                title: 'Collection',
                _id: uuidv4(),
                links: [
                    {
                        content: 'RePEDRO',
                        _id: uuidv4(),
                        to: '/repedro',
                    },

                    {
                        content: 'Havaianas: Fortnite',
                        _id: uuidv4(),
                        to: '/minimalism',
                    },
                    {
                        content: 'Havaianas: Brasil Fresh',
                        _id: uuidv4(),
                        to: '/denim',
                    },
                    {
                        content: 'Skechers: Kids',
                        _id: uuidv4(),
                        to: '/basketball',
                    },
                    {
                        content: 'Skechers: Foamies',
                        _id: uuidv4(),
                        to: '/repedro',
                    },

                    {
                        content: 'Skechers: GOtrail',
                        _id: uuidv4(),
                        to: '/minimalism',
                    },
                    {
                        content: 'MAX&Co: Wear, Repeat',
                        _id: uuidv4(),
                        to: '/denim',
                    },
                    {
                        content: 'MAX&Co: To The Dance Floor',
                        _id: uuidv4(),
                        to: '/basketball',
                    },
                ],
            },
            {
                title: 'Collaboration',
                _id: uuidv4(),
                links: [
                    {
                        content: 'PUMA X Batman',
                        _id: uuidv4(),
                        to: '/goodbye-summer',
                    },
                    {
                        content: 'BAPE® X HAVAIANAS',
                        _id: uuidv4(),
                        to: '/minimalism',
                    },
                    {
                        content: 'SKECHERS X WE BARE BEARS',
                        _id: uuidv4(),
                        to: '/denim',
                    },
                ],
            },

            {
                title: 'Trending now',
                _id: uuidv4(),
                links: [
                    {
                        content: 'Monogram',
                        _id: uuidv4(),
                        to: '/goodbye-summer',
                    },
                    {
                        content: 'Quilted Chain Strap Clutch',
                        _id: uuidv4(),
                        to: '/minimalism',
                    },
                ],
            },
        ],
    },
    {
        to: config.routes.women,
        title: 'Nữ',

        subLinks: [
            {
                title: 'Trang phục',
                _id: uuidv4(),
                links: [
                    {
                        content: 'Áo',
                        _id: uuidv4(),
                        to: '/goodbye-summer',
                    },
                    {
                        content: 'Áo Khoác',
                        _id: uuidv4(),
                        to: '/minimalism',
                    },
                    {
                        content: 'Vest & Blazer',
                        _id: uuidv4(),
                        to: '/denim',
                    },
                    {
                        content: 'Quần',
                        _id: uuidv4(),
                        to: '/basketball',
                    },
                    {
                        content: 'Đầm',
                        _id: uuidv4(),
                        to: '/goodbye-summer',
                    },
                    {
                        content: 'Váy',
                        _id: uuidv4(),
                        to: '/minimalism',
                    },
                    {
                        content: 'Đồ Thể Thao',
                        _id: uuidv4(),
                        to: '/denim',
                    },
                    {
                        content: 'Jumpsuits',
                        _id: uuidv4(),
                        to: '/basketball',
                    },
                ],
            },
            {
                title: 'Giày dép',
                _id: uuidv4(),
                links: [
                    {
                        content: 'Dép',
                        _id: uuidv4(),
                        to: '/repedro',
                    },

                    {
                        content: 'Giày Sandals',
                        _id: uuidv4(),
                        to: '/minimalism',
                    },
                    {
                        content: 'Giày Cao Gót',
                        _id: uuidv4(),
                        to: '/denim',
                    },
                    {
                        content: 'Giày Đế Xuồng',
                        _id: uuidv4(),
                        to: '/basketball',
                    },
                    {
                        content: 'Giày Đế Bệt',
                        _id: uuidv4(),
                        to: '/repedro',
                    },

                    {
                        content: 'Giày Lười',
                        _id: uuidv4(),
                        to: '/minimalism',
                    },
                    {
                        content: 'Giày Boots',
                        _id: uuidv4(),
                        to: '/denim',
                    },
                    {
                        content: 'Giày Basketball',
                        _id: uuidv4(),
                        to: '/basketball',
                    },
                    {
                        content: 'Giày Running',
                        _id: uuidv4(),
                        to: '/basketball',
                    },
                    {
                        content: 'Giày Trainning',
                        _id: uuidv4(),
                        to: '/basketball',
                    },
                    {
                        content: 'Giày Walking',
                        _id: uuidv4(),
                        to: '/basketball',
                    },
                    {
                        content: 'Lifestyle Sneakers',
                        _id: uuidv4(),
                        to: '/basketball',
                    },
                    {
                        content: 'Chăm Sóc Giày',
                        _id: uuidv4(),
                        to: '/basketball',
                    },
                ],
            },
            {
                title: 'Túi ví balo',
                _id: uuidv4(),
                links: [
                    {
                        content: 'Ví',
                        _id: uuidv4(),
                        to: '/goodbye-summer',
                    },
                    {
                        content: 'Túi Đeo Chéo',
                        _id: uuidv4(),
                        to: '/minimalism',
                    },
                    {
                        content: 'Túi Đeo Vai',
                        _id: uuidv4(),
                        to: '/denim',
                    },
                    {
                        content: 'Túi Rút Dây',
                        _id: uuidv4(),
                        to: '/goodbye-summer',
                    },
                    {
                        content: 'Túi Đeo Hông',
                        _id: uuidv4(),
                        to: '/minimalism',
                    },
                    {
                        content: 'Túi Xách',
                        _id: uuidv4(),
                        to: '/denim',
                    },
                    {
                        content: 'Túi Tote',
                        _id: uuidv4(),
                        to: '/goodbye-summer',
                    },
                    {
                        content: 'Balo',
                        _id: uuidv4(),
                        to: '/minimalism',
                    },
                    {
                        content: 'Phụ Kiện Túi',
                        _id: uuidv4(),
                        to: '/denim',
                    },
                ],
            },

            {
                title: 'Mắt kính',
                _id: uuidv4(),
                links: [
                    {
                        content: 'Gọng kính',
                        _id: uuidv4(),
                        to: '/goodbye-summer',
                    },
                    {
                        content: 'Kính mát',
                        _id: uuidv4(),
                        to: '/minimalism',
                    },
                ],
            },
            {
                title: 'Phụ kiện',
                _id: uuidv4(),
                links: [
                    {
                        content: 'Mũ Nón',
                        _id: uuidv4(),
                        to: '/goodbye-summer',
                    },
                    {
                        content: 'Tất',
                        _id: uuidv4(),
                        to: '/minimalism',
                    },
                    {
                        content: 'Thắt Lưng',
                        _id: uuidv4(),
                        to: '/goodbye-summer',
                    },
                    {
                        content: 'Trang Sức',
                        _id: uuidv4(),
                        to: '/minimalism',
                    },
                    {
                        content: 'Khăn Choàng',
                        _id: uuidv4(),
                        to: '/goodbye-summer',
                    },
                    {
                        content: 'Phụ Kiện Khác',
                        _id: uuidv4(),
                        to: '/minimalism',
                    },
                ],
            },
        ],
    },
    {
        to: config.routes.men,
        title: 'Nam',
        subLinks: [
            {
                title: 'Trang phục',
                _id: uuidv4(),
                links: [
                    {
                        content: 'Áo',
                        _id: uuidv4(),
                        to: '/goodbye-summer',
                    },
                    {
                        content: 'Áo Khoác',
                        _id: uuidv4(),
                        to: '/minimalism',
                    },
                    {
                        content: 'Vest & Blazer',
                        _id: uuidv4(),
                        to: '/denim',
                    },
                    {
                        content: 'Quần',
                        _id: uuidv4(),
                        to: '/basketball',
                    },
                    {
                        content: 'Đồ Thể Thao',
                        _id: uuidv4(),
                        to: '/goodbye-summer',
                    },
                ],
            },
            {
                title: 'Giày dép',
                _id: uuidv4(),
                links: [
                    {
                        content: 'Dép',
                        _id: uuidv4(),
                        to: '/repedro',
                    },
                    {
                        content: 'Giày Sandals',
                        _id: uuidv4(),
                        to: '/repedro',
                    },
                    {
                        content: 'Giày Lười',
                        _id: uuidv4(),
                        to: '/repedro',
                    },
                    {
                        content: 'Giày Tây',
                        _id: uuidv4(),
                        to: '/repedro',
                    },
                    {
                        content: 'Giày Boots',
                        _id: uuidv4(),
                        to: '/repedro',
                    },
                    {
                        content: 'Giày Basketball',
                        _id: uuidv4(),
                        to: '/repedro',
                    },
                    {
                        content: 'Giày Running',
                        _id: uuidv4(),
                        to: '/repedro',
                    },
                    {
                        content: 'Giày Trainning',
                        _id: uuidv4(),
                        to: '/repedro',
                    },
                    {
                        content: 'Giày Walking',
                        _id: uuidv4(),
                        to: '/repedro',
                    },
                    {
                        content: 'Lifestyle Sneakers',
                        _id: uuidv4(),
                        to: '/repedro',
                    },
                    {
                        content: 'Chăm Sóc Giày',
                        _id: uuidv4(),
                        to: '/repedro',
                    },
                ],
            },

            {
                title: 'Túi ví balo',
                _id: uuidv4(),
                links: [
                    {
                        content: 'Ví',
                        _id: uuidv4(),
                        to: '/goodbye-summer',
                    },
                    {
                        content: 'Túi Đeo Chéo',
                        _id: uuidv4(),
                        to: '/minimalism',
                    },
                    {
                        content: 'Túi Đeo Vai',
                        _id: uuidv4(),
                        to: '/denim',
                    },
                    {
                        content: 'Cặp Xách',
                        _id: uuidv4(),
                        to: '/goodbye-summer',
                    },
                    {
                        content: 'Balo',
                        _id: uuidv4(),
                        to: '/minimalism',
                    },
                    {
                        content: 'Túi Đeo Hông',
                        _id: uuidv4(),
                        to: '/denim',
                    },
                ],
            },
            {
                title: 'Mắt kính',
                _id: uuidv4(),
                links: [
                    {
                        content: 'Gọng kính',
                        _id: uuidv4(),
                        to: '/goodbye-summer',
                    },
                    {
                        content: 'Kính mát',
                        _id: uuidv4(),
                        to: '/minimalism',
                    },
                ],
            },
            {
                title: 'Phụ kiện',
                _id: uuidv4(),
                links: [
                    {
                        content: 'Mũ Nón',
                        _id: uuidv4(),
                        to: '/goodbye-summer',
                    },
                    {
                        content: 'Tất',
                        _id: uuidv4(),
                        to: '/minimalism',
                    },
                    {
                        content: 'Thắt Lưng',
                        _id: uuidv4(),
                        to: '/goodbye-summer',
                    },
                    {
                        content: 'Phụ Kiện Khác',
                        _id: uuidv4(),
                        to: '/goodbye-summer',
                    },
                ],
            },
        ],
    },
    {
        to: config.routes.kids,
        title: 'Kids',
        subLinks: [
            {
                title: 'DÀNH CHO BÉ',
                _id: uuidv4(),
                links: [
                    {
                        content: 'HÀNG MỚI NHẤT',
                        _id: uuidv4(),
                        to: '/goodbye-summer',
                    },
                    {
                        content: 'XU HƯỚNG',
                        _id: uuidv4(),
                        to: '/minimalism',
                    },
                ],
            },
            {
                title: 'THƯƠNG HIỆU',
                _id: uuidv4(),
                links: [
                    {
                        content: 'SKECHERS',
                        _id: uuidv4(),
                        to: '/repedro',
                    },

                    {
                        content: 'CHARLES & KEITH',
                        _id: uuidv4(),
                        to: '/minimalism',
                    },
                    {
                        content: 'PEDRO',
                        _id: uuidv4(),
                        to: '/denim',
                    },
                    {
                        content: 'HAVAIANAS',
                        _id: uuidv4(),
                        to: '/basketball',
                    },
                    {
                        content: 'PUMA',
                        _id: uuidv4(),
                        to: '/basketball',
                    },
                    {
                        content: 'MLB',
                        _id: uuidv4(),
                        to: '/basketball',
                    },
                ],
            },

            {
                title: 'BÉ GÁI',
                _id: uuidv4(),
                links: [
                    {
                        content: 'SKECHERS',
                        _id: uuidv4(),
                        to: '/goodbye-summer',
                    },
                    {
                        content: 'CHARLES & KEITH',
                        _id: uuidv4(),
                        to: '/minimalism',
                    },
                    {
                        content: 'PEDRO',
                        _id: uuidv4(),
                        to: '/denim',
                    },
                    {
                        content: 'HAVAIANAS',
                        _id: uuidv4(),
                        to: '/goodbye-summer',
                    },
                    {
                        content: 'PUMA',
                        _id: uuidv4(),
                        to: '/minimalism',
                    },
                    {
                        content: 'MLB',
                        _id: uuidv4(),
                        to: '/denim',
                    },
                ],
            },
            {
                title: 'BÉ TRAI',
                _id: uuidv4(),
                links: [
                    {
                        content: 'SKECHERS',
                        _id: uuidv4(),
                        to: '/goodbye-summer',
                    },
                    {
                        content: 'PEDRO',
                        _id: uuidv4(),
                        to: '/denim',
                    },
                    {
                        content: 'HAVAIANAS',
                        _id: uuidv4(),
                        to: '/goodbye-summer',
                    },
                    {
                        content: 'PUMA',
                        _id: uuidv4(),
                        to: '/minimalism',
                    },
                    {
                        content: 'MLB',
                        _id: uuidv4(),
                        to: '/denim',
                    },
                ],
            },
        ],
    },
    {
        to: config.routes.trademark,
        title: 'Thương Hiệu',
        subLinks: [
            {
                title: 'All brands',
                _id: uuidv4(),
                links: [
                    {
                        content: 'CHARLES & KEITH',
                        _id: uuidv4(),
                        to: '/goodbye-summer',
                    },
                    {
                        content: 'PEDRO',
                        _id: uuidv4(),
                        to: '/minimalism',
                    },
                    {
                        content: 'MLB',
                        _id: uuidv4(),
                        to: '/denim',
                    },
                    {
                        content: 'PUMA',
                        _id: uuidv4(),
                        to: '/basketball',
                    },
                    {
                        content: 'HAVAIANAS',
                        _id: uuidv4(),
                        to: '/basketball',
                    },
                ],
            },
            {
                title: '',
                _id: uuidv4(),
                links: [
                    {
                        content: 'SKECHERS',
                        _id: uuidv4(),
                        to: '/repedro',
                    },

                    {
                        content: 'MARHEN. J',
                        _id: uuidv4(),
                        to: '/minimalism',
                    },
                    {
                        content: 'DSQUARED2',
                        _id: uuidv4(),
                        to: '/denim',
                    },
                    {
                        content: 'COACH',
                        _id: uuidv4(),
                        to: '/basketball',
                    },
                    {
                        content: 'CECI',
                        _id: uuidv4(),
                        to: '/repedro',
                    },
                ],
            },
            {
                title: '',
                _id: uuidv4(),
                links: [
                    {
                        content: 'GIGI',
                        _id: uuidv4(),
                        to: '/goodbye-summer',
                    },
                    {
                        content: 'LE SILLA',
                        _id: uuidv4(),
                        to: '/minimalism',
                    },
                    {
                        content: 'MAX&Co.',
                        _id: uuidv4(),
                        to: '/denim',
                    },
                    {
                        content: 'MUJOSH',
                        _id: uuidv4(),
                        to: '/denim',
                    },
                    {
                        content: 'PINKO',
                        _id: uuidv4(),
                        to: '/denim',
                    },
                ],
            },

            {
                title: '',
                _id: uuidv4(),
                links: [
                    {
                        content: 'TED BAKER',
                        _id: uuidv4(),
                        to: '/goodbye-summer',
                    },
                    {
                        content: 'THE KOOPLES',
                        _id: uuidv4(),
                        to: '/minimalism',
                    },
                    {
                        content: 'WEEKEND MAXMARA',
                        _id: uuidv4(),
                        to: '/minimalism',
                    },
                ],
            },
        ],
    },
    {
        to: config.routes.sale,
        title: 'Sale',
        class: 'discount',
        subLinks: [
            {
                title: 'All brands',
                _id: uuidv4(),
                links: [
                    {
                        content: 'PEDRO',
                        _id: uuidv4(),
                        to: '/goodbye-summer',
                    },
                    {
                        content: 'MLB',
                        _id: uuidv4(),
                        to: '/minimalism',
                    },
                    {
                        content: 'PUMA',
                        _id: uuidv4(),
                        to: '/denim',
                    },
                    {
                        content: 'HAVAIANAS',
                        _id: uuidv4(),
                        to: '/basketball',
                    },
                    {
                        content: 'SKECHERS',
                        _id: uuidv4(),
                        to: '/basketball',
                    },
                ],
            },
            {
                title: '',
                _id: uuidv4(),
                links: [
                    {
                        content: 'MARHEN.J',
                        _id: uuidv4(),
                        to: '/repedro',
                    },

                    {
                        content: 'DSQUARED2',
                        _id: uuidv4(),
                        to: '/minimalism',
                    },
                    {
                        content: 'COACH',
                        _id: uuidv4(),
                        to: '/denim',
                    },
                    {
                        content: 'GIGI',
                        _id: uuidv4(),
                        to: '/basketball',
                    },
                    {
                        content: 'MAX&Co.',
                        _id: uuidv4(),
                        to: '/repedro',
                    },
                ],
            },
            {
                title: '',
                _id: uuidv4(),
                links: [
                    {
                        content: 'MUJOSH',
                        _id: uuidv4(),
                        to: '/goodbye-summer',
                    },
                    {
                        content: 'TED BAKER',
                        _id: uuidv4(),
                        to: '/minimalism',
                    },
                    {
                        content: 'THE KOOPLES',
                        _id: uuidv4(),
                        to: '/denim',
                    },
                    {
                        content: 'AOJO',
                        _id: uuidv4(),
                        to: '/denim',
                    },
                    {
                        content: 'CECI',
                        _id: uuidv4(),
                        to: '/denim',
                    },
                ],
            },

            {
                title: '',
                _id: uuidv4(),
                links: [
                    {
                        content: 'TOPMAN',
                        _id: uuidv4(),
                        to: '/goodbye-summer',
                    },
                    {
                        content: 'TOPSHOP',
                        _id: uuidv4(),
                        to: '/minimalism',
                    },
                    {
                        content: 'WEEKEND MAXMARA',
                        _id: uuidv4(),
                        to: '/minimalism',
                    },
                    {
                        content: 'PINKO',
                        _id: uuidv4(),
                        to: '/minimalism',
                    },
                ],
            },
        ],
    },
];
