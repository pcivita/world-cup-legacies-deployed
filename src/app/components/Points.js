function Point({ currentIndex }) {
  let color = "#8A1538";
  let date = "2010-2022";

  if (currentIndex == 0) {
    color = "white";
  } else if (currentIndex == 1) {
    color = "#fef2f2";
  } else if (currentIndex == 2) {
    color = "#fee2e2";
  } else if (currentIndex == 3) {
    color = "#fecaca";
  } else if (currentIndex == 4) {
    color = "#fca5a5";
    date = "2022-Present";
  } else if (currentIndex == 5) {
    color = "#f87171";
    date = "2022-Present";
  } else if (currentIndex == 6) {
    color = "#ef4444";
    date = "2023-Present";
  }


  return (
    <div>
      <svg className="text-bold">
        <circle r="60" cx="150" cy="75" fill={color} stroke="#8A1538" strokeWidth="3"/>
        <text className="m-2" x="50%" y="50%" textAnchor="middle" fill="black" dy=".3em">{date}</text>
      </svg>
    </div>
  );
};

function Line( {y1, y2} ) {
  return (
    <div className="absolute right-0 min-h-screen -z-10">
      <svg className="min-h-screen">
        <line x1="150" y1={y1} x2="150" y2={y2} style={{stroke: "#478778", strokeWidth: 2}}/>
      </svg>
    </div>
  );
};

export { Point, Line }
  