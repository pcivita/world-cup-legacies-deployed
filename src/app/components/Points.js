function Point({ currentIndex }) {
  let color = "#8A1538";

  if (currentIndex == 0) {
    color = "white";
  } else if (currentIndex == 1) {
    color = "#fad9e2";
  } else if (currentIndex == 2) {
    color = "#f6bccb";
  } else if (currentIndex == 3) {
    color = "#f08fa9";
  } else if (currentIndex == 4) {
    color = "#ea6286";
  } else if (currentIndex == 5) {
    color = "#ca1c4a";
  } else if (currentIndex == 6) {
    color = "#8A1538";
  }


  return (
    <div>
      <svg className="text-bold">
        <circle r="50" cx="150" cy="75" fill={color} stroke="#8A1538" strokeWidth="3"/>
        <text x="50%" y="50%" textAnchor="middle" fill="black" fontSize="30px" dy=".3em">{currentIndex + 1}</text>
      </svg>
    </div>
  );
};

function Line( {y1, y2} ) {
  return (
    <div className="absolute right-0 h-full">
      <svg className="h-full">
        <line x1="150" y1={y1} x2="150" y2={y2} style={{stroke: "#478778", strokeWidth: 2}}/>
      </svg>
    </div>
  );
};

export { Point, Line }
  