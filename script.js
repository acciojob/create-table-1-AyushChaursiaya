function insert_Row() {
    //Write your code here
	// var newRow = document.createElement("tr");
	
	// var leftCell = document.createElement("td");
	// var rightCell = document.createElement("td");

	// leftCell.innerText = "New Cell1";
	// rightCell.innerText = "New Cell2";

	// newRow.appendChild(leftCell);
	// newRow.appendChild(rightCell);

	// var table = document.getElementById("sampleTable");

	// table.insertBefore(newRow, table.firstChild);

	var table = document.getElementById("sampleTable");

	// Insert a new row at the top of the table
	var newRow = table.insertRow(0);

	// Insert two cells into the new row
	var leftCell = newRow.insertCell(0);
	var rightCell = newRow.insertCell(1);

	// Set the content of the cells
	leftCell.textContent = "New Cell1";
	rightCell.textContent = "New Cell2";

	
}
