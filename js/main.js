import {getAllitems} from "./module/app.js";
import {printItems} from "./components/section.js";

let items = await getAllitems();

let main__body = document.querySelector('.main__body');
let input__search = document.querySelector('.input__search')


main__body.innerHTML = await printItems(items);
input__search.addEventListener('input', async e => {
    let plantilla = "";
    let info = e.target.value.toLowerCase().trim();
    console.log(info);
    let data = items.filter(user => user.name_full.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(info) || user.description.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(info));
    data.forEach(keys => {
        plantilla += /*html*/`
        <section class="section__main">
        <div class="div__image">
            <img id="img__main" src='${keys.avatar}'>
        </div>
        <div class="text__main">
            <strong class="Name">${keys.name_full}</strong>
            <p class="country">${keys.description}</p>
        </div>
        </section>
        ` 
    })
    main__body.innerHTML = plantilla    
    });