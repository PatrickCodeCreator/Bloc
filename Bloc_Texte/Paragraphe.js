function updateParagraphColors() {
    const paragraphs = document.querySelectorAll("#paragraphs p");
    paragraphs.forEach((para, index) => {
        if ((index % 3) === 0) {
            para.style.backgroundColor = "green";
        } else if ((index % 3) === 1) {
            para.style.backgroundColor = "blue";
        } else {
            para.style.backgroundColor = "red";
        }
    });
}

function addParagraph() {
    const paragraphsContainer = document.getElementById("paragraphs");
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "Nouveau Paragraphe";

    paragraphsContainer.insertBefore(newParagraph, paragraphsContainer.children[1]);
    updateParagraphColors();
}

function addName() {
    const nameInput = document.getElementById("nameInput");
    const nameValue = nameInput.value.trim();

    if (nameValue === "") {
        alert("Veuillez entrer un nom.");
        return;
    }

    const nameList = document.getElementById("nameList");
    const listItem = document.createElement("li");
    listItem.textContent = nameValue;
    nameList.appendChild(listItem);

    nameInput.value = "";
    sortNameList();
}

function sortNameList() {
    const nameList = document.getElementById("nameList");
    const names = Array.from(nameList.children);
    
    names.sort((a, b) => a.textContent.localeCompare(b.textContent));

    names.forEach(name => nameList.appendChild(name));
}