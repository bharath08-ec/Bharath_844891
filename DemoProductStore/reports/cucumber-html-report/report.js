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
  "name": "To place order",
  "description": "",
  "id": "demo-product-store;to-place-order",
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
  "duration": 76346889933,
  "status": "passed"
});
formatter.match({
  "location": "ValidPlaceOrder_Stepdefinition.productStore()"
});
formatter.result({
  "duration": 60081785814,
  "status": "passed"
});
formatter.match({
  "location": "ValidPlaceOrder_Stepdefinition.clickPlaceOrder()"
});
formatter.result({
  "duration": 41779835510,
  "status": "passed"
});
formatter.match({
  "location": "ValidPlaceOrder_Stepdefinition.fillDetails()"
});
formatter.result({
  "duration": 24176458793,
  "status": "passed"
});
formatter.match({
  "location": "ValidPlaceOrder_Stepdefinition.quit()"
});
formatter.result({
  "duration": 1518119400,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "To handle a invalid place order",
  "description": "",
  "id": "demo-product-store;to-handle-a-invalid-place-order",
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
  "duration": 9770147466,
  "status": "passed"
});
formatter.match({
  "location": "InvalidPlaceOrder_Stepdefinition.productStore()"
});
formatter.result({
  "duration": 5981524553,
  "status": "passed"
});
formatter.match({
  "location": "InvalidPlaceOrder_Stepdefinition.clickPlaceOrder()"
});
formatter.result({
  "duration": 15396371432,
  "status": "passed"
});
formatter.match({
  "location": "InvalidPlaceOrder_Stepdefinition.purchase()"
});
formatter.result({
  "duration": 7775416144,
  "status": "passed"
});
formatter.match({
  "location": "InvalidPlaceOrder_Stepdefinition.close()"
});
formatter.result({
  "duration": 3908354705,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "To count the number of mobiles present  in the webpage",
  "description": "",
  "id": "demo-product-store;to-count-the-number-of-mobiles-present--in-the-webpage",
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
  "duration": 17676735795,
  "status": "passed"
});
formatter.match({
  "location": "CountOfMobilePage_Stepdefinition.Product_store()"
});
formatter.result({
  "duration": 18039260326,
  "status": "passed"
});
formatter.match({
  "location": "CountOfMobilePage_Stepdefinition.Elementscount()"
});
formatter.result({
  "duration": 3580843255,
  "status": "passed"
});
formatter.match({
  "location": "CountOfMobilePage_Stepdefinition.Close()"
});
formatter.result({
  "duration": 2745626915,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "To check the user is able to play the video",
  "description": "",
  "id": "demo-product-store;to-check-the-user-is-able-to-play-the-video",
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
  "duration": 7711913468,
  "status": "passed"
});
formatter.match({
  "location": "AboutUsPage_Stepdefinition.product_store()"
});
formatter.result({
  "duration": 7587765047,
  "status": "passed"
});
formatter.match({
  "location": "AboutUsPage_Stepdefinition.click_aboutus()"
});
formatter.result({
  "duration": 14548788054,
  "status": "passed"
});
formatter.match({
  "location": "AboutUsPage_Stepdefinition.close()"
});
formatter.result({
  "duration": 4899516317,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "To print price of the apple motitor",
  "description": "",
  "id": "demo-product-store;to-print-price-of-the-apple-motitor",
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
  "duration": 9201629160,
  "status": "passed"
});
formatter.match({
  "location": "PrintMonitorPrice_Stepdefinition.user_Opens_demo_app()"
});
formatter.result({
  "duration": 6836024247,
  "status": "passed"
});
formatter.match({
  "location": "PrintMonitorPrice_Stepdefinition.the_user_clicks_monitors()"
});
formatter.result({
  "duration": 9635123265,
  "status": "passed"
});
formatter.match({
  "location": "PrintMonitorPrice_Stepdefinition.click_apple_monitor_and_print_price()"
});
formatter.result({
  "duration": 6581925256,
  "status": "passed"
});
formatter.match({
  "location": "PrintMonitorPrice_Stepdefinition.close_app()"
});
formatter.result({
  "duration": 2545424340,
  "status": "passed"
});
});