// console.log("hello wolrd")
const questions = [
    { ques: "1.What is capital of India?", ans: "Delhi", op1: "gandhinagar", op2: "Surat", op3: "Delhi" },
    { ques: "2.What is the capital of Thailand?", ans: "Bangkok", op1: "Lampang", op2: "Bangkok", op3: "Ayutthaya" },
    { ques: "3.What is the capital of Gujarat", ans: "gandhinagar", op1: "vadodara", op2: "gandhinagar", op3: "rajkot" },
    { ques: "4.Which is the longest river in the world?", ans: "Nile", op1: "ganga", op2: "Nile", op3: "Amazon" },
    { ques: "5.Which is india's first super computer?", ans: "Param8000", op1: "para800", op2: "param80000", op3: "Param8000" }

]


let count1 = 0;
countss = 0
window.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#display").innerText = questions[count1].ques;
    document.querySelector("#opt1").value = questions[count1].op1
    document.querySelector("#opt2").value = questions[count1].op2
    document.querySelector("#opt3").value = questions[count1].op3

    document.querySelector("#qus1").innerText = questions[count1].op1
    document.querySelector("#qus2").innerText = questions[count1].op2
    document.querySelector("#qus3").innerText = questions[count1].op3
    sub_btn.style.display = "none";
    prv_button.style.display = "none"
});




let input = document.querySelectorAll("input")
//console.log(input)
let output = document.querySelector("#output")


let ans = document.querySelector(".ans-btn")

ans.addEventListener("click", () => {


    for (let i = 0; i < input.length; i++) {
        if (input[i].checked) {
            //console.log(input[i].value)
            // console.log(questions[random_question].ans)
            if (input[i].value === questions[count1].ans) {
                output.style.display = "block"
                output.style.color = "green"
                display("TRUE")

            }
            else {

                output.innerText = "false"
                output.style.color = "red"
                display("FALSE")
            }
        }


    }


})



//next questions

const next_button = document.querySelector(".Next-btn")


next_button.addEventListener("click", () => {

    if(countss ==  0){
        alert("choose the option")
    }
    else{

        count1++
        //console.log(count1)
        document.querySelector("#display").innerText = questions[count1].ques;

        document.querySelector("#opt1").value = questions[count1].op1
        document.querySelector("#opt2").value = questions[count1].op2
        document.querySelector("#opt3").value = questions[count1].op3
        //questions
        document.querySelector("#qus1").innerText = questions[count1].op1
        document.querySelector("#qus2").innerText = questions[count1].op2
        document.querySelector("#qus3").innerText = questions[count1].op3

        if (count1 === 4) {
            next_button.style.display = "none";
            sub_btn.style.display = "";
        }
        prv_button.style.display = ""
        for (let i = 0; i < input.length; i++) {
            input[i].checked = false;
        }
    }


})










//privious-question

const prv_button = document.querySelector(".prv-btn")
// console.log(prv_button)

prv_button.addEventListener("click", () => {
    count1--

    console.log(count1)
    document.querySelector("#display").innerText = questions[count1].ques;

    document.querySelector("#opt1").value = questions[count1].op1

    document.querySelector("#opt2").value = questions[count1].op2
    document.querySelector("#opt3").value = questions[count1].op3
    //questions
    document.querySelector("#qus1").innerText = questions[count1].op1
    document.querySelector("#qus2").innerText = questions[count1].op2
    document.querySelector("#qus3").innerText = questions[count1].op3

    if(count1 === 3){
        next_button.style.display =""
        sub_btn.style.display = "none"
    }

    for (let i = 0; i < input.length; i++) {
        input[i].checked = false;
    }
})


const div = document.querySelector(".questions")
const complete = document.querySelector("#complete")

const sub_btn = document.querySelector("#submit")
//console.log(sub_btn)

sub_btn.addEventListener("click", () => {
    if (confirm('are you finish the quizz')) {
        div.style.visibility = "hidden";
        complete.innerText = "Quizz completed"
    }

})






function display(text) {
    output.innerText = text
    window.setTimeout(() => {
        output.innerText = " "
    }, 1000)
}

for (let i = 0; i < input.length; i++) {
    input[i].addEventListener("click", () => {
        countss++
        //console.log(countss)
    })
}



























