const userText = document.getElementById("username");
const nameText = document.getElementById("name");
const teamText = document.getElementById("team");
const errorMesg = document.getElementById("errorInfo");
var selectedRow = null;

const onAddOrUpdateButtonclick = (event) => {
  if (event.target.value === "+Add") {
    addData();
  } else {
    updateData();
  }
};
const addData = () => {
  const usernameInput = userText.value;
  const nameInput = nameText.value;
  const teamInput = teamText.value;
  // const updateBtn=document.getElementById("btn").value;

  const ErrorHelper = "You have to fill out all fields!";
  const ErrorSize = "Username and Name must be at least 6 characters!";
  const clearErrorMesg = "&nbsp;";
  const nameRegex = /[^a-zA-Z0-9\\,\\ \\.\\;]/g;
  const nameRegexHelper = "Special Characters are not allowed in name";

  if (usernameInput == "" || nameInput == "" || teamInput == "") {
    errorMesg.innerHTML = ErrorHelper;
    errorMesg.style.color = "red";
    errorMesg.style.fontSize = "18px";
  } else if (usernameInput.length < 6 || nameInput.length < 6) {
    errorMesg.innerHTML = ErrorSize;
    errorMesg.style.color = "red";
    errorMesg.style.fontSize = "18px";
  } else if (nameRegex.test(nameInput)) {
    errorMesg.innerHTML = nameRegexHelper;
    errorMesg.style.color = "red";
    errorMesg.style.fontSize = "18px";
  } else {
    const table = document.getElementsByTagName("table")[0];

    const newRow = table.insertRow(table.length);

    const cellUsername = newRow.insertCell(0);
    const cellName = newRow.insertCell(1);
    const cellTeam = newRow.insertCell(2);
    const cellEdit = newRow.insertCell(3);
    const cellDelete = newRow.insertCell(4);

    cellUsername.innerHTML = usernameInput;
    cellName.innerHTML = nameInput;
    cellTeam.innerHTML = teamInput;

    const editButtonHTML = document.createElement("input");
    editButtonHTML.type = "button";
    editButtonHTML.value = "Edit";
    editButtonHTML.className = "edit";
    editButtonHTML.style.color = "blue";
    editButtonHTML.style.backgroundColor = "#B8DAFF";
    editButtonHTML.style.borderColor = "blue";
    cellEdit.style.border="none";
 
   



    cellEdit.appendChild(editButtonHTML);
    editButtonHTML.onclick = editRow;

    const editButtonHTMLdel = document.createElement("input");
    editButtonHTMLdel.type = "button";
    editButtonHTMLdel.value = "Delete";
    editButtonHTMLdel.className = "delete";
    editButtonHTMLdel.style.color = "red";
    editButtonHTMLdel.style.backgroundColor = "#F5C6CB";
    editButtonHTMLdel.style.borderColor = "red";
    cellDelete.style.border="none";


    cellDelete.appendChild(editButtonHTMLdel);
    cellDelete.onclick = deleteRow;

    errorMesg.innerHTML = clearErrorMesg;
    userText.value = "";
    nameText.value = "";
  }
};

const editRow = (event) => {
  // console.log( event.target.parentElement.parentElement.innerHTML);
  const oldUsername =
    event.target.parentElement.parentElement.firstChild.innerHTML;
  const oldName =
    event.target.parentElement.parentElement.firstChild.nextSibling.innerHTML;
  const oldTeam =
    event.target.parentElement.parentElement.firstChild.nextSibling.nextSibling
      .innerHTML;
  userText.value = oldUsername;
  nameText.value = oldName;
  teamText.value = oldTeam;

  const updateText = "Update";
  const addBtnText = document.getElementById("button");
  addBtnText.value = updateText;
  selectedRow = event.target.parentElement.parentElement;
};

const deleteRow = (event) => {
  // console.log( event.target.parentElement.parentElement.innerHTML);
  const oldUsernameDel = event.target.parentElement.parentElement.remove();
  document.getElementById("username").value = "";
  document.getElementById("name").value = "";
};
const updateData = () => {
  const usernameInput = userText.value;
  const nameInput = nameText.value;
  const teamInput = teamText.value;
  if (usernameInput == "" || nameInput == "" || teamInput == "") {
    errorMesg.innerHTML = ErrorHelper;
    errorMesg.style.color = "red";
    errorMesg.style.fontSize = "18px";
  } else {
    userText.value = "";
    nameText.value = "";
   teamText.value="FE";

    selectedRow.firstChild.innerHTML = usernameInput;
    selectedRow.firstChild.nextSibling.innerHTML = nameInput;
    selectedRow.firstChild.nextSibling.nextSibling.innerHTML = teamInput;
    const AddText = "+Add";
  const editBtnText = document.getElementById("button");
  editBtnText.value = AddText;
  }
};
const clearError = () => {
  document.getElementById("errorInfo").style.color = "white";
};
