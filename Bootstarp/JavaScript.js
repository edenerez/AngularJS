
var json = [
                [
                    { "value": 1},
                    {
                        "value": 10, "childs":
                          [
                              { "value": 4},
                              { "value": 4},
                              { "value": 4}
                          ]
                    },
                    { "value": 1}
                ],
                [
                    { "value": 3},
                    { "value": 3},
                    { "value": 3},
                    { "value": 3}
                ]
            ];

function recursiveGenerateHTMLTemplate(row) {
    strHtml += "<div class=\"row\">\r\n";
    for (var j = 0; j < row.length; j++) {
        var obj = row[j];
        var rowHtml = "";
        for (var key in obj) {
            var attrName = key;
            var attrValue = obj[key];
            
            if (attrName === 'value')
                strHtml += "\t<div class=\"col-md-" + attrValue + "\">\r\n";

            if (Object.keys(obj).length == 1)
                strHtml += "</div>\r\n";
            
            if (attrName === 'childs')
            {
                recursiveGenerateHTMLTemplate(attrValue);
                strHtml += "</div>\r\n";
            }
        }
    }
    strHtml += "</div>\r\n"; 
}

var strHtml = "";
for (var i = 0; i < json.length; i++) {
    var row = json[i];
    recursiveGenerateHTMLTemplate(row);
}


var divHtml = document.getElementById("generateTheHtml");
divHtml.innerHTML = strHtml;