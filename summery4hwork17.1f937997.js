let e=1,t="",n=document.querySelector(".list"),a=document.querySelector(".btn"),i=document.querySelector(".input");function s(){fetch(`https://pixabay.com/api/?key=56145643-ed4d83a8d63320a320b20f6d0&q=${t}&page=${e}&per_page=9&orientation=horizontal`).then(e=>e.json()).then(t=>{let i;9*e>=t.totalHits&&(a.disabled=!0,a.classList.add("disable-btn"),a.textContent="більше немає"),i=t.hits.map(({largeImageURL:e,tags:t})=>`
            <li class="item">
               <img src="${e}" alt="${t}" class="images">
            </li>`).join(""),n.insertAdjacentHTML("beforeend",i)})}a.addEventListener("click",()=>{e+=1,s()}),i.addEventListener("input",_.debounce(i=>{t=i.target.value.trim(),e=1,n.innerHTML="",t?(a.style.display="block",a.disabled=!1,a.textContent="Завантажити ще",a.classList.remove("disablet-btn"),s()):a.style.display="none"},350)),a.style.display="none";
//# sourceMappingURL=summery4hwork17.1f937997.js.map
