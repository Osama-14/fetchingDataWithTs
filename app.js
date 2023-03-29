fetch("https://fakestoreapi.com/products").then(function (data) {
    return data.json();
}).then(function (objectData) {
    console.log(objectData[0].title);
    var tableData = "";
    objectData.map(function (values) {
        tableData += "<p>".concat(values.title, "</p>");
    });
    document.getElementById("tableBody").innerHTML = tableData;
});
