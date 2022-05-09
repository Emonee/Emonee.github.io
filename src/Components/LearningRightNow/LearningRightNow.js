import React from "react";

import learningNowData from "../../Data/learningNowData";

export default function LearningRightNow() {
  const { text, url } = learningNowData
  return (
    <>
      <h3>What I'm learning right now?</h3>
      <p>{text}</p>
      <a href={url} target="_blank" rel="noreferrer">Learn about it here</a>
    </>
  )
}