"use strict";


function rollDice(type) {
  const numDice = parseInt(document.getElementById(`${type}Num`).value);
  let results = [];
  let sum = 0;
  let i = 0;

  function rollNext() {
    if (i < numDice) {
      const roll = Math.floor(Math.random() * parseInt(type.slice(1)) + 1);
      results.push(roll);
      sum += roll;

      i++;
      document.getElementById(`${type}Results`).innerHTML = "Results: " + results.join(", ");
      document.getElementById(`${type}Total`).innerHTML = "Total: " + sum;
      updateTotal();

      setTimeout(rollNext, 250); // Quarter-second delay
    }
  }

  rollNext();
}

  function rollPercentile() {
    const tens = Math.floor(Math.random() * 10);
    const ones = Math.floor(Math.random() * 10);
    const result = (tens * 10) + ones + 1;
    document.getElementById("percentileResults").innerHTML = "Results: " + result;
    document.getElementById("percentileTotal").innerHTML = "";
    updateTotal();
  }

  function clearResults() {
    const types = ["d4", "d6", "d8", "d10", "d12", "d20", "percentile"];
    for (let i = 0; i < types.length; i++) {
      document.getElementById(`${types[i]}Results`).innerHTML = "Results:";
      document.getElementById(`${types[i]}Total`).innerHTML = "";
    }
    document.getElementById("total").innerHTML = 0;
  }

  function updateTotal() {
    const types = ["d4", "d6", "d8", "d10", "d12", "d20", "percentile"];
    let total = 0;
    for (let i = 0; i < types.length; i++) {
      const totalStr = document.getElementById(`${types[i]}Total`).innerHTML;
      if (totalStr !== "") {
        total += parseInt(totalStr.split(": ")[1]);
      }
    }
    document.getElementById("total").innerHTML = total;
  }