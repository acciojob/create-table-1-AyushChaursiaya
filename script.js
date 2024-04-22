function insert_Row() {
    //Write your code here
	var newRow = document.createElement("tr");
	
	var leftCell = document.createElement("td");
	var rightCell = document.createElement("td");

	leftCell.innerText = "New cell1";
	rightCell.innerText = "New cell2"

	newRow.appendChild(leftCell);
	newRow.appendChild(rightCell);

	var table = document.getElementById("sampleTable");

	table.insertBefore(newRow, table.firstChild);
}
