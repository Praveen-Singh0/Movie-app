const apiURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=3";

const apiURLtwo = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const imgPath = 'https://image.tmdb.org/t/p/w1280';
 
async function getMovies(){
    const resp = await fetch(apiURL);
    const respData = await resp.json();
  
    const main = document.querySelector("main");

    respData.results.forEach((movie)=>{ 
         const { poster_path, title, vote_average, overview, id } = movie;
    
 
    const movEl = document.createElement("div");
    movEl.classList.add("movie");
  
    movEl.innerHTML = `
      <img src=" ${ imgPath + poster_path}" 
       alt="${title}"/>
      <div class="movie-info">
      <h3>${title}</h3>
      <span class="${getClassByRate(vote_average)}">${vote_average}</span>
      </div>`;
  
      main.appendChild(movEl); 

      const popup = document.getElementById("popup");
      var a =  popup.innerHTML = `<h2>${title}</h2>
      <h4 class="h">Action & Advanture</h4>
      <p>${vote_average}</p>/10</p>
      <div class="popupDiv">
      <img class="popupIMG" src="${ imgPath + poster_path}" alt="">
      <div><h3>About the movie</h3> ${overview}
        
        <div class="side">
      <h4>Available On</h4>
          <a href="https://www.justwatch.com">click here</a>
      </div>
        </div>
      </div>
        <button class="btn">CLOSE</button>
        <h4>$19.00</h4>`;

        movEl.addEventListener('click', ()=>{ 
          main.classList.add('active');
    
          function callAgain(){
            document.body.appendChild(popup);                                  
            popup.classList.add("activity");
       
            const btn = document.querySelector(".btn");
            btn.addEventListener('click', ()=> {
              popup.classList.remove("activity");
              main.classList.remove('active');
            });}
    
            switch (id) {
              case 736526:
                popup.innerHTML = a;
                callAgain();
                break;
              case 843794:
                popup.innerHTML = a;
                callAgain();
                break;
              case 49046:
                popup.innerHTML = a;
                callAgain();
                break;
              case 616037:
                popup.innerHTML = a;
                callAgain();
                break;
              case 361743:
                popup.innerHTML = a;
                callAgain();
                break;
              case 730629:
                popup.innerHTML = a;
                callAgain();
                break;
              case 287947:
                popup.innerHTML = a;
                callAgain();
                break;
              case 1003580:
                popup.innerHTML = a;
                callAgain();
                break;
            }
    
        })
  });
  return respData;
  
  }

//..........................................................................................

async function getMovieTwo(){
  const resp = await fetch(apiURLtwo);
  const respData = await resp.json();
  
  const mainEl = document.querySelector("main");
  
  respData.results.forEach((movie)=>{
    const { poster_path, title, vote_average, overview, id } = movie;
    // console.log(id);
    
    const movieEl = document.createElement("div");
     movieEl.classList.add("movie");
  
    movieEl.innerHTML = `
      <img src=" ${ imgPath + poster_path}" 
       alt="${title}"/>
      <div class="movie-info">
      <h3>${title}</h3>
      <span class="${getClassByRate(vote_average)}">${vote_average}</span>
      </div>`;
     mainEl.appendChild(movieEl);

     const popup = document.getElementById("popup");
     var a =  popup.innerHTML = `<h2>${title}</h2>
  <h4 class="h">Action & Advanture</h4>
  <p>${vote_average}</p>/10</p>
  <div class="popupDiv">
  <img class="popupIMG" src="${ imgPath + poster_path}" alt="">
  <div><h3>About the movie</h3> ${overview}
    
    <div class="side">
  <h4>Available On</h4>
      <a href="https://www.justwatch.com">click here</a>
  </div>
    </div>
  </div>
    <button class="btn">CLOSE</button>
    <h4>$19.00</h4>`;
    
    // const titlee = document.querySelector("img");
    movieEl.addEventListener('click', ()=>{ 
      mainEl.classList.add('active');

      function callAgain(){
        document.body.appendChild(popup);                                  
        popup.classList.add("activity");
   
        const btn = document.querySelector(".btn");
        btn.addEventListener('click', ()=> {
          popup.classList.remove("activity");
          mainEl.classList.remove('active');
        });}

        switch (id) {
          case 804150:
            popup.innerHTML = a;
            callAgain();
            break;
          case 315162:
            popup.innerHTML = a;
            callAgain();
            break;
          case 943822:
            popup.innerHTML = a;
            callAgain();
            break;
          case 603692:
            popup.innerHTML = a;
            callAgain();
            break;
          case 505642:
            popup.innerHTML = a;
            callAgain();
            break;
          case 850871:
            popup.innerHTML = a;
            callAgain();
            break;
          case 594767:
            popup.innerHTML = a;
            callAgain();
            break;
          case 631842:
            popup.innerHTML = a;
            callAgain();
            break;
        }

    })
  })
  
  return respData;
  }

function getClassByRate(vote){
    if(vote>=8){
      return 'green';
    }
  if(vote>=6){
    return 'orange';
  }
  if(vote>=3){
    return 'red';
  }
}
getMovieTwo();
getMovies(); 


 