import React from "react";
import "./Graphic.css";
import { Doughnut } from "react-chartjs-2";

const Graphic = (props) => {
  const month = new Date().toLocaleString("default", { month: "long" });
  const year = new Date().getFullYear();

  const state = {
    labels: ["Expense", "Income"],
    datasets: [
      {
        label: "Summary",
        backgroundColor: ["#f44336", "#008000"],
        hoverBackgroundColor: ["#501800", "#175000"],
        data: [props.expense, props.income],
      },
    ],
  };

  return (
    <>
      <div className="chartContainer">
        <Doughnut
          data={state}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              display: true,
              position: "right",
              labels: {
                fontSize: 25,
                fontColor: "#444",
                boxWidth: 60,
              },
            },
          }}
        />
      </div>
      <h3>{`Current month : ${month} ${year}`}</h3>
    </>
  );
};

export default Graphic;
