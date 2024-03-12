let cells = [];
let title = document.getElementById("title");
let turn = 0;
function changeColor(id) {
  document.getElementById(id).style.background = "rgb(29, 0, 174)";
}
function action(num1, num2, num3) {
  title.innerHTML = `the winner is ${cells[num1]}`;
  changeColor(num1);
  changeColor(num2);
  changeColor(num3);
  setInterval(function () {
    title.innerHTML += ".";
  }, 1000);
  setTimeout(function () {
    location.reload();
  }, 4000);
}
function winner() {
  for (let i = 1; i < 10; i++) {
    cells[i] = document.getElementById(i).innerHTML;
  }
  let con = false;
  if (cells[1] == cells[2] && cells[2] == cells[3] && cells[1] != "") {
    action(1, 2, 3);
    con = true;
  } else if (cells[4] == cells[5] && cells[5] == cells[6] && cells[6] != "") {
    action(4, 5, 6);
    con = true;
  } else if (cells[7] == cells[8] && cells[8] == cells[9] && cells[9] != "") {
    action(7, 8, 9);
    con = true;
  } else if (cells[1] == cells[4] && cells[4] == cells[7] && cells[7] != "") {
    action(1, 4, 7);
    con = true;
  } else if (cells[2] == cells[5] && cells[5] == cells[8] && cells[8] != "") {
    action(2, 5, 8);
    con = true;
  } else if (cells[3] == cells[6] && cells[6] == cells[9] && cells[9] != "") {
    action(3, 6, 9);
    con = true;
  } else if (cells[1] == cells[5] && cells[5] == cells[9] && cells[9] != "") {
    action(1, 5, 9);
    con = true;
  } else if (cells[3] == cells[5] && cells[5] == cells[7] && cells[7] != "") {
    action(3, 5, 7);
    con = true;
  }
  return con;
}
function game(id) {
  if (title.innerHTML == "XO Game") {
    let element = document.getElementById(id);
    if (turn % 2 === 0 && element.innerHTML == "") {
      element.innerHTML = "X";
      turn++;
    } else if (turn % 2 !== 0 && element.innerHTML == "") {
      element.innerHTML = "O";
      turn++;
    }
    if (turn == 9 && winner() == false) {
      title.innerHTML = `Draw`;
      setInterval(function () {
        title.innerHTML += ".";
      }, 1000);
      setTimeout(function () {
        location.reload();
      }, 4000);
    }
    winner();
  }
}
