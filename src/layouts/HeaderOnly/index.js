import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import Header from './../components/Header/Header';
function HeaderOnly({ children }) {
    return (
        <div>
            <ScrollToTop />
            <Header />
            <div className="container">
                <div className="content"> {children} </div>
            </div>
        </div>
    );
}

export default HeaderOnly;
