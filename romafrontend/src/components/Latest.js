import Matchday from "../images/matchday.jpg";
import "../style/style.css";
export default function Latest() {
  return (
    <div className="latest_outer">
      <div className="latest_gallery">
        <div
          className="latest_gallery_col2"
          style={{
            backgroundImage: `url(${Matchday})`,
          }}
        >
          <div className="image_textposition">
            <p> just in time</p>
          </div>
        </div>
        <div className="latest_gallery_col1">
          <div className="latest_gallery_col1_row1">
            <div
              className="latest_gallery_col1_row1_col1"
              style={{
                backgroundImage: `url(${Matchday})`,
              }}
            >
              <div className=" image_textposition">
                <p> just in time</p>
              </div>
            </div>

            <div
              className="latest_gallery_col1_row1_col2"
              style={{
                backgroundImage: `url(${Matchday})`,
              }}
            >
              <div className="image_textposition">
                <p> just in time</p>
              </div>
            </div>
          </div>
          <div className="latest_gallery_col1_row2">
            <div
              className="latest_gallery_col1_row2_col1"
              style={{
                backgroundImage: `url(${Matchday})`,
              }}
            >
              <div className="image_textposition">
                <p> just in time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
