import {
  Copyright,
  Footer,
  ToTop,
} from '../../../styles/components/Desktop/Layout/MainFooter';

function MainFooter() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Footer>
      <ToTop onClick={scrollToTop}>Back To Top ↑</ToTop>
      <Copyright>
        <div>All Photos © MEDA, 2023</div>
        <div>
          Web Designed & Built by{' '}
          <a href="https://www.briansuruki.com/" target="_blank">
            Brian Suruki
          </a>
          , 2023
        </div>
      </Copyright>
    </Footer>
  );
}

export default MainFooter;
