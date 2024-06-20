export const printItems = async(items) => {
    let plantilla = "";
    items.forEach(elements => {
        console.log(elements)
        plantilla += /*html*/`
        <section class="section__main">
        <div class="div__image">
            <img id="img__main" src='${elements.avatar}'>
        </div>
        <div class="text__main">
            <strong class="Name">${elements.name_full}</strong>
            <p class="country">${elements.description}</p>
        </div>
        </section>
        `});
    return plantilla
}