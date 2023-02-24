import "../style/style.css";
import Matchday from '../images/matchday.jpg';

export default function Ad() {
  return (
    <div>
      <div className="ad_container">
        <div className="ad_main">
          <div className="ad_main_header">ADTITLE</div>
          <div className="ad_main_image" style={{
            backgroundImage: `url(${Matchday})`,
          }}>
            <p>ajsbd</p>
          </div>
          <div className="ad_main_footer">AdFooter</div>
        </div>
        <div className="ad_main">
          <div className="ad_main_header">ADTITLE</div>
          <div className="ad_main_image" style={{
            backgroundImage: `url(${Matchday})`,
          }}>
            <p>ajsbd</p>
          </div>
          <div className="ad_main_footer">AdFooter</div>
        </div>
      </div>
    </div>
  );
}



