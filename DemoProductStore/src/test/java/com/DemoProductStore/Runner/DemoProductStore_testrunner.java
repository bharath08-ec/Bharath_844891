package com.DemoProductStore.Runner;


import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/main/resources/Features/DemoProductStore.Feature",
				plugin = {"pretty", "html:reports/cucumber-html-report","json:reports/cucumber-html-report/jsonreport","com.cucumber.listener.ExtentCucumberFormatter:reports/Extentreports/Extentreport.html"},
		tags = {"@Tc01_Valid_PlaceOrder,@Tc02_Invaild_placeorder,@Tc03-Count_of_mobiles,@Tc04_aboutus,@Tc05_To_get_monitor_price"},
		glue = {"com.DemoProductStore.StepDefinition"},
		monochrome = true
		)
public class DemoProductStore_testrunner {
	@AfterClass
	  public static void extendReport() { 
		Reporter.loadXMLConfig("src/test/resources/Extent-config.xml");
		Reporter.setSystemInfo("User Name",System.getProperty("user.name"));
		Reporter.setSystemInfo("Time Zone",System.getProperty("user.timezone"));
		Reporter.setSystemInfo("Machine","MacOS Mojave" + "64 Bit");
		Reporter.setSystemInfo("Selenium","3.141.59");
		Reporter.setSystemInfo("Maven","4.0.0");
Reporter.setSystemInfo("Java Version","1.8.0_131");
		}
	}
	

