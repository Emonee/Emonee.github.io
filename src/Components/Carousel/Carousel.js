import React from "react";

import CarouselItemProject from "../CarouselItemProject/CarouselItemProject";

import projectsData from "../../Data/projectsData";

import Carousel from 'react-bootstrap/Carousel'

export default function ControlledCarousel() {
  const allProjects = projectsData.map(project => <CarouselItemProject key={project.name} name={project.name} desc={project.desc} urlRepository={project.urlRepository} imgUrl={project.imgUrl} />)

  return (
    <Carousel>
      {allProjects}
    </Carousel>
  );
}