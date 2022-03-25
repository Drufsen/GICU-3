

var fs = require('fs');
var navbarData = JSON.parse(fs.readFileSync('./public/js/navbar.json', 'utf8'));
/*
let navbarData = [{
        "text": "Dashboard",
        "redirect": "index.html"
    },

    {
        "text": "Devices",
        "redirect": "devices.html"
    },

    {
        "text": "Settings",
        "redirect": "#",
        "dropdown": [{
                "text": "Scripts",
                "redirect": "scripts.html"
            },
            {
                "text": "Log",
                "redirect": "log.html"
            }
        ]
    },
]
*/



navbarData.forEach(function (obj) {
    //<div class="menubarAContainer">
    //console.log(obj);
    let dropDowndiv = document.createElement("div");
    let newDiv = document.createElement("div");
    newDiv.className = "menubarAContainer";


    newElement = document.createElement("a");
    newElement.innerHTML = obj.text;
    newElement.href = obj.redirect;

    if (obj.dropdown) {
        //<div class="dropdown-content">
        newDiv.className = "menubarAContainer dropdownMenu";
        dropDowndiv.className = "dropdown-content";

        for (let i = 0; i < obj.dropdown.length; i++) { //gets the dropdown values

            let emptyNewDiv = document.createElement("div");
            emptyNewDiv.className = "menubarAContainer";

            let dropdownA = document.createElement("a");


            dropdownA.innerHTML = obj.dropdown[i].text;
            dropdownA.href = obj.dropdown[i].redirect;

            emptyNewDiv.appendChild(dropdownA);
            dropDowndiv.appendChild(emptyNewDiv);
        }




        // newElement.style.background = "green";
    }
    document.querySelector("#menubarContainer").appendChild(newDiv);
    newDiv.appendChild(newElement);
    newDiv.appendChild(dropDowndiv);

});


// Toolbar
const remote = require('electron').remote;

document.getElementById("minimise").addEventListener("click", function (e) {
    var window = remote.getCurrentWindow();
    window.minimize();
});

document.getElementById("windowed").addEventListener("click", function (e) {
    var window = remote.getCurrentWindow();
    if (!window.isMaximized()) {
        window.maximize();
    } else {
        window.unmaximize();
    }
});

document.getElementById("close").addEventListener("click", function (e) {
    var window = remote.getCurrentWindow();
    window.close();
});