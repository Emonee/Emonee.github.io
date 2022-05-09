import React from "react";

export default function AcordionItem(props) {
  return (
    <>
      <strong>{props.title}</strong>
      <p>{props.plataform}</p>
      <p>{props.description} <a target="_blank" rel="noreferrer" href={props.url}>See the certification</a></p>
    </>
  )
}