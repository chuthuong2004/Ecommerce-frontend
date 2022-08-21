import styles from './Policy.module.scss';
import classNames from 'classnames/bind';

import FooterMain from '../../layouts/components/FooterMain';
import SocialFooter from '../../layouts/components/SocialFooter';
const cx = classNames.bind(styles);
const Policy = () => {
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <h1>Chính sách bảo mật</h1>
                    <p>
                        Công ty cổ phần Maison cam kết sẽ bảo mật những thông tin mang tính riêng tư của bạn. Bạn vui
                        lòng đọc bản “Chính sách bảo mật” dưới đây để hiểu hơn những cam kết mà chúng tôi thực hiện,
                        nhằm tôn trọng và bảo vệ quyền lợi của người truy cập:
                    </p>
                    <strong>Sử dụng thông tin cá nhân</strong>
                    <p>
                        Chúng tôi thu thập và sử dụng thông tin cá nhân của bạn với mục đích phù hợp và hoàn toàn tuân
                        thủ nội dung của “Chính sách bảo mật” này.
                    </p>
                    <p>
                        Khi cần thiết, chúng tôi có thể sử dụng những thông tin này để liên hệ trực tiếp với bạn dưới
                        các hình thức như: gởi thư ngỏ, đơn đặt hàng, thư cảm ơn, thông tin về khuyến mãi và hàng mới
                        về…
                    </p>
                    <strong>Chia sẻ thông tin cá nhân</strong>
                    <p>
                        Ngoại trừ các trường hợp về sử dụng thông tin cá nhân như đã nêu trong chính sách này, chúng tôi
                        cam kết sẽ không tiết lộ thông tin cá nhân bạn ra ngoài. Chúng tôi có thể tiết lộ hoặc cung cấp
                        thông tin cá nhân của bạn trong các trường hợp thật sự cần thiết như sau:
                    </p>
                    <div>(a) Khi có yêu cầu của các cơ quan pháp luật; </div>
                    <div>
                        (b) Trong trường hợp mà chúng tôi tin rằng điều đó sẽ giúp chúng tôi bảo vệ quyền lợi chính đáng
                        của mình trước pháp luật;
                    </div>
                    <div>
                        (c) Tình huống khẩn cấp và cần thiết để bảo vệ quyền an toàn cá nhân của các thành viên khác.
                    </div>
                    <strong>bảo mật thông tin cá nhân</strong>
                    <p>
                        Công ty cổ phần Maison cam kết bảo mật thông tin cá nhân của bạn bằng mọi cách thức có thể.
                        Chúng tôi sẽ sử dụng nhiều công nghệ bảo mật thông tin khác nhau nhằm bảo vệ thông tin này không
                        bị truy lục, sử dụng hoặc tiết lộ ngoài ý muốn.
                    </p>
                    <strong>Quy định về "spam"</strong>
                    <p>
                        Công ty cổ phần Maison thực sự quan ngại đến vấn nạn Spam (thư rác), các Email giả mạo danh tín
                        chúng tôi gởi đi. Do đó, chúng tôi khẳng định chỉ gởi Email đến bạn khi và chỉ khi bạn có đăng
                        ký hoặc sử dụng dịch vụ từ hệ thống của chúng tôi.
                    </p>
                    <p>
                        Công ty cổ phần Maison cam kết không bán, thuê lại hoặc cho thuê email của bạn từ bên thứ ba.
                        Nếu bạn vô tình nhận được Email không theo yêu cầu từ hệ thống chúng tôi do một nguyên nhân
                        ngoài ý muốn, xin vui lòng nhấn vào link từ chối nhận Email này kèm theo, hoặc thông báo trực
                        tiếp đến trung tâm hỗ trợ khách hàng.
                    </p>
                    <strong>THÔNG TIN LIÊN HỆ</strong>
                    <p>
                        Chúng tôi luôn hoan nghênh các ý kiến đóng góp, liên hệ và phản hồi thông tin từ bạn về “Chính
                        sách bảo mật” này. Nếu bạn có những thắc mắc liên quan xin vui lòng liên hệ theo địa chỉ Email:
                        customercare@maisonjsc.com.
                    </p>
                </div>
            </div>
            <SocialFooter />
            <FooterMain />
        </>
    );
};

export default Policy;
