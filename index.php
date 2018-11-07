<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">

    <script src="js/common.js" defer></script>
    <script src="js/calculate.js" defer></script>
    <script src="js/button.js" defer></script>
    <script src="js/ajax.js" defer></script>
    <script src="js/main.js" defer></script>

    <title>Mr. Guinea Pig</title>
  </head>
  <body>
    <div class="container-fluid">
        <div class="row">
            <div id="homeSide" class="col-4 bg-dark text-light sidebar">
                <div class="sidebar-header">
                    <span class="title">Mr. Guinea Pig</span>
                    <a href="">X</a>
                </div>
                <div class="sidebar-body">
                    <hr>
                    <p>Some dummy text about this site.</p>
                    <hr>
                    <p>Main page. Here will be the futher information whete it's needed.</p>
                </div>
            </div>
            <div id="greetingSide" class="col-4 bg-dark text-light sidebar none">
                <div class="sidebar-header">
                    <span class="title">Greeting</span>
                    <a href="">X</a>
                </div>
                <div class="sidebar-body">
                    <div class="greeting-container">
                        <p class="h3">
                            <span id="greetingText"></span>
                            <span id="greetingLang"></span>
                        </p>
                    </div>
                </div>
            </div>
            <div id="jokeSide" class="col-4 bg-dark text-light sidebar none">
                <div class="sidebar-header">
                    <span class="title">Joke</span>
                    <a href="">X</a>
                </div>
                <div class="sidebar-body">
                    <div class="joke-container">
                        <p id="jokeText"></p>
                    </div>
                </div>
            </div>
            <div id="wotdSide" class="col-4 bg-dark text-light sidebar none">
                <div class="sidebar-header">
                    <span class="title">Word of the Day</span>
                    <a href="">X</a>
                </div>
                <div class="sidebar-body">
                    <div class="wotd-container">
                        <h3 class="h3">THE WORD</h3>
                        <hr>
                        <p id="wotdText"></p>
                    </div>
                </div>
            </div>
            <div id="greetingSide" class="col-4 bg-dark text-light sidebar none">
                <div class="sidebar-header">
                    <span class="title">Greeting</span>
                    <a href="">X</a>
                </div>
                <div class="sidebar-body">
                    <p>Hey you, Man</p>
                </div>
            </div>
            <div id="calculateSide" class="col-4 bg-dark text-light sidebar none">
                <div class="sidebar-header">
                    <span class="title">Calculate</span>
                    <a href="#">X</a>
                </div>
                <div class="sidebar-body">
                    <div class="calculate">
                        <input type="number" id="numberOne">
                        <div class="radio-group-container">
                            <div class="radio-group">
                                <input type="radio" id="add" name="operation" value="+">
                                <label for="add">+</label>
                            </div>
                            <div class="radio-group">
                                <input type="radio" id="substract" name="operation" value="-">
                                <label for="substract">-</label>
                            </div>
                            <div class="radio-group">
                                <input type="radio" id="multiply" name="operation" value="*">
                                <label for="multiply">*</label>
                            </div>
                            <div class="radio-group">
                                <input type="radio" id="divide" name="operation" value="/">
                                <label for="divide">/</label>
                            </div>
                        </div>
                        <input type="number" id="numberTwo">
                    </div>
                    <button class="btn btn-success calculate-btn" id="calculateButton">Calculate</button>
                    <hr>
                    <div class="calculate-string">
                        <div class="form-group">
                            <label for="equationString">Equation(eg. 3+9*2+324):</label>
                            <input type="text" id="equationString" class="form-control">
                        </div>
                    </div>
                    <button role="button" id="calculateStringButton" class="btn btn-success calculate-btn">Calculate</button>
                    <hr>
                    <div class="calculation none">
                        <h4 class="h4">Result</h4>
                        <span id="calculationResult"><span>
                    </div>
                </div>
            </div>
            <div id="newsSide" class="col-4 bg-dark text-light sidebar none">
                <div class="sidebar-header">
                    <span class="title">News</span>
                    <a href="">X</a>
                </div>
                <div class="sidebar-body">
                    <div class="news">
                        <a href="/" target="_blank" class="link"></a>
                        <p class="text"></p>
                    </div>
                </div>
            </div>
            <div class="col-8">
                <div class="service-container">
                    <div class="guinea-pig">
                        <a role="button" id="openServices">
                            <img src="img/guinea_pig.png" alt="Guinea Pig" height=350>
                        </a>
                        <div>
                            <h5 id="name" class="h5 text-center"></h5>
                            <hr>
                            <div class="form-group text-center">
                                <div id="renameBlock" class="input-group mb-3 none">
                                    <input type="text" id="newName" class="form-control" placeholder="New Name" aria-label="New Name">
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-success" type="button" id="saveButton">Go</button>
                                        <button class="btn btn-outline-danger" type="button" id="cancelButton">X</button>
                                    </div>
                                </div>
                                <button class="btn btn-success" role="button" id="renameButton">Rename</button>
                            </div>
                        </div>
                    </div>
                    <div id="greetingService" class="service greeting-service">
                        <i class="far fa-hand-spock"></i>
                    </div>
                    <div id="jokeService" class="service joke-service">
                        <i class="far fa-laugh-squint"></i>
                    </div>
                    <div id="wotdService" class="service word-service">
                        <i class="fas fa-font"></i>
                    </div>
                    <div id="todoService" class="service todo-service">
                        <i class="fas fa-list-ul"></i>
                    </div>
                    <div id="newsService" class="service news-service">
                        <i class="far fa-newspaper"></i>
                    </div>
                    <div id="calculateService" class="service calculate-service">
                        <i class="fas fa-calculator"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </body>
</html>