$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/Features/DemoProductStore.Feature");
formatter.feature({
  "line": 1,
  "name": "Demo_Product_Store",
  "description": "",
  "id": "demo-product-store",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "",
  "description": "To place order",
  "id": "demo-product-store;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@Tc01_Valid_PlaceOrder"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Chrome browser is launched",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "The user opens the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "The user adds the product to cart and places the  order",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "The user enters all the valid details to purchase the product",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "The user closes the application",
  "keyword": "And "
});
formatter.match({
  "location": "ValidPlaceOrder_Stepdefinition.launchBrowser()"
});
formatter.result({
  "duration": 23518082443,
  "status": "passed"
});
formatter.match({
  "location": "ValidPlaceOrder_Stepdefinition.productStore()"
});
formatter.result({
  "duration": 8841942400,
  "status": "passed"
});
formatter.match({
  "location": "ValidPlaceOrder_Stepdefinition.clickPlaceOrder()"
});
formatter.result({
  "duration": 25162069419,
  "status": "passed"
});
formatter.match({
  "location": "ValidPlaceOrder_Stepdefinition.fillDetails()"
});
formatter.result({
  "duration": 17064325641,
  "status": "passed"
});
formatter.match({
  "location": "ValidPlaceOrder_Stepdefinition.quit()"
});
formatter.result({
  "duration": 891397549,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "",
  "description": "To handle a invalid place order",
  "id": "demo-product-store;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@Tc02_Invaild_placeorder"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "user opens chrome page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "user opens the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user adds the product to the cart to place the  order",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "The user enters the invalid details to purchase the product",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user close the application",
  "keyword": "And "
});
formatter.match({
  "location": "InvalidPlaceOrder_Stepdefinition.launchBrowser()"
});
formatter.result({
  "duration": 8027417862,
  "status": "passed"
});
formatter.match({
  "location": "InvalidPlaceOrder_Stepdefinition.productStore()"
});
formatter.result({
  "duration": 4458802032,
  "status": "passed"
});
formatter.match({
  "location": "InvalidPlaceOrder_Stepdefinition.clickPlaceOrder()"
});
formatter.result({
  "duration": 13158012774,
  "status": "passed"
});
formatter.match({
  "location": "InvalidPlaceOrder_Stepdefinition.purchase()"
});
formatter.result({
  "duration": 9651862105,
  "status": "passed"
});
formatter.match({
  "location": "InvalidPlaceOrder_Stepdefinition.close()"
});
formatter.result({
  "duration": 3322213344,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "",
  "description": "To count the number of mobiles present  in the webpage",
  "id": "demo-product-store;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@Tc03-Count_of_mobiles"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "the user opens chrome page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "user opens productstore homepage",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "count the number of mobile present in the page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "The user close the chrome",
  "keyword": "Then "
});
formatter.match({
  "location": "CountOfMobilePage_Stepdefinition.launchapp()"
});
formatter.result({
  "duration": 6057709424,
  "status": "passed"
});
formatter.match({
  "location": "CountOfMobilePage_Stepdefinition.Product_store()"
});
formatter.result({
  "duration": 7540349682,
  "status": "passed"
});
formatter.match({
  "location": "CountOfMobilePage_Stepdefinition.Elementscount()"
});
formatter.result({
  "duration": 3173977583,
  "status": "passed"
});
formatter.match({
  "location": "CountOfMobilePage_Stepdefinition.Close()"
});
formatter.result({
  "duration": 462893582,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "",
  "description": "To check the user is able to play the video",
  "id": "demo-product-store;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@Tc04_aboutus"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "User launch chrome page",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "The user Clicks on About Us in the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "The user plays the video",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "user closes the homepage",
  "keyword": "And "
});
formatter.match({
  "location": "AboutUsPage_Stepdefinition.launch_Browser()"
});
formatter.result({
  "duration": 4470926801,
  "status": "passed"
});
formatter.match({
  "location": "AboutUsPage_Stepdefinition.product_store()"
});
formatter.result({
  "duration": 6028333558,
  "status": "passed"
});
formatter.match({
  "location": "AboutUsPage_Stepdefinition.click_aboutus()"
});
formatter.result({
  "duration": 12980530837,
  "status": "passed"
});
formatter.match({
  "location": "AboutUsPage_Stepdefinition.close()"
});
formatter.result({
  "duration": 2149035798,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "",
  "description": "To print name of the apple motitor",
  "id": "demo-product-store;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 37,
      "name": "@Tc05_To_get_monitor_price"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "The user launched the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "The user opens Product store page",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "The user clicks monitors",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "The user clicks Apple monitor to get the price",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "The user closes the homepage",
  "keyword": "And "
});
formatter.match({
  "location": "PrintMonitorPrice_Stepdefinition.launch_Browser()"
});
formatter.result({
  "duration": 8219701851,
  "status": "passed"
});
formatter.match({
  "location": "PrintMonitorPrice_Stepdefinition.user_Opens_demo_app()"
});
formatter.result({
  "duration": 8406518350,
  "status": "passed"
});
formatter.match({
  "location": "PrintMonitorPrice_Stepdefinition.the_user_clicks_monitors()"
});
formatter.result({
  "duration": 12380628703,
  "status": "passed"
});
formatter.match({
  "location": "PrintMonitorPrice_Stepdefinition.click_apple_monitor_and_print_price()"
});
formatter.result({
  "duration": 8338986745,
  "status": "passed"
});
formatter.match({
  "location": "PrintMonitorPrice_Stepdefinition.close_app()"
});
formatter.result({
  "duration": 545526654,
  "status": "passed"
});
});