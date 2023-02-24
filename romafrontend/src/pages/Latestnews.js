import "../style/style.css";
import Header from "../components/Headernew.js";
import Footer from "../components/Footer.js";
import Latest from "../components/Latest";
import gallery from "../images/gallery.jpg";
import Ad from "../components/Ad";
import Score from "../components/score";
export default function Latestnews() {
  return (
    <>
      <Header />
      <div className="latestnews_container">
        <div className="allpage_outer">
          <div className="latestnews_main_tile">
            <Latest />
          </div>
          <div className="allpage_main">
            <div className="latestnews_main_body">
              <div className="allpage_main_col1">
                <div className="latestnews_main_col1_row">
                  <h3>Latest News</h3>
                  <div className="latestnews_main_col1_row1_item">
                    <div
                      className="latestnews_main_col1_row1_item_col1"
                      style={{
                        backgroundImage: `url(${gallery})`
                      }}
                    ></div>
                    <div className="latestnews_main_col1_row1_item_col2">
                      <h6>jsdhbjSbdhv</h6>
                      <p>time</p>
                      <p>content</p>
                      <p>by</p>
                    </div>
                  </div>
                  <div className="latestnews_main_col1_row1_item">
                    <div
                      className="latestnews_main_col1_row1_item_col1"
                      style={{
                        backgroundImage: `url(${gallery})`,
                      }}
                    ></div>
                    <div className="latestnews_main_col1_row1_item_col2">
                      <h6>jsdhbjSbdhv</h6>
                      <p>time</p>
                      <p>content</p>
                      <p>by</p>
                    </div>
                  </div>
                  <div className="latestnews_main_col1_row1_item">
                    <div
                      className="latestnews_main_col1_row1_item_col1"
                      style={{
                        backgroundImage: `url(${gallery})`,
                      }}
                    ></div>
                    <div className="latestnews_main_col1_row1_item_col2">
                      <h6>jsdhbjSbdhv</h6>
                      <p>time</p>
                      <p>content</p>
                      <p>by</p>
                    </div>
                  </div>
                  <div className="latestnews_main_col1_row1_item">
                    <div
                      className="latestnews_main_col1_row1_item_col1"
                      style={{
                        backgroundImage: `url(${gallery})`,
                      }}
                    ></div>
                    <div className="latestnews_main_col1_row1_item_col2">
                      <h6>jsdhbjSbdhv</h6>
                      <p>time</p>
                      <p>content</p>
                      <p>by</p>
                    </div>
                  </div>
                  <div className="latestnews_main_col1_row1_item">
                    <div
                      className="latestnews_main_col1_row1_item_col1"
                      style={{
                        backgroundImage: `url(${gallery})`,
                      }}
                    ></div>
                    <div className="latestnews_main_col1_row1_item_col2">
                      <h6>jsdhbjSbdhv</h6>
                      <p>time</p>
                      <p>content</p>
                      <p>by</p>
                    </div>
                  </div>
                  <div className="latestnews_main_col1_row_btn">
                    <button>More News</button>
                  </div>
                </div>
                <div className="latestnews_main_col1_row">
                  <h3>Featured stories</h3>
                  <div className="latestnews_opinions">
                    <div className="latestnews_opinions_col1">
                      <div
                        className="latestnews_opinions_col1_row"
                        style={{
                          backgroundImage: `url(${gallery})`,
                        }}
                      >
                        <p>kjsdhjhSBD</p>
                      </div>
                      <div
                        className="latestnews_opinions_col1_row"
                        style={{
                          backgroundImage: `url(${gallery})`,
                        }}
                      >
                        <p>kjsdhjhSBD</p>
                      </div>
                    </div>
                    <div
                      className="latestnews_opinions_col2"
                      style={{
                        backgroundImage: `url(${gallery})`,
                      }}
                    >
                      <p>kjsdhjhSBD</p>
                    </div>
                  </div>
                </div>
                <div className="latestnews_main_col1_row">
                  <h3>Archives</h3>
                  <div className="latestnews_main_col1_row1_item">
                    <div
                      className="latestnews_main_col1_row1_item_col1"
                      style={{
                        backgroundImage: `url(${gallery})`,
                      }}
                    ></div>
                    <div className="latestnews_main_col1_row1_item_col2">
                      <h6>jsdhbjSbdhv</h6>
                      <p>time</p>
                      <p>content</p>
                    </div>
                  </div>
                  <div className="latestnews_main_col1_row1_item">
                    <div
                      className="latestnews_main_col1_row1_item_col1"
                      style={{
                        backgroundImage: `url(${gallery})`,
                      }}
                    ></div>
                    <div className="latestnews_main_col1_row1_item_col2">
                      <h6>jsdhbjSbdhv</h6>
                      <p>time</p>
                      <p>content</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="allpage_main_col2">
                <div className="latestnews_main_col2_ad">
                  <Ad />
                </div>
                <div className="latestnews_main_col2_score">
                  <Score />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
