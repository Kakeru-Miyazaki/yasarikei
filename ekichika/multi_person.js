function multi_person() {
  if (clicked_stations.size < 2) {
    console.log("num of stations selected is not enough!");
    return;
  } else {
    console.log("multi_person_mode");
    d3.selectAll("line")
      .transition()
      .duration(500)
      .ease(d3.easeLinear)
      .attr("opacity", 0);
    show_center_station();
  }
}

function show_center_station() {
  meet_up(clicked_stations, 180, stationQueue, goal_station_name_ID).then(
    () => {
      while (stationQueue.length) {
        var rinsetsu_stations = stationQueue.shift();
        g.select(".s" + rinsetsu_stations[0] + "_" + rinsetsu_stations[1])
          .transition()
          .duration(500)
          .ease(d3.easeLinear)
          .attr("opacity", 1);
      }
      if (goal_station_name_ID.length > 0) {
        // center_stationは駅名+グループID
        console.log(goal_station_name_ID);
        var center_station = goal_station_name_ID.shift();

        if (last_center_station != NaN) {
          if (last_center_station_red_flag == 1) {
            g.select("#" + last_center_station)
              .attr("fill-opacity", 1)
              .attr("fill", "red");
          } else {
            g.select("#" + last_center_station)
              .transition()
              .duration(500)
              .ease(d3.easeLinear)
              .attr("fill-opacity", 0.2)
              .attr("fill", "white");
          }
          g.select(".wave_in").remove();
        }
        console.log(g.select("#" + center_station).attr("fill"));
        console.log(last_nearest_station_red_flag);
        if (
          g.select("#" + center_station).attr("fill") == "rgb(255, 0, 0)" ||
          g.select("#" + center_station).attr("fill") == "red" ||
          (g.select("#" + center_station).attr("fill") == "rgb(148, 0, 211)" &&
            last_nearest_station_red_flag == 1)
        ) {
          console.log("conter_station_red !!");
          last_center_station_red_flag = 1;
        } else {
          console.log("conter_station_not_red !!");
          last_center_station_red_flag = 0;
        }
        g.select("#" + center_station)
          .transition()
          .duration(500)
          .ease(d3.easeLinear)
          .attr("fill-opacity", 1)
          .attr("fill", "lime");
        last_center_station = center_station;
        var circle_cx = d3.select("#" + center_station).attr("cx");
        var circle_cy = d3.select("#" + center_station).attr("cy");
        var circle_transform = d3
          .select("#" + center_station)
          .attr("transform");
        var kakudairitu =
          0.2 / d3.select("#" + center_station).attr("stroke-width");
        g.selectAll(".wave_out_animation").attr("to", 8);

        var wave = g
          .append("circle")
          .attr("stroke", "white")
          .attr("stroke-width", 0.2)
          .attr("class", "wave wave_in")
          .attr("opacity", 1)
          .attr("fill-opacity", 0)
          .attr("cx", circle_cx)
          .attr("cy", circle_cy)
          .attr("r", 0)
          .attr("transform", circle_transform);

        wave
          .append("animate")
          .attr("attributeName", "r")
          .attr("begin", "0s")
          .attr("dur", "1s")
          .attr("from", "25")
          .attr("to", "0")
          .attr("repeatCount", "indefinite");

        if (last_nearest_station != NaN) {
          if (last_nearest_station_red_flag == 1) {
            g.select("#" + last_nearest_station)
              .attr("fill-opacity", 1)
              .attr("fill", "red");
          } else {
            g.select("#" + last_nearest_station)
              .transition()
              .duration(500)
              .ease(d3.easeLinear)
              .attr("fill-opacity", 0.2)
              .attr("fill", "white");
          }
        }

        //ハブ駅の表示
        if (goal_station_name_ID.length > 0) {
          var nearest_hub_station = goal_station_name_ID.shift();

          console.log(g.select("#" + nearest_hub_station).attr("fill"));
          if (
            g.select("#" + nearest_hub_station).attr("fill") ==
              "rgb(255, 0, 0)" ||
            g.select("#" + nearest_hub_station).attr("fill") == "red" ||
            (g.select("#" + center_station).attr("fill") == "rgb(0, 255, 0)" &&
              last_center_station_red_flag == 1)
          ) {
            console.log("hub_station_red !!");
            last_nearest_station_red_flag = 1;
          } else {
            console.log("hub_station_not_red !!");
            last_nearest_station_red_flag = 0;
          }
          g.select("#" + nearest_hub_station)
            .transition()
            .duration(500)
            .ease(d3.easeLinear)
            .attr("fill-opacity", 1)
            .attr("fill", "darkviolet");
          last_nearest_station = nearest_hub_station;
        }
      }
    }
  );
}
