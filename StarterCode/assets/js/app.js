// @TODO: YOUR CODE HERE!
// d3.csv()
// look up d3 tutorial scatter plot tutorials 

// setup basic scatterplot in d3.js
// setup the dimensions and margins of the graph
var margin = {top:10, right:30, bottom:30, left:60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;
// append the svg object to the body of the page
var svg = d3.select("data_visuals")
    // .append("svg")
    // .attr("svg")
    // .attr("width",width + margin.left + margin.right)
    .select("scatter")
    .append("g")
    .attr("transform", "translate(" + margin.left + "" + margin.top + ")");
// read in your data
d3.csv("assets/data/data.csv"), function(data) {

// add X axis
//remember that x axis will be poverty 
//add titles to this section
var x = d3.scaleLinear()
 .domain([0, 4000])
 .range([ 0, width ]);
svg.append("g")
 .attr("transform", "translate(0," + height + ")")
 .call(d3.axisBottom(x));

// add Y axis
//remeber that the y axis will be healthcare
//add titles to this section
var y = d3.scaleLinear()
 .domain([0, 500000])
 .range([ height, 0]);
svg.append("g")
 .call(d3.axisLeft(y));
// add dots
   svg.append('g')
   .selectAll("dot")
   .data(data)
   .enter()
   .append("circle")
     .attr("cx", function (d) { return x(d.GrLivArea); } )
     .attr("cy", function (d) { return y(d.SalePrice); } )
     .attr("r", 1.5)
     .style("fill", "#69b3a2")

}

