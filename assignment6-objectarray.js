const objectArray = [ { x: 14, y: 21, type: "tree", toDelete: false },
                      { x: 1, y: 30, type: "house", toDelete: false },
                      { x: 22, y: 10, type: "tree", toDelete: true },
                      { x: 5, y: 34, type: "rock", toDelete: true },
                      null,
                      { x: 19, y: 40, type: "tree", toDelete: false },
                      { x: 35, y: 35, type: "house", toDelete: false },
                      { x: 19, y: 40, type: "tree", toDelete: true },
                      { x: 24, y: 31, type: "rock", toDelete: false } ]

for (let i = 0; i < objectArray.length; i++) {
    
    if (objectArray[i] === null) {
        objectArray[i] = null
    } else if (objectArray[i].toDelete === true) {
        objectArray[i] = null
    }
}

console.log("Part a)");
console.log(objectArray)

const objectArray2 = [ { x: 14, y: 21, type: "tree", toDelete: false },
                      { x: 1, y: 30, type: "house", toDelete: false },
                      { x: 22, y: 10, type: "tree", toDelete: true },
                      { x: 5, y: 34, type: "rock", toDelete: true },
                      null,
                      { x: 19, y: 40, type: "tree", toDelete: false },
                      { x: 35, y: 35, type: "house", toDelete: false },
                      { x: 19, y: 40, type: "tree", toDelete: true },
                      { x: 24, y: 31, type: "rock", toDelete: false } ]

function deleteMarked(array) {

    const newArray = array.map(object => {
      if (object === null) {
        return null
      } else if (object.toDelete === true) {
        return null
      } else {
        return object
      }
    })

    return newArray
}

const deleteMarkedWithMap = deleteMarked(objectArray2)
console.log("Part b)");
console.log(deleteMarkedWithMap)