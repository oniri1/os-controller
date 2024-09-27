"use client";

import { useEffect, useRef } from "react";

const ScreenShare = () => {
  const videoElem = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const getScreen = async () => {
      const sources: Electron.DesktopCapturerSource[] =
        await window.electron.getSources({
          types: ["window", "screen"],
        });

      console.log(sources);

      sources.forEach(async (source) => {
        try {
          // 소스가 'Entire Screen'이면 스트림을 요청
          if (source.name === "전체 화면" || source.name === "Entire Screen") {
            const stream = await navigator.mediaDevices.getDisplayMedia({
              video: true,
            });

            if (videoElem.current !== null) {
              videoElem.current.srcObject = stream;
            } else {
              console.log("비디오 비었음", videoElem.current);
            }
          }
        } catch (err) {
          throw err;
        }
      });
    };

    getScreen();
  }, []);

  return (
    <div>
      <h1>Screen Share Example</h1>
      <video
        ref={videoElem}
        autoPlay
        style={{ width: "100%", height: "auto" }}
      ></video>
    </div>
  );
};

export default ScreenShare;
