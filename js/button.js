const renameButton = document.querySelector("#renameButton");
const renameBlock = document.querySelector("#renameBlock");
const serviceContainer = document.querySelector(".service-container");

const homeSide = document.querySelector("#homeSide");
const greetingSide = document.querySelector("#greetingSide");
const jokeSide = document.querySelector("#jokeSide");
const wotdSide = document.querySelector("#wotdSide");
const todoSide = document.querySelector("#todoSide");
const calculateSide = document.querySelector("#calculateSide");
const newsSide = document.querySelector("#newsSide");

function initButtuns() {

    for (let close of document.querySelectorAll(".sidebar-header a")) {
        close.addEventListener('click', (event) => {
            event.preventDefault();
            showSidebar(homeSide);
        })
    }

    document.querySelector("#renameButton").addEventListener('click', (event) => {
        toggleRenameSection();
    });

    document.querySelector("#saveButton").addEventListener('click', (event) => {
        saveName(document.querySelector("#newName").value);
        toggleRenameSection();
    });

    document.querySelector("#cancelButton").addEventListener('click', (event) => {
        toggleRenameSection();
    });

    document.querySelector("#openServices").addEventListener('click', (event) => {
        if (serviceContainer.classList.contains("opened")) {
            serviceContainer.classList.remove("opened");
        } else {
            serviceContainer.classList.add("opened");
        }
    });
    
    document.querySelector("#greetingService").addEventListener('click', (event) => {
        showSidebar(greetingSide);
        toggleLoading(greetingSide);
        getGreeting((greeting) => {
            greetingSide.querySelector("#greetingText").innerHTML = greeting.value;
            greetingSide.querySelector("#greetingLang").innerHTML = "(" + greeting.language + ")";
            toggleLoading(greetingSide);
        });
    });

    document.querySelector("#jokeService").addEventListener('click', (event) => {
        showSidebar(jokeSide);
        toggleLoading(jokeSide);
        getJoke((joke) => {
            jokeSide.querySelector("#jokeText").innerHTML = joke;
            toggleLoading(jokeSide);
        });
    });

    document.querySelector("#wotdService").addEventListener('click', (event) => {
        showSidebar(wotdSide);
        toggleLoading(wotdSide);
        getWotd((wotd) => {
            wotdSide.querySelector("#wotdText").innerHTML = wotd;
            toggleLoading(wotdSide);
        });
    });

    document.querySelector("#todoService").addEventListener('click', (event) => {
        showSidebar(todoSide);
        toggleLoading(todoSide);
        getTodos((todos) => {

            toggleLoading(todoSide);
        });
    });

    document.querySelector("#calculateService").addEventListener('click', (event) => {
        showSidebar(calculateSide);
    });

    document.querySelector("#calculateButton").addEventListener('click', (event) => {
        toggleLoading(calculateSide);
        calculate(showCalculation);
    });

    document.querySelector("#calculateStringButton").addEventListener('click', (event) => {
        toggleLoading(calculateSide);
        calculateString(showCalculation);
    });

    document.querySelector("#newsService").addEventListener('click', (event) => {
        showSidebar(newsSide);
        toggleLoading(newsSide);
        getNews((news) => {
            newsSide.querySelector(".link").setAttribute("href", news.url);
            newsSide.querySelector(".link").innerHTML = news.title;
            newsSide.querySelector(".text").innerHTML = news.description !== undefined ? news.description : '';
            toggleLoading(newsSide);
        });
    });

}