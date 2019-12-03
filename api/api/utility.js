module.exports.databaseParser = array => {
    const newArray = array.map(current => current.get());
    return newArray 
}