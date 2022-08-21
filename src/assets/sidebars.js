import {
    HelpIcon,
    LocationActiveIcon,
    LocationIcon,
    LogoutIcon,
    MailIcon,
    RoundedIcon,
    TruckActiveIcon,
    TruckIcon,
    UserActiveIcon,
    UserIcon,
    ValiIcon,
} from '../components/Icons';
import config from '../config';

export const sidebars = [
    {
        icon: <UserIcon />,
        iconActive: <UserActiveIcon />,
        title: 'Thông tin cá nhân',
        to: config.routes.account,
    },
    {
        icon: <TruckIcon />,
        iconActive: <TruckActiveIcon />,
        title: 'Đơn hàng',
        to: config.routes.order,
    },
    {
        icon: <LocationIcon />,
        iconActive: <LocationActiveIcon />,
        title: 'Địa chỉ',
        to: config.routes.address,
    },
    {
        icon: <RoundedIcon />,
        iconActive: <RoundedIcon />,
        title: 'Đã xem gần đây',
        to: config.routes.recentlyViewed,
    },
    {
        icon: <MailIcon />,
        iconActive: <MailIcon />,
        title: 'Đăng kí nhận thông báo',
        to: config.routes.receiveNotify,
    },
    {
        icon: <HelpIcon />,
        iconActive: <HelpIcon />,
        title: 'Trợ giúp',
        to: config.routes.help,
    },
    {
        icon: <ValiIcon />,
        iconActive: <ValiIcon />,
        title: 'Trở thành đối tác B2B',
        to: config.routes.partner,
    },
    {
        icon: <LogoutIcon />,
        iconActive: <LogoutIcon />,
        title: 'Đăng xuất',
        to: config.routes.logout,
    },
];
