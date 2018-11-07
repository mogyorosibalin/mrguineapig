let name = '';

function init() {
    initButtuns();
    getName();

    setInterval(() => {
        getName();
    }, 10000);
}

init();