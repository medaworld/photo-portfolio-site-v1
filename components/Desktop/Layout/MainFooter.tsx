import {
  Copyright,
  Footer,
  ToTop,
} from '../../../styles/components/Desktop/Layout/MainFooter';

function MainFooter() {
  return (
    <Footer>
      <ToTop href="#top">Back To Top ↑</ToTop>
      <Copyright>
        <div>All Photos © MEDA, 2023</div>
        <div>Web Designed & Built by Brian Suruki, 2023</div>
      </Copyright>
    </Footer>
  );
}

export default MainFooter;
