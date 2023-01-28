"use strict";

let name_box = document.getElementById('name');
let phone_box = document.getElementById('phone-number');
let message_box = document.getElementById('message');

let placeholders = ["Your Name", "Phone Number", "Your Message Here..."];
let dict = {"name": name_box, "phone": phone_box, "message": message_box};

function remove_text(box){
    dict[box].placeholder = "";
}

name_box.addEventListener('focusout', () =>{name_box.placeholder = placeholders[0]});
phone_box.addEventListener('focusout', () =>{phone_box.placeholder = placeholders[1]});
message_box.addEventListener('focusout', () =>{message_box.placeholder = placeholders[2]});