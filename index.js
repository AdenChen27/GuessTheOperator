




function generate_operator() {
    function add(a, b) {return a + b;}
    return add;
}
let question_operator = null;
let question_lvalue = null;
let question_rvalue = null;
let answer = null;


// function get_span(attr) {
    
// }


// function get_new_clue_container(lvalue, rvalue) {
    
//     const clueContainer = document.createElement("div");
//     clueContainer.appendChild(
//         document.createElement("span").classList.add("clue-num").
//         document.createElement("span").classList.add("clue-num"),
//         document.createElement("span").classList.add("clue-ans")
//     );

// }


function add_new_clue(lvalue, rvalue) {
    const clueListContainer = document.getElementById("clue-list-container");
    const answer = question_operator(lvalue, rvalue);
    
    const clueContainer = document.createElement("div");
    clueContainer.innerHTML += `
    <div class="entry-container">
        <span class="clue-num" class="entry">${lvalue}</span>
        <span>?</span>
        <span class="clue-num" class="entry">${rvalue}</span>
        <span>=</span>
        <span class="clue-ans" class="entry">${answer}</span>
    </div>
    `;
    
    clueListContainer.appendChild(clueContainer);
    document.getElementById('input-num-l').value = '';
    document.getElementById('input-num-r').value = '';
}

function toggle_element_hidden(id) {
    const element = document.getElementById(id);
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}


function check_input(lvalue, rvalue) {
    return !((lvalue == question_lvalue && rvalue == question_rvalue) || 
        (rvalue == question_lvalue && lvalue == question_rvalue));
}


function add_new_clue_from_input() {
    const lvalue = Number(document.getElementById("input-num-l").value);
    const rvalue = Number(document.getElementById("input-num-r").value);

    const input_error_display = document.getElementById("input-error-message");
    if (check_input()) {
        add_new_clue(lvalue, rvalue);
        input_error_display.style.display = "none";
    } else {
        input_error_display.style.display = "block";
    }
}


function randint(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function check_answer() {
    const input_ans = Number(document.getElementById("question-answer").value);
    if (input_ans == answer) {
        
    }
}


function init_game() {
    document.getElementById("clue-list-container").innerHTML = "";
    question_lvalue = randint(0, 9);
    question_rvalue = randint(0, 9);
    document.getElementById("question-num-l").innerText = question_lvalue;
    document.getElementById("question-num-r").innerText = question_rvalue;
    
    question_operator = generate_operator();
    answer = question_operator(question_lvalue, question_rvalue);
    // document.getElementById("question-answer").innerText = answer;
}
init_game();


 

