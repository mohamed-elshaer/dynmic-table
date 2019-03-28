// var xmlhttp = new XMLHttpRequest();
// xmlhttp.onreadystatechange = function () {
//     console.log("onreadystatechange");
//     console.log(this.readyState);
//     console.log(this.status);
//     console.log(this);
//     if (this.readyState == 4 && this.status == 200) {
//         var myObj = JSON.parse(this.responseText);
//         // document.getElementById("demo").innerHTML = myObj.name;
//     }
// };
//  xmlhttp.open("GET", "data.json", true);
//  xmlhttp.send();


var employees = [
    {
        "Name": "mohamed",
        "age": 25,
        "salary": 1000,
        "city": "tanta",
        "id": 12
    },
    {
        "Name": "ahmed",
        "age": 36,
        "salary": 2000,
        "city": "alex",
        "id": 10
    },
    {
        "Name": "mahmoud",
        "age": 22,
        "salary": 3000,
        "city": "basyoun",
        "id": 14
    },
    {
        "Name": "ola",
        "age": 34,
        "salary": 4000,
        "city": "santa",
        "id": 18
    },
    {
        "Name": "nour",
        "age": 28,
        "salary": 5000,
        "city": "zefta",
        "id": 16
    },
    {
        "Name": "sara",
        "age": 27,
        "salary": 6000,
        "city": "byhera",
        "id": 19
    },
    {
        "Name": "reda",
        "age": 32,
        "salary": 7000,
        "city": "shbeen el-kom",
        "id": 122
    },
    {
        "Name": "hassan",
        "age": 42,
        "salary": 8000,
        "city": "fayoum",
        "id": 145
    },
    {
        "Name": "tamer",
        "age": 23,
        "salary": 9000,
        "city": "giza",
        "id": 105
    },
    {
        "Name": "saeed",
        "age": 35,
        "salary": 10000,
        "city": "cairo",
        "id": 104
    }
]

for (var i = 0; i < employees.length; i++) {

    console.log(employees[i].Name);

    document.getElementById("nameData").innerHTML += "<td>" + employees[i].Name + "</td>";
    document.getElementById("ageData").innerHTML += "<td>" + employees[i].age + "</td>";
    document.getElementById("salareData").innerHTML += "<td>" + employees[i].salary + "</td>";
    document.getElementById("cityData").innerHTML += "<td>" + employees[i].city + "</td>";
    document.getElementById("idData").innerHTML += "<td>" + employees[i].id + "</td>";
}

