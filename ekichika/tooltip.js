function showStaionTooltip(event){
    //console.log(d3.select(this));

    var data_stationTooltip = [d3.select(this).datum().GroupID, d3.select(this).datum().name]
    circle_cx = d3.select(this).attr("cx")
    circle_cy = d3.select(this).attr("cy")
    circle_r = d3.select(this).attr("r")

    y_col = circle_cy - circle_r

    var stationTooltip = d3.select(this).selectAll(".stationTooltip")
        .data(data_stationTooltip)
        .enter()
        .append("g")
        .attr("class", "stationTooltip")
        .attr("transform", "translate("+ 0 +","+ 0 +")");
    stationTooltip.append("text")
        .attr("class", "stationTooltipText")
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("text-anchor", "end")
        .attr("x", 0)
        .attr("y", function(d, i){return 10 * i;})
        .attr("font-size", 100)
        .text(function(d){return d; });
    /*
    stationTooltip.append("rect")
        .attr("class", "stationTooltipBg")
        .attr("width", 2000)
        .attr("height", 2000)
        .attr("x", 0)
        .attr("y", 0)
        .attr("fill", "yellow")
        .attr("stroke", "black");
    console.log("stationTooltip", stationTooltip.selectAll("rect"));
    //stationTooltip.on("zoom", resizeStationTooltip);
    */
    console.log("stationTooltip", stationTooltip.selectAll("text"));

    function resizeStationTooltip(event){
        d3.selectAll()
    }
}
function hideStationTooltip(event){
//d3.select(this).attr("fill", function (d){ return color(d.region)})
    svg.selectAll(".stationTooltip").remove();
}
/*
  function dragstarted(){
    drag_delta = 0;
  }
  function dragged(event){

    drag_delta += event.dx;
    year_delta = Math.floor(drag_delta / drag_threshold);

    if(year_delta != 0){
      nextYear = currentYear + year_delta;
      if(nextYear < 1800) nextYear = 1800;
      else if(nextYear > 2009) nextYear = 2009;

      currentYear = nextYear;
      yearLabel.text(currentYear);
      circle.data(interpolateData(), function(d){ return d.name;})
            .call(position).sort(order);
      drag_delta = 0;
    }
  }
  function dragended(){
    //do nothing
  }


  function order(a, b){
    return b.population - a.population;
  }

  function position(p)
  {

    p.attr("cx", function(d){ return incomeScale(d.income); });
    p.attr("cy", function(d){ return lifeScale(d.lifeExpectancy); });
    p.attr("r", function(d){ return populationScale(d.population); });
  }
*/