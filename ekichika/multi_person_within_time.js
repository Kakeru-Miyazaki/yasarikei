function multi_person_within_time() {
  if (clicked_stations.size < 2) {
    console.log("num of stations selected is not enough!");
    return;
  } else {
    console.log("multi_person_within_tiime_mode");
    d3.selectAll("line")
      .transition()
      .duration(500)
      .ease(d3.easeLinear)
      .attr("opacity", 0);
    show_multi_station();
  }
}

function show_multi_station() {
  meet_up_within_T_min(
    clicked_stations,
    userSetHour * 60 + userSetTime,
    stationQueue,
    goal_station_name_ID
  ).then(() => {
    g.selectAll(".circle")
      .transition()
      .duration(500)
      .ease(d3.easeLinear)
      .attr("fill-opacity", 0.2)
      .attr("fill", "white");
    while (stationQueue.length) {
      var rinsetsu_stations = stationQueue.shift();
      g.select(".s" + rinsetsu_stations[0] + "_" + rinsetsu_stations[1])
        .transition()
        .duration(500)
        .ease(d3.easeLinear)
        .attr("opacity", 1);
    }
    while (goal_station_name_ID.length) {
      var station = goal_station_name_ID.shift();
      g.select("#" + station)
        .transition()
        .duration(500)
        .ease(d3.easeLinear)
        .attr("fill-opacity", 0.5)
        .attr("fill", "royalblue");
    }
    for (var clicked_station_id of clicked_stations_names) {
      g.selectAll("#" + clicked_station_id)
        .transition()
        .duration(500)
        .ease(d3.easeLinear)
        .attr("fill-opacity", 1)
        .attr("fill", "red");
    }
  });
}
