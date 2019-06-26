const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = Object.assing(driver, { [key]: value)});
  
  return newDriver;
}