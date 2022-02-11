// "use strict";
const BASE_URL = `http://www.omdbapi.com/?`;
const IMAGE_BASE = `http://img.omdbapi.com/?`;
const API_KEY = `859dbc06`;
const movieInput = document.querySelector("input");
const button = document.querySelector("button");
const section = document.querySelector(".movie-list");
const imgPoster = document.createElement("div");
section.appendChild(imgPoster);
function renderList(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].Title, arr[i].Year, arr[i].Poster);
    section.innerHTML += `<ul><li>${arr[i].Title}</li></ul>`;
    section.innerHTML += `<img src=${arr[i].Poster}>`;
    section.innerHTML += `<button id ='${[i]}'class ="info_B"> More Info</button>`;
    section.innerHTML += `<div class ="movie_info">
    <p>Title: ${arr[i].Title}</p>
    <p>Year: ${arr[i].Year}</p>
    <p>id: ${arr[i].imdbID}</p></div>`;
  } 
  //display nth all 
  const AllInfo = document.querySelectorAll('.movie_info');
  for(let i = 0; i < AllInfo.length;i++){
    AllInfo[i].style.display = 'none';
  }
const button = document.querySelectorAll(".info_B");

button.forEach(function (i){
    i.addEventListener('click',function(){
        // console.log(i);
        num = i.id;
        AllInfo[num].style.display = 'block';
    })
})

}
button.addEventListener("click", async () => {
  let valueInput = movieInput.value;
  try {
    let response = await axios.get(
      `${BASE_URL}apikey=${API_KEY}&s=${valueInput}`
    );
    let movieInfo = response.data.Search;
    renderList(movieInfo);
    console.log(response);
    console.log(movieInfo);
  } catch (error) {
    console.log(error);
  }
  //   let reponseTwo = await axios.get(
  //     `${IMAGE_BASE}apikey=${API_KEY}&s=${valueInput}`
  //   );
  //   console.log(reponseTwo);
});



// const BASE_URL = `http://omdbapi.com/?apikey=`;
// // const IMG_URL = `http://img.omdbapi.com/`;
// const API_KEY = `859dbc06`;
// const input = document.querySelector("input");
// const button = document.querySelector("button");
// const section = document.querySelector(".movie-list");
// let image = document.createElement("div");
// section.appendChild(image);


// button.addEventListener("click", async () => {
//     let movieInput = input.value;
//     try {
//         let response = await axios.get(`${BASE_URL}${API_KEY}&s=${movieInput}`);
//   console.log(response);
//   let movieObj = response.data.Search;
//   renderList(movieObj);
//     } catch (e) {
//         console.log(e);
//     }
//  })

// function renderList(movieList) {
//     for(let i = 0; i < movieList.length; i++){
//         // console.log(movieList[i].Poster);
//         section.innerHTML += `<ul><li>${movieList[i].Title}</li></ul>`;
//         section.innerHTML += `<img src=${movieList[i].Poster}>`;
//         //section.appendChild(moreInfo);
//         //section.innerHTML += `<button id="moreinfo">More Info</button>`;
    
//         let viewMoreButton = document.createElement("button");
//             viewMoreButton.textContent ="View More Info";
//             viewMoreButton.style.cursor = "pointer";//change
//             let infoDiv = document.createElement('div');
//         viewMoreButton.addEventListener('click', async ()=>{
//             try {
//                 const response = await axios.get(`${BASE_URL}${API_KEY}&t=${movieList[i].Title}`);
//                 console.log(response);
//                 let resultViewInfo = response.data;
//                 infoDiv.innerHTML = ` Title: ${resultViewInfo.Title} <br>
//                                     Year: ${resultViewInfo.Year}<br>
//                                     Language: ${resultViewInfo.Language}<br>
//                                     Genre: ${resultViewInfo.Genre}<br>
//                                     Runtime: ${resultViewInfo.Runtime} <br>
//                                     Plot: ${resultViewInfo.Plot} `;
//             } catch (e) {
//                 console.log(e);
//             }
//         })
//         displayDiv.appendChild(viewMoreButton);
//         displayDiv.appendChild(infoDiv);
       
//     }
//     }