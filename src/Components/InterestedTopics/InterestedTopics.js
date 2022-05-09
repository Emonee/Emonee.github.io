import React from "react";
import interestedTopicsData from "../../Data/interestedTopicsData";

export default function InterestedTopics() {
  const fullList = interestedTopicsData.map(topic => <li key={topic}>{topic}</li>)

  return (
    <>
      <h3>Topics I am interested in learning in the future:</h3>
      <ul>
        {fullList}
      </ul>
    </>
  )
}