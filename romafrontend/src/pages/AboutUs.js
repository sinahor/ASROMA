import Header from "../components/Headernew";
import Footer from "../components/Footer";
import Latest from "../components/Latest";

import Ad from "../components/Ad";
import "../style/style.css";
import Latestnoimg from "../components/Latestnoimg";
export default function About() {
  return (
    <div>
      <Header />
      <div className="allpage_outer">
        <div className="allpage_main">
          <div className="allpage_main_col1">
            <div className="about_main_col1_row">
              <div className="about_main_col1_row_wrapper">
                <div className="about_main_col1_row_colleft">
                  <h3>We are </h3>
                  <img src={require("../images/logo.png")} />
                </div>
                <div className="about_main_col1_row_colright">
                  <p>basjdhbLSJDBvjSBDvjlBDSHv</p>
                  <p>skdjbfksdjbvksjdbvsd</p>
                  <p>dsbjsdvoiadbvoiadfbviadfoiv</p>
                </div>
              </div>
            </div>

            <div className="about_main_col1_row2">
              <h3>Meet the team</h3>
              <div className="about_main_col1_row2_container">
                <div className="about_main_col1_row2_inner1">
                  <div className="about_main_col1_row2_inner_row">
                    <img src={require("../images/logo.png")} />
                    <div className="about_main_col1_row2_inner_colpart">
                      <h2>Mike Ross</h2>
                      <p>traveller</p>
                      <p>
                        Some text that describes me lorem ipsum ipsum lorem.
                      </p>
                    </div>
                  </div>{" "}
                  <div className="about_main_col1_row2_inner_row">
                    <img src={require("../images/logo.png")} />
                    <div className="about_main_col1_row2_inner_colpart">
                      <h2>Mike Ross</h2>
                      <p>traveller</p>
                      <p>
                        Some text that describes me lorem ipsum ipsum lorem.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="about_main_col1_row2_inner2">
                  <div className="about_main_col1_row2_inner_row">
                    <img src={require("../images/logo.png")} />
                    <div className="about_main_col1_row2_inner_colpart">
                      <h2>Mike Ross</h2>
                      <p>traveller</p>
                      <p>
                        Some text that describes me lorem ipsum ipsum lorem.
                      </p>
                    </div>
                  </div>{" "}
                  <div className="about_main_col1_row2_inner_row">
                    <img src={require("../images/logo.png")} />
                    <div className="about_main_col1_row2_inner_colpart">
                      <h2>Mike Ross</h2>
                      <p>traveller</p>
                      <p>
                        Some text that describes me lorem ipsum ipsum lorem.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="about_main_col1_row2_inner3">
                  <div className="about_main_col1_row2_inner_row">
                    <img src={require("../images/logo.png")} />
                    <div className="about_main_col1_row2_inner_colpart">
                      <h2>Mike Ross</h2>
                      <p>traveller</p>
                      <p>
                        Some text that describes me lorem ipsum ipsum lorem.
                      </p>
                    </div>
                  </div>{" "}
                  <div className="about_main_col1_row2_inner_row">
                    <img src={require("../images/logo.png")} />
                    <div className="about_main_col1_row2_inner_colpart">
                      <h2>Mike Ross</h2>
                      <p>traveller</p>
                      <p>
                        Some text that describes me lorem ipsum ipsum lorem.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="allpage_main_col2">
            <div className="about_main_col2_row">
              <Latestnoimg />
            </div>
            <div className="about_main_col2_row">
              <Ad />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
