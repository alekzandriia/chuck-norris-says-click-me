const jokes = document.getElementById("jokes")
const button = document.getElementById("button")

button.addEventListener("click", () => {
  
  let requestOptions = {
  method: 'GET',
  redirect: 'follow'
}
  
fetch("https://geek-jokes.sameerkumar.website/api?format=json", requestOptions)
  .then(response => response.json())
  .then(result => {
  jokes.textContent = result.joke
  console.log(result)
})
  .catch(error => console.log('error', error));
})