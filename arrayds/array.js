let containerEl = document.getElementById("container");

// Global Variable
let myData = [];
for (let n = 1; n <= 100; n++) {
  myData.push(Math.random() * 600);
}

// Display Data
drawArray();

function drawArray() {
  let outputStr = "";
  for (let i = 0; i < myData.length; i++) {
    outputStr += `<div style="height:${myData[i]}px"></div>`;
  }
  containerEl.innerHTML = outputStr;
}

// Key Event Stuff
document.addEventListener("keydown", keydownHandler);

function keydownHandler(event) {
  console.log(event.keyCode);
  if (event.keyCode === 87) {
    // Up Arrow - Add 600 to index 0 (Beginning of the array)
    let middleIndex = Math.floor(myData.length / 2);
    myData.splice(middleIndex, 0, Math.random() * 600);
  } else if (event.keyCode === 83) {
    // Down Arrow - Remove element from the middle
    let middleIndex = Math.floor(myData.length / 2);
    myData.splice(middleIndex, 1);
  } else if (event.keyCode === 65) {
    console.log(Math.max(...myData));
  }

  // if (event.keyCode === 38) {
  //   // Up Arrow - Push value to the end of the array
  //   myData.push(Math.random() * 600);
  // } else if (event.keyCode === 40) {
  //   // Down Arrow - Remove value from the end of the array
  //   myData.pop();
  // }

  // Re-draw the Array
  drawArray();
}
