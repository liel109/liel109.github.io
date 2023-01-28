"use strict";

//define input DOM elements
let form = document.getElementById("contact-form");
let name_box = document.getElementById('name');
let phone_box = document.getElementById('phone-number');
let message_box = document.getElementById('message');

// helper array and dict
let placeholders = ["Your Name*", "Phone Number", "Your Message Here..."];
let dict = {"name": name_box, "phone": phone_box, "message": message_box};

// Add event listeners for returning the original placeholders to the input boxes when user focuses out of the input.
name_box.addEventListener('focusout', () =>{name_box.placeholder = placeholders[0]});
phone_box.addEventListener('focusout', () =>{phone_box.placeholder = placeholders[1]});
message_box.addEventListener('focusout', () =>{message_box.placeholder = placeholders[2]});

/**
 * Removes the place holder from the given element when input is focused.
 * 
 * Being called evey time an input element is getting focused on.
 * 
 * @param {String} box - the input element that was focused  
 */
function remove_text(box){
    dict[box].placeholder = "";
}

/**
 * Validates the input after the form has been sent by the user and sets the form action to mailto.
 */
function validate(){
    if(name_box.value == ""){
        alert("Please enter a name");
        return false;
    }
    else {
        for(let i=0;i<name_box.value.length;i++){
            if(name_box.value.charAt(i) <= '9' && name_box.value.charAt(i) >= '0' ){
                alert("Numbers are not allowed to be in name");
                return false;
            }
        }
    }
    if(phone_box.value != ""){
        for(let i=0;i<phone_box.value.length;i++){
            if(phone_box.value.charAt(i) > '9' || phone_box.value.charAt(i) < '0' ){
                alert("Phone number consists of numbers only");
                return false;
            }
        }
    }
    form.action = "mailto:liel.huri@post.idc.ac.il?subject=Hi, My Name is " + name_box.value + "&body=" + message_box.value +
                    "%0A%0AContact Information: " + phone_box.value;
    return true;
}