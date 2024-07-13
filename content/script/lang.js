let headerLangList=document.querySelector(".header-lang .choose-lang-list"),
headerLangBtn=document.querySelector(".header-lang .choose-lang-button");

headerLangBtn.onclick = () => {
    headerLangList.classList.toggle("show")
}