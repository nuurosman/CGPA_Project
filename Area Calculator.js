function calculateArea() {
    const Width = document.getElementById("width").value.trim();
    const Hight = document.getElementById("hight").value.trim();

    if (Width === "" || Hight === "") {
        alert("Please fill out the field")
    }
    else if (Width <= 0 || Hight <= 0) {
        alert("Invalid Number width or hight")
    }
    else {
        const Area_calculator = (Width * Hight);

        const resultElement = document.getElementById("result");

        resultElement.innerHTML = `Area of rectangle of : ${Width} * ${Hight} = ${Area_calculator}`;
    }


}