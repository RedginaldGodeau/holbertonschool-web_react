import $ from "jquery";

const paragraph = [
    "Holberton Dashboard",
    "Dashboard data for the students",
    "Copyright - Holberton School",
]

$("document").ready(() => {
    $("body").append(paragraph.map((v, i) => `<p> ${v} </p>`).join(""));
})