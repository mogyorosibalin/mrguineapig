function updateNameDom() {
    document.querySelector("#name").innerHTML = name;
}

function showSidebar(element) {
    for (let element of document.querySelectorAll(".sidebar")) {
        element.classList.add("none");
    }
    element.classList.remove("none");
}

function toggleRenameSection() {
    if (renameButton.classList.contains("none")) {
        renameButton.classList.remove("none");
        renameBlock.classList.add("none");
    } else {
        renameButton.classList.add("none");
        renameBlock.classList.remove("none");
    }
}

function toggleLoading(element) {
    if (element.querySelector(".sidebar-body").classList.contains("loading")) {
        element.querySelector(".sidebar-body").classList.remove("loading");
    } else {
        element.querySelector(".sidebar-body").classList.add("loading");
    }
}