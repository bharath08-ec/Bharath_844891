package com.DemoProductStore.Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/main/resources/Features/DemoProductStore.Feature",
		plugin = {"pretty", "html:reports/cucumber-html-report"},
		tags = {"@Tc01_Valid_PlaceOrder,@Tc02_Invaild_placeorder,@Tc03-Count_of_mobiles,@Tc04_aboutus,@Tc05_To_get_monitor_price"},
		glue = {"com.DemoProductStore.StepDefinition"},
		monochrome = true
		)
public class DemoProductStore_testrunner {

}
