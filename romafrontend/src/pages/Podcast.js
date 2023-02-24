import Header from "../components/Headernew";
import Footer from "../components/Footer";
import Latest from "../components/Latest";
import Ad from "../components/Ad";
import "../style/style.css";
import Latestnoimg from "../components/Latestnoimg";

export default function Podcast() {
  return (
    <>
      <Header />
      <div className="allpage_outer">
        <div className="allpage_main">
          <div className="allpage_main_col1">
            <div className="podcast_main_col1_row">
              <h3>IMASROMA PODCAST</h3>
              <h6>Hosted by fans for fans</h6>
              <p>
                we provide you with the opportunity to interact with fans like
                yourselves,share views ,ideas and your passion for ASROMA
              </p>
            </div>

            <div className="podcast_main_col1_row">
              <div className="podcast_list_outer">
                <div className="podcast_list_outer_row">
                  Main display podcast
                  <div className="podcast_list_outer_row_col">
                    <ul>
                      <label>list of podcast</label>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="allpage_main_col2">
            <div className="podcast_main_col2_row">
              <Latestnoimg />
            </div>
            <div className="podcast_main_col2_row">
              <Ad />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
