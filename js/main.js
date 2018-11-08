let name = '';

function init() {
    initButtuns();
    getName();

    setInterval(() => {
        getName();
    }, 5000);
}

init();