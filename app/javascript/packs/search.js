// function recipeImage() {
//   const btnClass = document.getElementsByClassName("search-btn")[0];
//   btnClass.addEventListener("click", function() {
//     const RWS_APPLICATION_ID = gon.search_key;
//     const url = `https://app.rakuten.co.jp/services/api/Recipe/CategoryList/20170426?format=json&applicationId=${RWS_APPLICATION_ID}`;
//     const recipeString = window.location.search;
//     const XHR = new XMLHttpRequest();
//     XHR.open("GET", url, true);
//     XHR.responseType = "json";
//     XHR.send();
//     const textForm = document.getElementsByClassName("recipe").value;
//     const results = XHR["response"]["result"]["small"];
//     results.forEach(function(result) {
      
//       const formList = document.getElementsByClassName("food_recipe")[0];
//       const formNode = document.createElement("img");
//       formNode.alt = "レシピの画像";
//       formNode.height = "300";
//       formNode.width = "300";
//       formNode.style.backgroundColor = "red";
//       // formNode.src = recipe["categoryUrl"];
//       formList.appendChild(formNode);
//     });
//   });
// };
// window.addEventListener("load", recipeImage);