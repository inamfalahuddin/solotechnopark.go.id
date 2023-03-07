import Image from "next/image";
import React from "react";
import thumb from "@/images/thumbnail.jpg";
import Loading from "./Loading";

function ThumbProfile() {
  return (
    <>
      <div className="bg-red-50 rounded-md overflow-hidden cursor-pointer">
        {/* <Image src={thumb} alt="thumbnail" /> */}
      </div>
      {/* <video
        style={{ width: "719px", height: "404px", left: "0px", top: "0px" }}
        tabIndex={-1}
        className="video-stream html5-main-video"
        webkit-playsinline
        playsInline
        controlslist="nodownload"
        src="blob:https://www.youtube.com/71491476-ebb9-4537-9194-d711a0396901"
      /> */}

      <div className="bg-dark-transparent-100 fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center animate-fadeIn">
        <div className="bg-black w-[80%] h-[80%] rounded-xl overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube-nocookie.com/embed/nNVarAp0Ebo"
            title="YouTube video player"
            frameborder="0"
            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allow="autoplay"
            allowfullscreen
          ></iframe>
          {/* <Loading /> */}
        </div>
      </div>
    </>
  );
}

export default ThumbProfile;
