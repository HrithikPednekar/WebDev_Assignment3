const side = document.querySelectorAll(".side-input");
const hypobtn = document.querySelector(".btn-hypo");
const output = document.querySelector("#output-hypo");

let calHypo = () => {
    if (side[0].value > 0 && side[1].value > 0){
        const sumSquare = side[0].value ** 2 + side[1].value ** 2;
        const hypotenuse = Math.sqrt(sumSquare);
        output.innerText = "Hypotenuse of Triangle is:" + hypotenuse;
    }else {
        output.innerText = 'Enter positive number';
    }
};

hypobtn.addEventListener("click", calHypo);