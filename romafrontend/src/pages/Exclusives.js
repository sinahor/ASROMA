import "../style/style.css";
import Header from "../components/Headermember";
import Footer from "../components/Footer.js";
import Exclusive from "../components/Exclusive";
import Deals from "../components/Deals";
import Earlyaccess from "../components/Earlyaccess";

export default function Exclusives() {
  return (
    <>
      
      <Header />
      <div className="allpage_outer">
        <div className="allpage_main">
          <div className="allpage_main_col1">
            <div className="exclusives_main_col1_row">
              <Earlyaccess />
            </div>
            <div className="exclusives_main_col1_row">
              <Exclusive />
            </div>
          </div>
          <div className="allpage_main_col2">
            <div className="exclusives_main_col2_row">
              <Deals />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
