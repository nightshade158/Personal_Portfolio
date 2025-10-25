import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "OS Architect",
          "Full Stack Developer",
          "DevOps Engineer",
          "Cloud Architect",
          "Android Developer",
          "Cloud Architect",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
