package com.DemoProductStore.StepDefinition;

import com.DemoProductStore.pagesobjects.CountOfMobilePage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CountOfMobilePage_Stepdefinition {
	CountOfMobilePage mobiles=new CountOfMobilePage();
	
	@Given("^the user opens chrome page$")
	public void launchapp()
	{
		mobiles.launchBrowser("chrome");	
	}
	@When("^user opens productstore homepage$")
	public void Product_store()  {
		mobiles.ProductStore();
	  
	}

	@Then("^count the number of mobile present in the page$")
	public void Elementscount() throws InterruptedException  {
		mobiles.mobileCount();

	}
    @Then("^The user close the chrome$")
	public void Close()  {
		mobiles.Close();
	   
	}
}
