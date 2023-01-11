import styles from "../styles/Graph.module.css";

import { useEffect, useRef, useState } from "react";

import * as d3 from "d3";

export default function Graph() {
  const HeatmapChart = useRef();
  const data = [
    { x: "A", y: "A", value: 12 },
    { x: "B", y: "A", value: 2 },
    { x: "C", y: "A", value: 9 },
    { x: "C", y: "B", value: 10 },
    { x: "B", y: "B", value: 6 },
    { x: "A", y: "C", value: 7 }
  ];

  useEffect(() => {
      const dimensions = {
      width: window.innerWidth - 300,
      height: window.innerHeight - 160,
      margin: {top: 90, left: 90, bottom: 90, right: 90}
  }


    const svg = d3
      .select(HeatmapChart.current)
      .attr("width", dimensions.width)
      .attr("height", dimensions.height)
      .style("background-color", "yellow")
      .style('margin-top', '30')
      .style('overflow', 'visible')

    const xScale = d3.scaleLinear()
        .domain([0, data.length])
        .range([0, dimensions.width])

    const yScale = d3.scaleLinear()
        .domain([0, dimensions.height])
        .range([dimensions.height, -3])

    const xAxis = d3.axisBottom(xScale)
        .ticks(data.length)
        .tickFormat(i => i + 1);

    const yAxis = d3.axisLeft(yScale)
        .ticks(3)

    svg.append("circle")
        .attr("cx", 790)
        .attr("cy", 0)
        .attr("r", 50)
        .style("stroke", "red")

    svg.append('g')
        .call(xAxis)
        .attr('transform', `translate(0, ${dimensions.height})`);
    svg.append('g')
        .call(yAxis);
  });

  // const width = window.innerWidth - 150
  // const height = window.innerHeight - 90

  // useEffect(() => {
  // const dimensions = {
  //     width: window.innerWidth - 150,
  //     height: window.innerHeight - 90,
  //     margin: {top: 90, left: 90, bottom: 90, right: 90}
  // }
  // const svg = d3.select(HeatmapChart.current)
  //                 .append("svg")
  //                 .style('background-color', 'yellow')
  //                 .attr('width', dimensions.width)
  //                 .attr('height', dimensions.height)
  //                 .style('background-color', 'yellow')
  //                 .style('margin-top', '')
  // const xScale = d3.scaleLinear()
  //             .domain([0, data.length])
  //             .range([0, dimensions.width])
  // const yScale = d3.scaleLinear()
  //             .domain([0, dimensions.height])
  //             .range([dimensions.height, 0])

  // const xAxis = d3.axisBottom(xScale)
  // svg.selectAll('weight')
  //     .data(data)
  // //     .join('path')
  // svg.append('g')
  //     .selectAll('text')
  //     .data(data)
  //     .join('text')
  //     .text()

  // })

  return (
    <div className={styles.container}>
      <div className={styles.header}>BMI GRAPH</div>
      <div className={styles.body}>
        <svg ref={HeatmapChart} />
      </div>
    </div>
  );
}
