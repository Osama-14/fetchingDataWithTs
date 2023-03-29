fetch("https://fakestoreapi.com/products").then(function (data) {
    return data.json();
}).then(function (objectData) {
    console.log(objectData[0].title);
    var tableData = "";
    objectData.map(function (values) {
        tableData += " \n        <tr>\n        <td>".concat(values.title, "</td>\n        <td>").concat(values.description, "</td>\n        <td>").concat(values.price, "</td>\n        <td><img src=\"").concat(values.image, "\" /></td>\n      </tr>\n");
    });
    document.getElementById("tableBody").innerHTML = tableData;
});
