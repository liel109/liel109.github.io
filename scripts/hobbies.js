"use strict";

let currnet_section = NaN;
//define sections
let gaming_section = document.getElementById("gaming");
let coding_section = document.getElementById("coding");
let sport_section = document.getElementById("sports");
let guitar_section = document.getElementById("guitar");

//define nav-buttons
let gaming_button = document.getElementById("gaming-button");
let coding_button = document.getElementById("coding-button");
let sports_button = document.getElementById("sports-button");
let guitar_button = document.getElementById("guitar-button");

let sections = [gaming_section, coding_section, sport_section, guitar_section];
let buttons = [gaming_button, coding_button, sports_button, guitar_button];
let dict = {"gaming" : 0, "coding" : 1, "sports" : 2, "guitar" : 3};

/**
 * Displays the given hobbie section on the screen and adjusts the icons position accordingly.
 * 
 * Called only when an nav-icon is clicked on the screen.
 * @param {String} sect - the section to display (while undisplaying the others)
 */
function show_section(sect){
    for(let i=0; i<sections.length; i++){
        if(dict[sect] == i) {
            currnet_section = i;
            if(window.innerWidth <= 640) {
                sections[i].style.display = "flex";
            }
            else{
                sections[i].style.display = "block";
            }
            buttons[i].style.transform = "translateY(-20px)";
        }
        else {
            sections[i].style.display = "none";
            buttons[i].style.transform = "";
        }
    }
}

// resizing window Event listener for responsiveness of the currently displayed hobbie section
window.addEventListener("resize", ()=>{
    if(currnet_section != NaN){
        if(window.innerWidth <= 640) {
            sections[currnet_section].style.display = "flex";
        }
        else{
            sections[currnet_section].style.display = "block";
        }
    }
});