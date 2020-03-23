package com.DemoProductStore.StepDefinition;

import com.DemoProductStore.pagesobjects.ValidPlaceOrder;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ValidPlaceOrder_Stepdefinition {
	//valid place of order
		ValidPlaceOrder placeorder= new ValidPlaceOrder();
		


@Given("^Chrome browser is launched$")
public void launchBrowser(){
   
	placeorder.launchBrowser("chrome"); 
}

@When("^The user opens the homepage$")
public void productStore() {
	placeorder.productStore();
}

@Then("^The user adds the product to cart and places the  order$")
public void clickPlaceOrder() throws InterruptedException {
	placeorder.clickPlaceOrder();
}

@Then("^The user enters all the valid details to purchase the product$")
public void fillDetails() throws InterruptedException {
	placeorder.fillDetails();
}

@And("^The user closes the application$")
public void quit() {
	placeorder.quit();
}
}


