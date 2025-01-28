import $ from "jquery";
import debounce from 'lodash/debounce';

import '../css/main.css'

const elements = [
    "<div id='logo'></div>",
    "<p>Holberton Dashboard</p>",
    "<p>Dashboard data for the students</p>",
    "<button>Click here to get started</button>",
    "<p id='count'></p>",
    "<p>Copyright - Holberton School</p>"
];

let count = 0;

function updateCounter() {
    $("#count").text(++count + " clicks on the button");
}

$(document).ready(() => {
    const debouncedClick = debounce(updateCounter, 500);
    $("body").append(elements.map((v, i) => v).join(""));
    $("button").click(debouncedClick);
})