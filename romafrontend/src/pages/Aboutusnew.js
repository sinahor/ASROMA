import "../style/style.css";
import Header from "../components/Headernew";
import Footer from "../components/Footer";
import Latest from "../components/Latest";
import Ad from "../components/Ad";

export default function Aboutusnew() {
  return (
    <>
    <Header />
   
      
      <div className="video">
        <video
          autoplay="autoplay"
          controls="all"
          loop="true"
          autoPlay
          muted
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: "-1",
          }}
        >
          <source src={require("../videos/roma.mp4")} type="video/mp4" />
          Your browser does not support HTML video.
        </video>
        <div className="video_row">
          <div className="video_row_col1" >About us</div>{" "}
          <div className="video_row_col2"></div>
        </div>

        <div className="video_row">
          <div className="video_row_col1">Our Team</div>{" "}
          <div className="video_row_col2"> </div>
        </div>
        <div className="video_row">
          <div className="video_row_col1">Contact us</div>{" "}
          <div className="video_row_col2"></div>{" "}
        </div>
      </div>

     
    
     <Footer />
     </>
  );
}
