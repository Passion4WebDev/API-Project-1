

const baseUrl ='http://ergast.com/api/f1/current/results'
const searchForm = document.getElementByName('f1')[0];
const app = document.getElementById('root')
const logo = document.createElement('img')

const f1CurrentResults = document.querySelector('f1');
searchForm.addEventLister('submit, fetchf1CurrentResults')



// const searchForm = document.getElementByName('form')[0];
// const f1CurrentResults = document.querySelector('f1');
// searchForm.addEventLister('submit, fetchf1CurrentResults')
function fetchf1CurrentResults(e){
e.preventDefault();{
console.log('Clicked!');
fetch(baseUrl)
.then(result =>{
console.log(result);
return result.json();})
.then(json =>{
console.log(json);
displayf1(json);
  })
 }
 }
function displayf1CurrentResults(data) {
console.log('Inside displayf1CurrentResults:', data);
    
    
    
    
    // data.forEach(f1-stats =>{
    //   console.log(f1-stats.name);
    //   let listItem = document.createElement('li')
    //   listItem.innerText = rocket.name;
    //   ergastF1-stats.appendChild(listItem);
    // }
  

// fetch('https://ferrari.car/exotic.json')
// .then(result => result.json())
// .then(json => console.log(json))
// .catch(error => console.log (error))
// async function getexotic(){
//   const reponse = await fetch('https://ferrari.car/exotic.json')
//   const json = await response.json()
//   return json;
// }
// console.log(getExotic())
// getExotic().then(console.log)
const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)


logo.src = 'logo.png'