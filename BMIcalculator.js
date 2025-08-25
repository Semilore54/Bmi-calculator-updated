function weightConversion(){
    const weight = document.getElementById(`weight`).value;
    document.getElementById(`BmiCalculator`).value = Number(weight) / 1000;
}
function heightConversion(){
    const height = document.getElementById(`height`).value;
    document.getElementById(`BmiCalculator2`).value = Number(height) /100;
}
function weightConversion() {
            let weight = document.getElementById("weight").value;
            if (weight && weight > 0) {
                document.getElementById("BmiCalculator").value = (weight / 1000).toFixed(2);
                checkBothConverted();
            } else {
                alert("Please enter a valid weight in grams.");
            }
        }

        function heightConversion() {
            let height = document.getElementById("height").value;
            if (height && height > 0) {
                document.getElementById("BmiCalculator2").value = (height / 100).toFixed(2);
                checkBothConverted();
            } else {
                alert("Please enter a valid height in cm.");
            }
        }

        function checkBothConverted() {
            let kg = document.getElementById("BmiCalculator").value;
            let m = document.getElementById("BmiCalculator2").value;
            let proceedBtn = document.getElementById("proceedBtn");

            if (kg && m) {
                proceedBtn.disabled = false;  
            } else {
                proceedBtn.disabled = true;   
            }
        } 
        function validateForm(event) {
            let kg = document.getElementById("BmiCalculator").value;
            let m = document.getElementById("BmiCalculator2").value;

            if (!kg || !m || kg <= 0 || m <= 0) {
                alert("Please convert both weight and height before proceeding.");
                event.preventDefault(); // stop form from submitting
                return false;
            }
            return true;
        }
 function bmiConversion() {
    const name = document.getElementById("Na").value.trim();
            const kilo = parseFloat(document.getElementById("kilo").value);
            const meter = parseFloat(document.getElementById("meter").value);

            if (!name) {
                tips.textContent = "Please enter your full name.";
                tips.style.color = "red";
                return;
            }


            if (!(kilo > 0) || !(meter > 0)) {
                const tips = document.getElementById("bmiTips");
                tips.textContent = "Please enter a valid weight (kg) and height (m).";
                tips.style.color = "red";
                return;
            }

            // calculate BMI
            const bmi = Number(kilo) / (Number(meter) * Number(meter));
            document.getElementById("bmiConversion").value = bmi.toFixed(2);

            // recommendation logic
            let recommendation = "";
            // let color = "black";
            if (bmi < 18.5) {
                color = "orange";
                recommendation = `${name} You are underweight. Consider eating more balanced, calorie-rich foods and strength training.`;
            } else if (bmi >= 18.5 && bmi <= 24.9) {
                color = "green";
                recommendation = `${name} You are in the normal (healthy) range. Maintain your balanced diet and active lifestyle.`;
            } else if (bmi >= 25 && bmi <= 29.9) {
                color = "darkorange";
                recommendation = `${name} You are overweight. Try reducing calorie intake, exercising regularly, and staying consistent.`;
            } else if (bmi >= 30) {
                color = "red";
                recommendation = `${name} You are in the obese range. Seek medical advice, adopt a healthier diet, and increase physical activity.`;
            }

            // show recommendation in page
            const tips = document.getElementById("bmiTips");
            tips.textContent = recommendation;
            tips.style.color = color;
        }
