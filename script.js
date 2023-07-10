// Parse the HTML and extract food truck information
function parseFoodTruckInfo(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
  
    const lunchFoodTrucks = extractFoodTrucks(doc, "hours-open Lunch");
    const dinnerFoodTrucks = extractFoodTrucks(doc, "hours-open Dinner");
    const extendedDinnerFoodTrucks = extractFoodTrucks(doc, "hours-open Extended Dinner");
  
    displayFoodTrucks("Lunch", lunchFoodTrucks);
    displayFoodTrucks("Dinner", dinnerFoodTrucks);
    displayFoodTrucks("Extended Dinner", extendedDinnerFoodTrucks);
  }
  
  // Extract food truck information for a specific mealtime
  function extractFoodTrucks(doc, classSelector) {
    const foodTruckCell = doc.querySelector(`td.${classSelector}`);
    const foodTruckSpans = foodTruckCell.querySelectorAll("span.hours-additonal");
  
    const foodTrucks = Array.from(foodTruckSpans).map(span => span.textContent);
    return foodTrucks;
  }
  
  // Display food trucks for a specific mealtime on the HTML table
  function displayFoodTrucks(mealtime, foodTrucks) {
    const table = document.getElementById("foodTrucksTable");
  
    const row = document.createElement("tr");
  
    const mealtimeCell = document.createElement("td");
    mealtimeCell.textContent = mealtime;
  
    const foodTrucksCell = document.createElement("td");
    foodTrucksCell.textContent = foodTrucks.join(", ");
  
    row.appendChild(mealtimeCell);
    row.appendChild(foodTrucksCell);
  
    table.appendChild(row);
  }
  
  // Fetch the HTML content from a URL and parse it
  function fetchAndParseHTML(url) {
    fetch(url)
      .then(response => response.text())
      .then(html => {
        parseFoodTruckInfo(html);
      })
      .catch(error => {
        console.error("Error fetching HTML:", error);
      });
  }
  
  // Usage example
  const url = "https://www.ucladining.com"; // Replace with the desired URL
  fetchAndParseHTML(url);
  