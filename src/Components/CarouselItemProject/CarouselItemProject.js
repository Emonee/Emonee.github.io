import React from "react";

import Caption from 'react-bootstrap/CarouselCaption'
import Item from 'react-bootstrap/CarouselItem'

export default function CarouselItemProject(props) {

  return (
    <Item>
      <img
        className="d-block w-50"
        src={props.imgUrl}
        alt="slide"
      />
      <Caption>
        <h3>{props.name}</h3>
        <p>{props.desc} <a target="_blank" rel="noreferrer" href={props.urlRepository}>More info</a></p>
      </Caption>
    </Item>
  )
}