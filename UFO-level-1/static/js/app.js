// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody=d3.select("tbody");
function append_table(tableData) {
    tableData.forEach((record)=> 
    { var table_row=tbody.append("tr");
    Object.values(record).forEach((value)=>
    { var data=table_row.append("td");
    data.text(value);
    });
    });
};

append_table(tableData);

function filter_data() {
    d3.event.preventDefault();
    var date=d3.select("#datetime").property("value");
    var filtered_data=tableData;
    if (date) {
        filtered_data=filtered_data.filter((row) => row.datetime===date);
    };
    tbody.html("");
    append_table(filtered_data)
};

// d3.selectAll("#filter-btn").on("click",filter_data);
var button=d3.selectAll("#filter-btn");
button.on("click", filter_data);

