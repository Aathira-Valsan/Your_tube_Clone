import "./App.css";
import AllRoutes from "./Allroutes";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Navbar from "./Components/Navbar/Navbar";
import Drawersliderbar from "../src/Components/Leftsidebar/Drawersliderbar";
import { BrowserRouter as Router } from "react-router-dom";
import Createeditchannel from "./Pages/Channel/Createeditchannel";
import Videoupload from "./Pages/Videoupload/Videoupload";
import { fetchallchannel } from "./action/channeluser";
import { getallvideo } from "./action/video";
import { getallcomment } from "./action/comment";
import { getallhistory } from "./action/history";
import { getalllikedvideo } from "./action/likedvideo";
import { getallwatchlater } from "./action/watchlater";

function App() {
  const [toggledrawersidebar, settoggledrawersidebar] = useState({
    display: "none",
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchallchannel());
    dispatch(getallvideo());
    dispatch(getallcomment());
    dispatch(getallhistory());
    dispatch(getalllikedvideo());
    dispatch(getallwatchlater());
  }, [dispatch]);

  const toggledrawer = () => {
    if (toggledrawersidebar.display === "none") {
      settoggledrawersidebar({ display: "flex" });
    } else {
      settoggledrawersidebar({
        display: "none",
      });
    }
  };

  const [editcreatechanelbtn, seteditcreatechanelbtn] = useState(false);
  const [videouploadpage, setvideouploadpage] = useState(false);
  return (
    <Router>
      {videouploadpage && (
        <Videoupload setvideouploadpage={setvideouploadpage} />
      )}
      {editcreatechanelbtn && (
        <Createeditchannel seteditcreatechanelbtn={seteditcreatechanelbtn} />
      )}
      <Navbar
        seteditcreatechanelbtn={seteditcreatechanelbtn}
        toggledrawer={toggledrawer}
      />
      <Drawersliderbar
        toggledrawer={toggledrawer}
        toggledrawersidebar={toggledrawersidebar}
      />

      <AllRoutes
        seteditcreatechanelbtn={seteditcreatechanelbtn}
        setvideouploadpage={setvideouploadpage}
      />
    </Router>
  );
}
export default App;
