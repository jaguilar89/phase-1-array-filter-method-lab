// Code your solution here
const findMatching = (driverList, name) => {
    return driverList.filter(driver => driver.toLowerCase() === name.toLowerCase())
}

const fuzzyMatch = (driverList, letters) => {
    return driverList.filter(driver => driver.startsWith(letters))
}


const matchName = (driverList, name) => {
    return driverList.filter(driver => driver.name === name)
}