import "./styles.css";
import { homeContainer } from './home.js';
import { menuContainer } from './menu.js';

const content = document.getElementById('content');
content.appendChild(homeContainer);

const navButtons = document.querySelectorAll('.nav-link-btn');
navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        content.innerHTML = "";
        switch (btn.id) {
            case "home":
                content.appendChild(homeContainer);
                break;
            case "menu":
                content.appendChild(menuContainer);
                break;
            default:
                break;
        }
    })      
});