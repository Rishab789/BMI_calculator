function calculateBMI() {

    let weight = document.querySelector('#weight').value;
    let feet = document.querySelector('#getFeet').value;
    let inch = document.querySelector('#getInch').value;
    let meters = (feet * 0.3048) + (inch * 0.0254);
    let BMI = (weight / (meters * meters)).toFixed(2);


    let age = document.querySelector('#getAge').value;
    let val = document.querySelector('.display-val');


    // Gender id Extracting 
    let male = document.querySelector('#male')
    let female = document.querySelector('#female')

    //color div extraction
    let yellow = document.querySelector('.yellow');
    let green = document.querySelector('.green');
    let orange = document.querySelector('.orange');
    let red = document.querySelector('.red');

    // Remove existing dots from all color divs

    yellow.querySelectorAll('.dot').forEach(dot => dot.remove());
    green.querySelectorAll('.dot').forEach(dot => dot.remove());
    orange.querySelectorAll('.dot').forEach(dot => dot.remove());
    red.querySelectorAll('.dot').forEach(dot => dot.remove());

    let div = document.createElement('div')
    div.classList.add('dot')


    let suggestionText = document.querySelector('#suggestion-text');




    //gender is matter specifically for children to teens 
    //beetween the age from 2 to 20


    if (age >= 2 && age <= 20 && BMI < 14.75 && male.checked) {
        suggestionText.innerText = "Time to grab a bite!";
        val.innerText = BMI;
        yellow.appendChild(div);

    } else if (age >= 2 && age <= 20 && BMI >= 14.75 && BMI <= 19.25 && male.checked) {
        suggestionText.innerText = "Great shape!"
        val.innerText = BMI;
        green.appendChild(div)
    }
    else if (age >= 2 && age <= 20 && BMI > 19.25 && male.checked) {
        suggestionText.innerText = "Time to run!"
        val.innerText = BMI;
        orange.appendChild(div)





    }





    //For girl Childs

    if (age >= 2 && age <= 20 && BMI < 14.5 && female.checked) {
        suggestionText.innerText = "Time to grab a bite!";
        val.innerText = BMI;
        yellow.appendChild(div);



    } else if (age >= 2 && age <= 20 && BMI >= 14.5 && BMI <= 19 && female.checked) {
        suggestionText.innerText = "Great shape!";
        val.innerText = BMI;
        green.appendChild(div);

    }
    else if (age >= 2 && age <= 20 && BMI > 19 && female.checked) {
        suggestionText.innerText = "Time to run!";
        val.innerText = BMI;
        orange.appendChild(div);

    }

    // this is the calculation for adults(over the age of 20) 

    if (BMI < 18.5 && age > 20) {
        suggestionText.innerText = "Time to grab a bite!";
        val.innerText = BMI;
        yellow.appendChild(div)


    }
    else if (BMI >= 18.5 && BMI < 24.9 && age > 20) {
        suggestionText.innerText = "Great shape!!";
        val.innerText = BMI;
        green.appendChild(div)
    }

    else if (BMI >= 25 && BMI < 29.9 && age > 20) {
        suggestionText.innerText = "Time to run!"
        val.innerText = BMI;
        orange.appendChild(div)

    }
    else if (BMI >= 30 && BMI < 35 && age > 20) {
        suggestionText.innerText = "Time to run!";
        val.innerText = BMI;
        red.appendChild(div)


    }





}