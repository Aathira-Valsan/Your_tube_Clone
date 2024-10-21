import React from "react";
import Describechannel from "../../Pages/Channel/Describechannel";
import Leftsidebar from "../../Components/Leftsidebar/Leftsidebar";
import Showvideogrid from "../../Components/Showvideogrid/Showvideogrid";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const Channel = ({ seteditcreatechanelbtn, setvideouploadpage }) => {
  
  const { cid } = useParams();
  const vids = useSelector((state) => state.videoreducer)
    ?.data?.filter((q) => q?.videochanel === cid)
    .reverse();

  // const vids = [
  //   {
  //     _id: 1,
  //     video_src: vid,
  //     chanel: "cdd",
  //     title: "video 1",
  //     uploader: "abc",
  //     description: "description of video 1",
  //   },
  //   {
  //     _id: 2,
  //     video_src: vid,
  //     chanel: "add",
  //     title: "video 2",
  //     uploader: "abc",
  //     description: "description of video 2",
  //   },
  //   {
  //     _id: 3,
  //     video_src: vid,
  //     chanel: "abcdj",
  //     title: "video 3",
  //     uploader: "abc",
  //     description: "description of video 3",
  //   },
  //   {
  //     _id: 4,
  //     video_src: vid,
  //     chanel: "gttgg",
  //     title: "video 4",
  //     uploader: "abc",
  //     description: "description of video 4",
  //   },
  // ];

  return (
    <div className="container_Pages_App">
      <Leftsidebar />
      <div className="container2_Pages_App">
        <Describechannel
          cid={cid}
          setvideouploadpage={setvideouploadpage}
          seteditcreatechanelbtn={seteditcreatechanelbtn}
        />

        <Showvideogrid vids={vids} />
      </div>
    </div>
  );
};

export default Channel;
