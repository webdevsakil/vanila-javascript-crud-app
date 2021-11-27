// onFormSubmit
var selectedRow = null;
function onFormSubmit() {
    const formData = getFormData();
    if (validate()) {
        if (selectedRow == null) {
            generateReport(formData);
        } else {
            updateReport();
       }
        displaySuccessMessage();
    } else {
        displayError();
    }
    resetFormData();
}
// generate Report 

function generateReport(formData) {
    const tbody = document.querySelector("#allReports tbody");
    let newRow = tbody.insertRow(tbody.length);
    let cell0 = newRow.insertCell(0);
    cell0.innerHTML = formData["word"];
    let cell1 = newRow.insertCell(1);
    cell1.innerHTML = formData["meaning"];
    let cell2 = newRow.insertCell(2);
    cell2.innerHTML = formData["shortDesc"];
    let cell3 = newRow.insertCell(3);
    cell3.innerHTML = `<a onClick="onEdit(this)">Edit</a> | <a href="#" onClick="onDelete(this)">Delete</a>`;
}

//Get Form Data
function getFormData() {
    const formData = {};
    formData["word"] = document.getElementById("word").value;
    formData["meaning"] = document.getElementById("meaning").value;
    formData["shortDesc"] = document.getElementById("shortDesc").value;
    return formData;
}

// resetFormData

function resetFormData() {
    document.getElementById("word").value = "";
    document.getElementById("meaning").value = "";
    document.getElementById("shortDesc").value = "";
    selectedRow = null;
}
// Form validation 

function validate() {
    let isValid = true;
    let word = document.getElementById("word").value;
    let meaning = document.getElementById("meaning").value;
    let shortDesc = document.getElementById("shortDesc").value;
    if (word != "" && meaning != "" && shortDesc != "") {
        isValid = true;
    } else {
        isValid = false;
    }
    return isValid;
}
//error message
function displayError() {
    document.querySelector(".validation-error-message").style.display = "block";
    document.querySelector(".validation-success-message").style.display = "none";
}
//displaySuccessMessage
function displaySuccessMessage() {
    document.querySelector(".validation-success-message").style.display = "block";
    document.querySelector(".validation-error-message").style.display = "none";
}
//delete 
function onDelete(id) {
    const parent = id.parentNode.parentNode;
    if (confirm("Are you sure you want to delete this item?")) {
        parent.remove();
    }
}
// UpdateItems
function onEdit(el) {
    selectedRow = el.parentNode.parentNode;
    document.getElementById("word").value = selectedRow.cells[0].innerHTML;
    document.getElementById("meaning").value = selectedRow.cells[1].innerHTML;
    document.getElementById("shortDesc").value = selectedRow.cells[2].innerHTML;
}
// updateReport

function updateReport() {
    selectedRow.cells[0].innerHTML = document.getElementById("word").value;
    selectedRow.cells[1].innerHTML = document.getElementById("meaning").value;
    selectedRow.cells[2].innerHTML = document.getElementById("shortDesc").value;
}