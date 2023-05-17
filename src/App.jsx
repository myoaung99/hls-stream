import React, { useEffect, useRef, useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const Video = (props) => {
  const videoNode = useRef(null);
  const [player, setPlayer] = useState(null);
  useEffect(() => {
    if (videoNode.current) {
      const _player = videojs(videoNode.current, props);
      setPlayer(_player);
      return () => {
        if (player !== null) {
          player.dispose();
        }
      };
    }
  }, []);

  return (
    <div data-vjs-player>
      <video ref={videoNode} className="video-js"></video>
    </div>
  );
};

const demo_url = "https://v3.szjal.cn/20191101/PZzNpqB1/index.m3u8";
const real_url =
  "https://d28d5cupuwx9u5.cloudfront.net/result/videoresult.m3u8";

export default function App() {
  const play = {
    fill: true,
    fluid: true,
    autoplay: true,
    controls: true,
    preload: "metadata",
    sources: [
      {
        src: real_url,
        type: "application/x-mpegURL",
      },
    ],
  };
  return (
    <div className="App">
      <Video {...play} />
    </div>
  );
}
