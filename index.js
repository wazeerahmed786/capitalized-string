// index.js
function capitalizeFirstCharacter(str) {
  if (typeof str !== "string" || str.length === 0) {
    throw new Error("Input must be a non-empty string");
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = capitalizeFirstCharacter;
