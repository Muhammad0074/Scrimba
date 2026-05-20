let inputEl = document.getElementById("input-el");
let convertBtn = document.getElementById("convert-btn");
let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");

convertBtn.addEventListener("click", function () {
  const inputNumber = Number(inputEl.value);
  const length = lengthConvertor(inputNumber);
  const volume = volumeConvertor(inputNumber);
  const mass = massConvertor(inputNumber);

  lengthEl.textContent = `${length.metersToFeet.toFixed(3)} meters = ${length.feetToMeters.toFixed(3)} feet | 
                          ${length.feetToMeters.toFixed(3)} feet = ${length.metersToFeet.toFixed(3)} meters`;

  volumeEl.textContent = `${volume.litersToGallons.toFixed(3)} liters = ${volume.gallonsToLiters.toFixed(3)} gallons | 
                          ${volume.gallonsToLiters.toFixed(3)} gallons = ${volume.litersToGallons.toFixed(3)} liters`;

  massEl.textContent = `${mass.kilogramsToPounds.toFixed(3)} kilos = ${mass.poundsToKilograms.toFixed(3)} pounds | 
                        ${mass.poundsToKilograms.toFixed(3)} pounds = ${mass.kilogramsToPounds.toFixed(3)} kilos`;
});

function lengthConvertor(value) {
  return {
    metersToFeet: value * 3.281,
    feetToMeters: value / 3.281,
  };
}
function volumeConvertor(value) {
  return {
    litersToGallons: value * 0.264,
    gallonsToLiters: value / 0.264,
  };
}
function massConvertor(value) {
  return {
    kilogramsToPounds: value * 2.204,
    poundsToKilograms: value / 2.204,
  };
}
