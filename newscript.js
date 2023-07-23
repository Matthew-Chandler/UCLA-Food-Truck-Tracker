$(document).ready(function() {  
    // Retrieve and populate the food truck list on page load
    getFoodTruckList();
});


// loads URLs into a list
function loadURLs() {
    var directory = "test/"
    const urlList = [];
    urlList[0] = directory

    for (let i = 1; i < 7; i++) { 
        var day = 4 + i;
        if (day < 10)
            day = "0" + day;
        urlList[i] = directory + "06-" + day + "-2023";
    }

    return urlList;
}

var urlList = loadURLs();

console.log(urlList);

var list = [];
var foodTrucks = [{name: "truck1"},{name: "truck2"}];
var numTrucks = 0;
// [name: Salpicon, dates: [7/12/2023,7/13/2023], times: [[Lunch,Dinner],[Dinner]]

// MAKE A DATE TIME OBJECT - THEY ALREADY EXIST

function addPeriod(truckName,date,period)
{
    let nameIndex = list.findIndex(item => item.name === truckName);
    if (nameIndex == -1)
    {
        console.log("Things have gone very wrong");
    }

    let dateIndex = list[nameIndex].dates.findIndex(item => item === date);
    list[index].dates.push(date);


    // what if the date already exists?
    list[index].


function getFoodTruckList() {}

    
// }
  
// function getFoodTruckList() {
//     for (urlIndex in urlList)
//     {
//         var url = urlList[urlIndex];

//         $.get(url, function(data) {
//             // Extract unique food truck names from the data
//             $(data).find('.hours-additonal').each(function() {
//             var foodTruck = $(this).text().trim();

//             // if first time seeing this truck, add it to the list
//             if (!foodTrucks.includes(foodTruck)) {
//                 foodTrucks.push(foodTruck);
//                 var currentTruck = {name: foodTruck, dates: [], times:[]};
//                 list.push(currentTruck);
//             }
//             // otherwise, add time to list
            
            

    
//             var foodTruckButtons = $('#foodTruckButtons');
//             foodTruckButtons.find('button').remove(); // Clear previous buttons
    
//             // Create buttons for each food truck
//             $.each(foodTrucks, function(index, foodTruck) {
//             var button = $('<button></button>').text(foodTruck);
//             // Add click event handler to fetch schedule for the selected food truck
//             // and update the schedule heading
//             button.click(function() {
//                 getFoodTruckSchedule(foodTruck);
//                 updateScheduleHeading(foodTruck);
//             });
//             foodTruckButtons.append(button);
//             });
//         });
//     });

//     }



//     var url = 'https://historical-reliable-fennel.glitch.me/';

//     // Fetch data from the URL
//     $.get(url, function(data) {
//         var foodTrucks = [];
//         // Extract unique food truck names from the data
//         $(data).find('.hours-additonal').each(function() {
//         var foodTruck = $(this).text().trim();
//         if (!foodTrucks.includes(foodTruck)) {
//             foodTrucks.push(foodTruck);
//         }
//         });

//         var foodTruckButtons = $('#foodTruckButtons');
//         foodTruckButtons.find('button').remove(); // Clear previous buttons

//         // Create buttons for each food truck
//         $.each(foodTrucks, function(index, foodTruck) {
//         var button = $('<button></button>').text(foodTruck);
//         // Add click event handler to fetch schedule for the selected food truck
//         // and update the schedule heading
//         button.click(function() {
//             getFoodTruckSchedule(foodTruck);
//             updateScheduleHeading(foodTruck);
//         });
//         foodTruckButtons.append(button);
//         });
//     });
// }
  
// function getFoodTruckSchedule(foodTruckName) {
//     var url = 'https://historical-reliable-fennel.glitch.me/';

//     // Fetch data from the URL
//     $.get(url, function(data) {
//         var scheduleTable = $('#scheduleTable');
//         scheduleTable.find('tr:gt(0)').remove(); // Clear previous search results

//         $(data).find('tr').each(function() {
//         var location = $(this).find('.hours-location').text().trim();
//         var periods = [];

//         $(this).find('.hours-open').each(function() {
//             var period = $(this).attr('class').split(' ')[1];
//             var foodTrucks = $(this).find('.hours-additonal').map(function() {
//             return $(this).text().trim();
//             }).get();

//             if (!foodTruckName || foodTrucks.includes(foodTruckName)) {
//             periods.push(getFullPeriodName(period));
//             }
//         });

//         if (periods.length > 0) {
//             var row = $('<tr></tr>');
//             $('<td></td>').text(location).appendTo(row);
//             $('<td></td>').text(periods.join(', ')).appendTo(row);
//             scheduleTable.append(row);
//         }
//         });
//     });
// }
  
// function getFullPeriodName(period) {
//     if (period === 'Extended') {
//         return 'Extended Dinner';
//     }
//     return period;
// }
  
// function updateScheduleHeading(headingText) {
//     var scheduleHeading = $('#scheduleHeading');
//     scheduleHeading.text(headingText);
// }
  