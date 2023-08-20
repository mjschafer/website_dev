const updateBackpack = (update) => {
    let main = document.querySelector("main")
    main.innerHTML = markup(backpack);
    console.info(update);

};