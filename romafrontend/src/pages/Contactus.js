import Header from "../components/Headernew";
import Footer from "../components/Footer";
import Latest from "../components/Latest";
import Ad from "../components/Ad";
import "../style/style.css";
import Latestnoimg from "../components/Latestnoimg";

export default function Adwithus() {
  return (
    <>
      <Header />
      <div className="allpage_outer">
        <div className="allpage_main">
          <div className="allpage_main_col1">
            <div className="adwithus_main_col1_row">
              <h3>Contact uas</h3>
              <p>To dkvmlksdnvldsfkjvnsdfnvklsdnfvk</p>
            </div>

            <div className="adwithus_main_col1_row">
              <div className="adwithus_adform_outer">
                <div className="adwithus_adform_outer_row">
                  <div className="adwithus_adform_outer_row_col1">
                    <label>Name</label>
                    <input type="text" required="required" />
                  </div>
                </div>
                <div className="adwithus_adform_outer_row">
                  <div className="adwithus_adform_outer_row_col">
                    <label>Email</label>
                    <input type="email" required="required" />
                  </div>
                  <div className="adwithus_adform_outer_row_col">
                    <label>Phone</label>
                    <input type="number" required="required" />
                  </div>
                </div>
                <div className=" adwithus_adform_outer_row_col1">
                  <textarea></textarea>
                </div>
                <div className=" adwithus_adform_outer_row">
                  <div className=" adwithus_adform_outer_row_col2">
                    <input type="checkbox" />
                    <label>Im not a Robot</label>
                  </div>
                  <div className=" adwithus_adform_outer_row_col2">
                    <img src={require("../images/captcha.png")} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="allpage_main_col2">
            <div className="adwithus_main_col2_row">
              <Latestnoimg />
            </div>
            <div className="adwithus_main_col2_row">
              <Ad />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
