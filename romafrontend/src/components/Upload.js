import { RiGalleryUploadLine } from "react-icons/ri";
import { RiVideoUploadLine } from "react-icons/ri";
import { GiSoccerBall } from "react-icons/gi";
import { FaMicroblog } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
export default function Upload() {
  return (
    <div className="Upload_outer">
      <label>share your passion</label>
      <div className="Upload_main">
        <div className="Upload_main_col">
          <label>
            <FaMicroblog /> MyBlogs
          </label>
          <div className="Upload_main_col_outline">
            <AiOutlinePlus />
          </div>
        </div>
        <div className="Upload_main_col">
          <label>
            <RiVideoUploadLine />
            My videos
          </label>
          <div className="Upload_main_col_outline">
            <AiOutlinePlus />
          </div>
        </div>
        <div className="Upload_main_col">
          <label>
            <RiGalleryUploadLine />
            MyPhotos
          </label>
          <div className="Upload_main_col_outline">
            <AiOutlinePlus />
          </div>
        </div>
        <div className="Upload_main_col">
          <label>
            {" "}
            <GiSoccerBall />
            MyMemorabilia
          </label>
          <div className="Upload_main_col_outline">
            <AiOutlinePlus />
          </div>
        </div>
      </div>
    </div>
  );
}
