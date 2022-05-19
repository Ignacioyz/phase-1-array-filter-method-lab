// function findMatching(driver, name){
    
//     return driver.filter(driver => name.toUpperCase() === driver.toUpperCase())

// }

// function fuzzyMatch(drivers, letters){
//     return drivers.filter(driver => driver.indexOf(letters) === 0)
// }

// function matchName(drivers, name){
//     return drivers.filter(driver => name === driver.name)

// }





function findMatching(array, string){
  const newList = array.filter(drivers => drivers.toUpperCase() === string.toUpperCase())
    return newList
}

function fuzzyMatch(array, string){
    const firstLetter = array.filter(drivers => drivers.startsWith(string) )
    return firstLetter 
}

function matchName(drvrObj, string){
   return drvrObj.filter(drivers => drivers.name === string)
    

}
