$(document).ready(function() {  
    // Retrieve and populate the food truck list on page load
    getFoodTruckList();
  });
  
  function getFoodTruckList() {
    var url = 'test/';
  
    // Fetch data from the URL
    $.get(url, function(data) {
      var foodTrucks = [];
      // Extract unique food truck names from the data
      $(data).find('.hours-additonal').each(function() {
        var foodTruck = $(this).text().trim();
        if (!foodTrucks.includes(foodTruck)) {
          foodTrucks.push(foodTruck);
        }
      });
  
      var foodTruckButtons = $('#foodTruckButtons');
      foodTruckButtons.find('button').remove(); // Clear previous buttons
  
      // Create buttons for each food truck
      $.each(foodTrucks, function(index, foodTruck) {
        var button = $('<button></button>').text(foodTruck);
        // Add click event handler to fetch schedule for the selected food truck
        // and update the schedule heading
        button.click(function() {
          getFoodTruckSchedule(foodTruck);
          updateScheduleHeading(foodTruck);
        });
        foodTruckButtons.append(button);
      });
    });
  }
  
  function getFoodTruckSchedule(foodTruckName) {
    var url = 'test/';
  
    // Fetch data from the URL
    $.get(url, function(data) {
      var scheduleTable = $('#scheduleTable');
      scheduleTable.find('tr:gt(0)').remove(); // Clear previous search results
  
      $(data).find('tr').each(function() {
        var location = $(this).find('.hours-location').text().trim();
        var periods = [];
  
        $(this).find('.hours-open').each(function() {
          var period = $(this).attr('class').split(' ')[1];
          var foodTrucks = $(this).find('.hours-additonal').map(function() {
            return $(this).text().trim();
          }).get();
  
          if (!foodTruckName || foodTrucks.includes(foodTruckName)) {
            periods.push(getFullPeriodName(period));
          }
        });
  
        if (periods.length > 0) {
          var row = $('<tr></tr>');
          $('<td></td>').text(location).appendTo(row);
          $('<td></td>').text(periods.join(', ')).appendTo(row);
          scheduleTable.append(row);
        }
      });
    });
  }
  
  function getFullPeriodName(period) {
    if (period === 'Extended') {
      return 'Extended Dinner';
    }
    return period;
  }
  
  function updateScheduleHeading(headingText) {
    var scheduleHeading = $('#scheduleHeading');
    scheduleHeading.text(headingText);
  }
  