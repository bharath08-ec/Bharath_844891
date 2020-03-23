package com.DemoProductStore.StepDefinition;



import com.DemoProductStore.pagesobjects.AboutUsPage;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AboutUsPage_Stepdefinition {
	AboutUsPage Aboutus=new AboutUsPage();
	
	@Given(("^User launch chrome page$"))
	public void launch_Browser()
	{
		Aboutus.launchBrowser("chrome");	
	}
	@When("^The user Clicks on About Us in the homepage$")
	public void product_store()  {
		Aboutus.productStore();
	  
	}

 	@Then("^The user plays the video$")
	public void click_aboutus() throws InterruptedException  {
 		Aboutus.clickAboutUs();
 		Aboutus.playVideo();

	}

	@And("^user closes the homepage$")
	public void close()  {
		Aboutus.close();
	   
	}
}
