import "../style/style.css";

export default function Latestnoimg() {
  return (
    <div className="latestnoimg_outer">
      <div className="latestnoimg_outer_header">LATESTNEWS</div>
      <div className="latestnoimg_row">
        <img src={require('../images/list.png')}></img>
        <div className="image_textposition">
          <p> just in time</p>
        </div>
      </div>
      <div className="latestnoimg_row">
        <img src={require('../images/list.png')}></img>
        <div className="image_textposition">
          <p> just in time</p>
        </div>
      </div>
      <div className="latestnoimg_row">
        <img src={require('../images/list.png')}></img>
        <div className="image_textposition">
          <p> just in time</p>
        </div>
      </div>
      <div className="latestnoimg_row">
        <img src={require('../images/list.png')}></img>
        <div className="image_textposition">
          <p> just in time</p>
        </div>
      </div>
    </div>
  );
}
