import Header from "../components/Headermember";
import Footer from "../components/Footer";
import "../style/style.css";
import Scrollmainmember from "../components/scrollmainmember";

export default function Fanhome() {
  return (
    <>
      <div className="app_container">
        <Header />
        <Scrollmainmember />
        <Footer />
      </div>
    </>
  );
}
