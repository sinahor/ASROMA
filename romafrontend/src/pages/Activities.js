import Header from "../components/Headermember";
import Footer from "../components/Footer";
import Ad from "../components/Ad";
import Upload from "../components/Upload";
import Deals from "../components/Deals";
import Score from "../components/score";
import "../style/style.css";

export default function Activities() {
  return (
    <>
     
        <Header />
        <div className="allpage_outer">
        <div className="allpage_main">
          <div className="allpage_main_col1">
            <div className="activities_main_col1_row">
              <label>My recent activities</label>
              <ul>
                <li>
                  <div>
                    <label>Your views</label>
                    <ul>
                      <li>lkjfv</li>
                      <li>SDKJVhb</li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div>
                    <label>Your Uploads</label>
                    <ul>
                      <li>lkjfv</li>
                      <li>SDKJVhb</li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div>
                    <label>Your Comments</label>
                    <ul>
                      <li>lkjfv</li>
                      <li>SDKJVhb</li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div>
                    <label>Your Predictions</label>{" "}
                    <ul>
                      <li>lkjfv</li>
                      <li>SDKJVhb</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="activities_main_col1_row">
              <Upload />
            </div>
          </div>
          <div className="allpage_main_col2">
            <div className="activities_main_col2_row">
              <Ad />
            </div>
            <div className="activities_main_col2_row">
              <Deals />
            </div>
            <div className="activities_main_col2_row">
              <Score />
            </div>
          </div>
        </div>

        
      </div>
      <Footer />
    </>
  );
}
