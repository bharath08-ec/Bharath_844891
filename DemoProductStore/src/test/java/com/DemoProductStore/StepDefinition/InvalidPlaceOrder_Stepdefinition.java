package com.DemoProductStore.StepDefinition;

import com.DemoProductStore.pagesobjects.InvalidPlaceOrder;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class InvalidPlaceOrder_Stepdefinition {
	//Invalid place of order
		InvalidPlaceOrder invalidorder= new InvalidPlaceOrder();
		
		
		@Given("^user opens chrome page$")
		public void launchBrowser() {
			invalidorder.launchBrowser("chrome");
		}
		@When("^user opens the homepage$")
		public void productStore()  {
			invalidorder.productStore(); 
		}
		@Then("^user adds the product to the cart to place the  order$")
		public void clickPlaceOrder() throws InterruptedException {
			invalidorder.clickPlaceOrder();
		 
		}
		@Then("^The user enters the invalid details to purchase the product$")
		public void purchase() throws InterruptedException {
			invalidorder.purchase();
		    
		}

		@And("^user close the application$")
		public void close() throws InterruptedException {
			invalidorder.close();  
		}
}
