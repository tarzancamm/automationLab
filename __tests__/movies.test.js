// Boilerplate
const { Capabilities, Builder } = require("selenium-webdriver")
require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

// Connect functions from movie-list-test.js
const { addMovie, testCrossOff, testCrossOffNotification, testDeleteFunction } = require('../movie-list-test')

// Functions

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5503/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})


// // Run all tests
test('test delete', async() => {
    await addMovie(driver)
    await testCrossOff(driver)
    await testCrossOffNotification(driver)
    await testDeleteFunction(driver)
    await driver.sleep(4000)
})
