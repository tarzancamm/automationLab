const { By } = require('selenium-webdriver')

const addMovie = async (driver) => {
    // First, select the input field. If there were multiple inputs, use attribute value
    await driver.findElement(By.xpath('//input')).sendKeys('Batman')

    // Second, select add button
    await driver.findElement(By.xpath('//button')).click()

    // Third, find the li element to check if the movie title was added there
    const movie = await driver.findElement(By.xpath('//li'))
    const displayed = movie.isDisplayed()

    // Expect this to be true
    expect(displayed).toBeTruthy()
}


const testCrossOff = async (driver) => {
    // Select element of new movie. Save to variable
    const theElement = await driver.findElement(By.xpath('//span[text()="Batman"]'))

    // Click on element (saved to variable)
    await theElement.click()

    // Get attribte of element
    const theClass = await theElement.getAttribute('class')

    // Expect attribute to now be "checked"
    expect(theClass).toBe("checked")
}

const testCrossOffNotification = async (driver) =>{
    // Select element of new movie. Save to variable
    const theNewElement = await driver.findElement(By.xpath('//span[text()="Batman"]'))

    // Click on element (saved to variable)
    await theNewElement.click()

    // Expect notification to say "Batman watched!"
    expect(await driver.findElement(By.xpath('//aside[text()="Batman added back!"]')))
}

const testDeleteFunction = async (driver) => {
     // Select x to delete batman
    await driver.findElement(By.xpath('//button[text()="x"]')).click()

    // Expect notification to say "Batman deleted!"
    // expect(await driver.findElement(By.xpath('//aside[text()="Batman deleted!"]')))

    const list = await driver.findElement(By.xpath('//ul')).isDisplayed()

    expect(list).toBeFalsy()
}

module.exports = {
    addMovie,
    testCrossOff,
    testCrossOffNotification,
    testDeleteFunction
}