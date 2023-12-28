document.addEventListener("DOMContentLoaded", function () {
  const muxEntyTable = [
    {
      SL: "1",
      "Tag No.": "205",
      Marks:
        "<input id='tc1' type='number' value=10 onchange='saveMarksLS(this)' name='1433' step='0.01' min='0' max='10.0' class='form-control border border-dark' placeholder='10M' aria-describedby='basic-addon1' required>",
      Name: "Jotirmoykjhkjhkgjhg Sarkahgjhgjrhmgvhgjkjhk Sarkkkbmbjdshaksjfhgkjafhshar kumkdhfkumakumar",
    },
    {
      SL: "2",
      "Tag No.": "206",
      Marks:
        "<input id='tc2' type='number' onchange='saveMarksLS(this)' name='1434' step='0.01' min='0' max='10.0' class='form-control border border-dark' placeholder='10M' aria-describedby='basic-addon1' required>",
      Name: "Rajdeep Dey",
    },
    {
      SL: "3",
      "Tag No.": "207",
      Marks:
        "<input id='tc3' type='number' onchange='saveMarksLS(this)' name='1435' step='0.01' min='0' max='10.0' class='form-control border border-dark' placeholder='10M' aria-describedby='basic-addon1' required>",
      Name: "Soumyajit Chowdhury",
    },
    {
      SL: "4",
      "Tag No.": "208",
      Marks:
        "<input id='tc4' type='number' onchange='saveMarksLS(this)' name='1436' step='0.01' min='0' max='10.0' class='form-control border border-dark' placeholder='10M' aria-describedby='basic-addon1' required>",
      Name: "Suman Pandit",
    },
    {
      SL: "5",
      "Tag No.": "209",
      Marks:
        "<input id='tc5' type='number' onchange='saveMarksLS(this)' name='1437' step='0.01' min='0' max='10.0' class='form-control border border-dark' placeholder='10M' aria-describedby='basic-addon1' required>",
      Name: "Akash Halder",
    },
    {
      SL: "6",
      "Tag No.": "210",
      Marks:
        "<input id='tc6' type='number' onchange='saveMarksLS(this)' name='1438' step='0.01' min='0' max='10.0' class='form-control border border-dark' placeholder='10M' aria-describedby='basic-addon1' required>",
      Name: "Avijit Show",
    },
    {
      SL: "7",
      "Tag No.": "211",
      Marks:
        "<input id='tc7' type='number' onchange='saveMarksLS(this)' name='1439' step='0.01' min='0' max='10.0' class='form-control border border-dark' placeholder='10M' aria-describedby='basic-addon1' required>",
      Name: "Hironmoy Nandi",
    },
    {
      SL: "8",
      "Tag No.": "212",
      Marks:
        "<input id='tc8' type='number' onchange='saveMarksLS(this)' name='1440' step='0.01' min='0' max='10.0' class='form-control border border-dark' placeholder='10M' aria-described by='basic-addon1' required>",
      Name: "Sayan Ghosh",
    },
    {
      SL: "9",
      "Tag No.": "213",
      Marks:
        "<input id='tc9' type='number' onchange='saveMarksLS(this)' name='1441' step='0.01' min='0' max='10.0' class='form-control border border-dark' placeholder='10M' aria-describedby='basic-addon1' required>",
      Name: "Arghajit Haler",
    },
    {
      SL: "10",
      "Tag No.": "214",
      Marks:
        "<input id='tc10' type='number' onchange='saveMarksLS(this)' name='1442' step='0.01' min='0' max='10.0' class='form-control border border-dark' placeholder='10M' aria-describedby='basic-addon1' required>",
      Name: "Prabir Kishku",
    },
    {
      SL: "11",
      "Tag No.": "215",
      Marks:
        "<input id='tc11' value='10' type='number' onchange='saveMarksLS(this)' name='1442' step='0.01' min='0' max='10.0' class='form-control border border-dark' placeholder='10M' aria-describedby='basic-addon1' required>",
      Name: "Kishku Prabir",
    },
  ];

  const marksButton = [20, 10.85, 10.5, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

  const pageColor = "#7EB9F8";
  const table = document.getElementById("dynamicTable");

  // It will create header row
  const headerRow = document.createElement("tr");
  muxEntyTable.forEach((entry) => {
    const th = document.createElement("th");

    th.innerHTML = `<h2 class="candidate_slNo">${entry.SL}</h2><h3 class="candidate_name" >${entry.Name}</h3><p class="candidate_tagNo">${entry["Tag No."]}</p>${entry.Marks}`;
    th.style.backgroundColor = pageColor;
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  // It will create marks row
  marksButton.forEach((mark) => {
    const row = document.createElement("tr");
    muxEntyTable.forEach((item) => {
      const td = document.createElement("td");
      td.innerHTML = `  <div class="input-container">
      <input type="radio" name="radio${item.SL}" onclick="btnClicked(${mark},'tc'+${item.SL})">
      <div class="radio-tile">
          <label >${mark}</label>
      </div>
  </div>`;
      row.appendChild(td);
    });
    table.appendChild(row);
  });
});

function btnClicked(marks, slNo) {
  // console.log("marks, slNo :", marks, slNo);
  document.getElementById(slNo).value = marks;
}
