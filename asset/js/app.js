// Star my app
let appElement = document.getElementById('app-root');

if (appElement){
   starApp(appElement);
}

function starApp(parent){
    let subElement = document.createElement('span');
    subElement.style.backgroundColor = "coral";
    subElement.style.width = '80%';
    subElement.style.height = '20vh';
    subElement.style.display = 'inline-block';
    subElement.innerHTML = 'Hello world';
    appElement.appendChild(subElement);
}

// Handle theme click.
document.getElementById('theme-button').addEventListener('click', getTheme);

/**
 * Theme init
 */
function getTheme(save){
    let theme = window.localStorage.getItem('theme');
    theme = (theme !== 'dark') ? 'dark' : 'light';
    let style = document.querySelector('link');
    style.href = "./asset/css/" + theme + ".css";
    window.localStorage.setItem('theme', theme);
}
if (["dark", "light"].includes(window.localStorage.getItem('theme'))){
    getTheme(false);
}
