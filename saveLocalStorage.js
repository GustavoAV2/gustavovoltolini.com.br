var showJsonFormButton = document.getElementById("sendJson");
var sendJsonButton = document.getElementById("sendJsonButton");

showJsonFormButton.onclick = () => {
  var sendJsonForm = document.getElementById("sendJsonForm");
  sendJsonForm.style.display = "block";
};

sendJsonButton.onclick = () => {
  var textJson = document.getElementById("txtJson");
  saveJsonToLocalStorage(textJson.value);
};

var copyTest = document.querySelector('.copyTest');
copyTest.addEventListener('click', function(event) {
  sendLocalStorageJsonToTextClipboard()
});

function saveJsonToLocalStorage(jsonString) {
  const parsedJson = JSON.parse(jsonString);

  for (const key in parsedJson) {
    if (parsedJson.hasOwnProperty(key)) {
      localStorage.setItem(key, parsedJson[key]);
    }
  }
}
function sendLocalStorageJsonToTextClipboard() {
  let parsedJson = JSON.stringify(localStorage);
  copyTextToClipboard(parsedJson)
}

function copyTextToClipboard(text) {
  var textArea = document.createElement("textarea");

  textArea.style.position = 'fixed';
  textArea.style.top = 0;
  textArea.style.left = 0;
  textArea.style.width = '2em';
  textArea.style.height = '2em';
  textArea.style.padding = 0;
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';
  textArea.style.background = 'transparent';
  textArea.value = text;

  document.body.appendChild(textArea);
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
    window.prompt("Copie para área de transferência: Ctrl+C e tecle Enter", text);
  }

  document.body.removeChild(textArea);
}
