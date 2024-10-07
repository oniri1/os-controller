"use client";

import { useCallback, useRef } from "react";

const ScreenShare = () => {
  const videoElem = useRef<HTMLVideoElement>(null);
  const startBtn = useRef<HTMLButtonElement>(null);
  const stopBtn = useRef<HTMLButtonElement>(null);

  const startShare = useCallback(async () => {
    try {
      if (videoElem.current === null) return;

      const stream = await navigator.mediaDevices.getDisplayMedia({
        audio: true,
        video: {
          width: screen.width,
          height: screen.height,
          frameRate: 30,
        },
      });

      videoElem.current.srcObject = stream;
      videoElem.current.onloadedmetadata = (e) => {
        if (videoElem.current !== null) videoElem.current.play();
      };
    } catch (err) {
      console.log(err);
    }
  }, [videoElem.current]);

  const stopShare = useCallback(async () => {
    try {
      if (videoElem.current !== null) videoElem.current.pause();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div>
      <button ref={startBtn} onClick={startShare}>
        Start
      </button>
      <button ref={stopBtn} onClick={stopShare}>
        Stop
      </button>
      <video
        ref={videoElem}
        autoPlay
        style={{ width: "80%", height: "auto" }}
      ></video>
    </div>
  );
};

export default ScreenShare;
