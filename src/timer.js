import React from "react";

function TimerComponetn() {
  const [time, setTime] = React.useState(0);
  console.log("컴포넌트 업테이트");
  function updateTime() {
    setTime(time + 1);
  }
  return (
    <div>
      <h3>{time} 초</h3>
      <button onClick={updateTime}> 1씩올려주세요</button>
    </div>
  );
}

export default TimerComponetn;
