function caculateBMI(name, age, weight, height) {
    let personChart = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: Math.round( weight / (height/100) ** 2)
    };
    personChart.status = checkStatus();
    function checkStatus() {
        if (personChart.BMI < 18.5) {
            return `underweight`;
        } else if (personChart.BMI < 25) {
            return `normal`;
        } else if (personChart.BMI < 30) {
            return `overweight`;
        } else if (personChart.BMI >= 30){
            personChart.recommendation = `admission required`;
            return `obese`;
        }
    };
    return personChart;
}

caculateBMI("Peter", 29, 75, 182);