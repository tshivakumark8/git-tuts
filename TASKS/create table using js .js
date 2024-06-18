var data = [{
    name: "shiva",
    id: 101,
    Email: "shiva@123",
    City: "Banglore",
},
{
    name: "sathis",
    id: 102,
    Email: "sathish@123",
    City: "Delhi",
},
{
    name: "mahesh",
    id: 103,
    Email: "mahesh@123",
    City: "Hyderabad",
},
{
    name: "gova",
    id: 104,
    Email: "gova@123",
    City: "Goa",
},
{
    name: "naveen",
    id: 105,
    Email: "naveen@123",
    City: "mumbai",
},
{
    name: "santhu",
    id: 106,
    Email: "santhu@123",
    City: "chennai",
},

]
function createtable() {
    var table = document.createElement("table");
    var tr1 = document.createElement("tr");

    var th1 = document.createElement("th");
    var th2 = document.createElement("th");
    var th3 = document.createElement("th");
    var th4 = document.createElement("th")

    th1.innerText = "NAME";
    th2.innerText = "ID";
    th3.innerText = "EMAIL";
    th4.innerText = "CITY"

    tr1.appendChild(th1);
    tr1.appendChild(th2);
    tr1.appendChild(th3);
    tr1.appendChild(th4);

    table.appendChild(tr1);
    table.width = "800px";
    table.frame = "box";
    table.rules = "all";
    table.style.margin = "auto";
    table.cellPadding = "10px";

    tr1.style.backgroundColor = "black";
    tr1.style.color = "white";


    for (let user of data) {
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var td4 = document.createElement("td");

        td1.innerText = user.name;
        td2.innerText = user.id;
        td3.innerText = user.Email;
        td4.innerText = user.City;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);

        tr.align = "center"

        table.appendChild(tr)
    }

    var bodyRef = document.getElementsByTagName("body");
    bodyRef[0].appendChild(table)
    console.log(bodyRef);
}