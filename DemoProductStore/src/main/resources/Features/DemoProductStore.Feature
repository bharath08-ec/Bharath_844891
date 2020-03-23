Feature: Demo_Product_Store
@Tc01_Valid_PlaceOrder
Scenario:
	To place order
	Given Chrome browser is launched
	When The user opens the homepage
	Then The user adds the product to cart and places the  order
	Then The user enters all the valid details to purchase the product  
	And The user closes the application
	
@Tc02_Invaild_placeorder
Scenario:
	To handle a invalid place order
	Given user opens chrome page
	When user opens the homepage
	Then user adds the product to the cart to place the  order
	Then The user enters the invalid details to purchase the product 
	And user close the application
	
@Tc03-Count_of_mobiles
Scenario:
	To count the number of mobiles present  in the webpage 
	Given the user opens chrome page
	When user opens productstore homepage
	Then count the number of mobile present in the page
	Then The user close the chrome
	
@Tc04_aboutus
Scenario:	
	To check the user is able to play the video 
	Given User launch chrome page
	When The user Clicks on About Us in the homepage  
	Then The user plays the video
	And user closes the homepage
	
	
@Tc05_To_get_monitor_price
Scenario:	
	To print name of the apple motitor
	Given The user launched the browser
	When The user opens Product store page 
	Then The user clicks monitors
	Then The user clicks Apple monitor to get the price
	And The user closes the homepage
				