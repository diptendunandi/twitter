import React,{ useState }  from 'react'
import "./TweetBox.css";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import db from "./firebase";
const TweetBox = () => {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {
        e.preventDefault();
    
        db.collection("posts").add({
          displayName: "Diptendu Nandi",
          username: "diptendunandi",
          verified: true,
          text: tweetMessage,
          image: tweetImage,
          avatar:
            "https://i.postimg.cc/JhDyG3Wr/POP.png",
        });
    
        setTweetMessage("");
        setTweetImage("");
      };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://i.postimg.cc/JhDyG3Wr/POP.png" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;