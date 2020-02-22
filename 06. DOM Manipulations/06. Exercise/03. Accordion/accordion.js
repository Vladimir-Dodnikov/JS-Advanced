function toggle() {
    const info = document.getElementById('extra');
    const btn = document.querySelector("#accordion > div.head > span");
    //const btn = document.querySelector("#accordion .head span.button");
    //const btn = document.getElementsByClassName("button")[0];
    if (btn.textContent === 'More') {
        info.style.display = 'block';
        btn.textContent = 'Less';
    }
    else if (btn.textContent === 'Less') {
        info.style.display = 'none';
        btn.textContent = 'More';
    }
}