import {getAllitems} from "./module/app.js";
import {printItems} from "./components/section.js";

let items = await getAllitems();

let main__body = document.querySelector('.main__body');


main__body.innerHTML = await printItems(items);