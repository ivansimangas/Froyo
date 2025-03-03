function trackFroyoOrder() {
  const userInput = prompt("Enter your froyo flayors(comma seperated):");
  const flavorArray = userInput.split(",");
  const flavorCount = {};
  for (const flavor of flavorArray) {
    if (flavorCount[flavor]) {
      flavorCount[flavor]++;
    } else {
      flavorCount[flavor] = 1;
    }
  }
  console.log(flavorCount);
}
trackFroyoOrder;
