import "../style/style.css";
import Matchday from "../images/matchday.jpg";

export default function Deals() {
  return (
    <div>
      <div className="deals_container">
        <div className="deals_main">
          <div className="deals_main_header">DEALS</div>
          <div
            className="deals_main_image"
            style={{
              backgroundImage: `url(${Matchday})`,
            }}
          >
            <p>ajsbd</p>
            <button>Buynow</button>
          </div>
          <div className="deals_main_footer">DealFOOTER</div>
        </div>
        <div className="deals_main">
          <div className="deals_main_header">DEALS</div>
          <div
            className="deals_main_image"
            style={{
              backgroundImage: `url(${Matchday})`,
            }}
          >
            <p>ajsbd</p>
            <button>Buynow</button>
          </div>
          <div className="deals_main_footer">DealFOOTER</div>
        </div>
        <div className="deals_main">
          <div className="deals_main_header">DEALS</div>
          <div
            className="deals_main_image"
            style={{
              backgroundImage: `url(${Matchday})`,
            }}
          >
            <p>ajsbd</p>
            <button>Buynow</button>
          </div>
          <div className="deals_main_footer">DealFOOTER</div>
        </div>
        <div className="deals_main">
          <div className="deals_main_header">DEALS</div>
          <div
            className="deals_main_image"
            style={{
              backgroundImage: `url(${Matchday})`,
            }}
          >
            <p>ajsbd</p>
            <button>Buynow</button>
          </div>
          <div className="deals_main_footer">DealFOOTER</div>
        </div>
      </div>
    </div>
  );
}
