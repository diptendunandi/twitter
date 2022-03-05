import React from 'react';
import "./Widgets.css";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
  } from "react-twitter-embed";
import SearchIcon from '@mui/icons-material/Search';

const Widgets = () => {
    return (
        <div className="widgets">
          <div className="widgets__input">
            <SearchIcon className="widgets__searchIcon" />
            <input placeholder="Search Twitter" type="text" />
          </div>
    
          <div className="widgets__widgetContainer">
            <h2>What's happening</h2>
    
            <TwitterTweetEmbed tweetId={"893707060214325248"} />
    
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="diptendunandi"
              options={{ height: 400 }}
            />
    
            <TwitterShareButton
              url={"https://www.facebook.com/babai.nandi.98229"}
              options={{ text: "#reactjs is awesome", via: "diptendunandi" }}
            />
          </div>
        </div>
      );
};

export default Widgets;