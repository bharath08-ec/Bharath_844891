package com.DemoProductStore.StepDefinition;


import com.DemoProductStore.pagesobjects.PrintMonitorPrice;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class PrintMonitorPrice_Stepdefinition {
	//To get the monitor price
	PrintMonitorPrice monitorprice= new PrintMonitorPrice();
	
	@Given("^The user launched the browser$")
	public void launch_Browser()
	{
		monitorprice.launchBrowser("chrome");
	}
	@When("^The user opens Product store page$")
	public void user_Opens_demo_app() throws Throwable {
		monitorprice.productStore();
	}

	@Then("^The user clicks monitors$")
	public void the_user_clicks_monitors() throws Throwable {
		monitorprice.clickMonitor();
	}

	@Then("^The user clicks Apple monitor to get the price$")
	public void click_apple_monitor_and_print_price() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		monitorprice.printPrice();
	}

	@Then("^The user closes the homepage$")
	public void close_app() throws Throwable {
		monitorprice.close();
	}	
}
