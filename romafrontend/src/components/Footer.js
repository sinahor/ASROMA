import "../style/style.css";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate=useNavigate();
  const handleAdClick=()=>{
    navigate('/ad')
  }
  const handleContactClick=()=>{
    navigate('/contact')
  }
  const handleArchiveClick=()=>{
    navigate('/archive')
  }
  const handleSiteClick=()=>{
    navigate('/sitemap')
  }



  return (
    <div>
      <div className="footer_main_container">
        <div className="footer_main_container_row1">
          <div className="footer_main_container_col1">
            <button onClick={(e)=>{handleAdClick(e)}}>Advertise with us</button>
            <button onClick={(e)=>{handleContactClick(e)}}>Contact us</button>
          </div>
          <div className="footer_main_container_col2">
            <button onClick={(e)=>{handleArchiveClick(e)}}>Archives</button>
            <button onClick={(e)=>{handleSiteClick(e)}}>Sitemap</button>
          </div>
        </div>
        <div className="footer_main_container_row2">
          <img src={require("../images/footerlogo.png")} />
          <div className="footer_main_container_row2_btn">
            <button>Copyright</button>
            <button>Privacy Policy</button>
            <button>Terms of Use</button>
          </div>
        </div>
      </div>
    </div>
  );
}
