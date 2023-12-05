
function searchKeyInObject(obj, key) {
    return obj.hasOwnProperty(key) ? obj[key] : undefined;
}
const sampleObject = { name: "Mutoni", lastname:"Jacky", class: "backend" };
const result = searchKeyInObject(sampleObject, "class");
console.log(result);
