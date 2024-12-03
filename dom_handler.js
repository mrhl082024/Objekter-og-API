import { fetchDogImages } from "./fetch_data.js";

export function handleInputs() {
  const button = document.getElementById("display-btn");
  const inputBreed = document.getElementById("inputBreed");
  const inputAmount = document.getElementById("inputAmount");
  button.addEventListener("click", () => {
    if (inputBreed.value && inputAmount.value)
      displayDogs(inputBreed.value, inputAmount.value);
    else alert("Breed and amount required");
  });
}

export async function displayDogs(breed, amount) {
  if (amount <= 0) alert("Amount can not be less than 1");
  const imgURLS = await fetchDogImages(breed);
  const container = document.getElementById("container");
  container.textContent = "";
  for (let i = 0; i < amount; i++) {
    const image = document.createElement("img");
    image.id = `dog${i + 1}`;
    image.src = imgURLS.message[i];
    image.alt = `dog of breed ${breed}`;
    container.appendChild(image);
  }
}
