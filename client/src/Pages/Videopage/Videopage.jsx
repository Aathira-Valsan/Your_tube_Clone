import React, { useEffect } from "react";
import "./Videopage.css";
import moment from "moment";
import Likewatchlatersavebtn from "./Likewatchlatersavebtn";
import { useParams, Link } from "react-router-dom";
import Comment from "../../Components/Comment/Comment";
import { viewvideo } from "../../action/video";
import { useSelector, useDispatch } from "react-redux";
import { addtohistory } from "../../action/history";

const Videopage = () => {
  const { vid } = useParams();
  const dispatch = useDispatch();
  const vids = useSelector((state) => state.videoreducer);
  console.log(vids);

  const vv = vids?.data.filter((q) => q._id === vid)[0];
  const currentuser = useSelector((state) => state.currentuserreducer);

  const handleviews = () => {
    dispatch(viewvideo({ id: vid }));
  };

  const handlehistory = () => {
    dispatch(
      addtohistory({
        videoid: vid,
        viewer: currentuser?.result._id,
      })
    );
  };

  useEffect(() => {
    if (currentuser) {
      handlehistory();
    }
    handleviews();
  }, []);

  return (
    <>
      <div className="container_videoPage">
        <div className="container2_videoPage">
          <div className="video_display_screen_videoPage">
            <video
              src={`http://localhost:5000/${vv?.filepath}`}
              className="video_ShowVideo_videoPage"
              controls
            ></video>
            <div className="video_details_videoPage">
              <div className="video_btns_title_VideoPage_cont">
                <p className="video_title_VideoPage">{vv?.title}</p>
                <div className="views_date_btns_VideoPage">
                  <div className="views_videoPage">
                    {vv?.views} views <div className="dot"></div>{" "}
                    {moment(vv?.createdat).fromNow()}
                  </div>
                  <Likewatchlatersavebtn vv={vv} vid={vid} />
                </div>
              </div>
              <Link to={"/"} className="chanel_details_videoPage">
                <b className="chanel_logo_videoPage">
                  <p>{vv?.uploader.charAt(0).toUpperCase()}</p>
                </b>
                <p className="chanel_name_videoPage">{vv.uploader}</p>
              </Link>
              <div className="comments_VideoPage">
                <h2>
                  <u>Comments</u>
                </h2>
                <Comment videoid={vv._id} />
              </div>
            </div>
          </div>
          <div className="moreVideoBar">More videos</div>
        </div>
      </div>
    </>
  );
};

export default Videopage;
