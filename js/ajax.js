function getData(url) {
    return fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    }).then(response => response.json());
}

function postData(url, data) {
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(data)
    }).then(response => response.json());
}

function getName() {
    getData("https://mrguineapig-piggie-service.herokuapp.com/get-name")
        .then((data) => {
            name = data.name;
        })
        .catch((error) => {
            name = 'Error';
        })
        .finally(() => {
            updateNameDom();
        });
}

function saveName(newName) {
    postData("https://mrguineapig-piggie-service.herokuapp.com/save-name", { name: newName })
        .then((data) => {
            name = data.name;
        })
        .catch((error) => { })
        .finally(() => {
            updateNameDom();
        });
}

function getNews(callback) {
    let news = {};
    getData("https://microservice-news.herokuapp.com/news")
        .then((data) => {
            news = data;
        })
        .catch((error) => {
            news = {
                "title": "Not found",
                "description": "This is service is currently unaviable.",
                "url": ""
            };
        })
        .finally(() => {
            callback(news);
        });
}

function postCalculate(callback, equationString) {
    let result = {};
    postData("https://mrguinneapigcalculator.herokuapp.com/calculate", { equation: equationString })
        .then((data) => {
            result = data;
        })
        .catch((error) => {
            result = { "solvable": false }
        })
        .finally(() => {
            callback(result);
        });
}

function getGreeting(callback) {
    let greeting = {};
    getData("https://mrguineapig-greeting-service.herokuapp.com/random-greeting")
        .then((data) => {
            greeting = data;
        })
        .catch((error) => {
            greeting = { "language": "English", "value": "Good Morning!" }
        })
        .finally(() => {
            callback(greeting);
        });
}

function getJoke(callback) {
    let joke = '';
    getData("https://jokes-microservice.herokuapp.com/random-joke")
        .then((data) => {
            joke = data.joke;
        })
        .catch((error) => {
            joke = 'Yo Mamma ...';
        })
        .finally(() => {
            callback(joke);
        })
}

function getWotd(callback) {
    let wotd = '';
    getData("https://mrguinneapigwotd.herokuapp.com/wotd")
        .then((data) => {
            wotd = data.wotd;
        })
        .catch((error) => {
            wotd = 'error';
        })
        .finally(() => {
            callback(wotd);
        })
}

function getTodos(callback) {
    let todos = [];
    getData("link")
        .then((data) => {
            todos = data;
        })
        .catch((error) => {
            todos = [{ id: 1, "title": "Todo #1", completed: false }]
        })
        .finally(() => {
            callback(todos);
        })
}