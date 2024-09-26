"use client";

import { useCallback, useEffect, useRef } from "react";

const Share = () => {
  const shareScreen = useRef<HTMLVideoElement>(null);

  const startShare = useCallback(async () => {}, []);

  useEffect(() => {
    if (shareScreen.current) {
      startShare();
    }
  }, [startShare]);

  return <video ref={shareScreen} autoPlay playsInline></video>;
};

export default Share;
