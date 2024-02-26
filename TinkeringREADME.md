## Skill I Set Out to Learn

For our tinkering assignment, I really wanted to make a graph that displayed the D3 skills I've been learning within a Next.js environment.
Being able to accomplish this is be very important for our project, which we want to rely on both of these technologies working together. I
expected there to be some problems when integrating the technology, but with the given online resources, things were significantly smoother
than expected. I also thought that this small project would be a good way for me to further understand how both React and D3 interact with the
DOM, which is a bigger objective of mine in general in case I continue towards a front end development career!

## How I learned it

To start my tinkering, besides having already done some of the basic Observable D3 tutorials, I tried to follow a step by
step a tutorial found in this [link](https://www.youtube.com/watch?v=kPbRDn5Fg0Y). This tutorial itself was very informative:
the instructor actually explained line by line of what he was doing, which was extremely helpful to understand it and continue
to apply these skills elsewhere later. It was great to see more advanced uses of d3 that I wasn't familiar with before. These
included such as ploting a line using data and scaling each point with callback functions:

```javascript
// Creating X scale with a domain and Range
let xScale = d3
  .scaleLinear()
  .domain(d3.extent(dummyData.map((d) => d[0])))
  .range([margin.left, width - margin.right]);

let line = d3
  .line()
  .x((d) => xScale(d[0])) // x datapoint will be drawn to scale.
  .y((d) => yScale(d[1])); // scale y (yScale inverts the chart)
let result = line(dummyData);
```

After having followed the tutorial, I read a lot of the [Framer Motion](https://www.framer.com/motion/) docs tinkered around with
the graph animations by myself. This was quite pivotal in actually understanding how the library worked, especially the `<motion>`
objects.

## My Assessment of my degree of mastery

Slow and steady, I can see myself having a bit more of an understanding about how these technologies work (both individually and
within a single ecosystem). I feel that my previous experience with CS has helped my in picking these things up quickly, however,
I have to admit that using callback functions, the math for scalling my points, and then using svg's to actually show the data still
aren't very intuitive for me. I would probably have to look at examples for the forseable future scalling, however I'm absolutely
loving to see my progress as the quarter goes by! My next steps include creating more graphics using d3 and framer motion. I will
do this with our actual data that my group has been collecting in order to further my understanding of the technologies!
