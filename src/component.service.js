import optionsIcon from './options.svg';
import LogoIcon from "./logo.svg";
import BackgroundImage from "./background.jpg";

export class ComponentService {
    constructor() {
        this.content = document.body.querySelector("#content");
        this.pizzaMenuData = [
            ["Ilocano Pinakbet Pizza", "Nagimas!", "PHP 299.99"],
            ["Cebuano Ginisa Pizza", "Lamian!", "PHP 259.99"],
            ["Tagalog Sinigang Pizza", "Masarap!", "PHP 349.99"]
        ];
        this.pastaMenuData = [
            ["Pancit de Ilocano", "Nananam", "PHP 219.99"],
            ["Pancit Bisaya", "Lami kaayo!", "PHP 229.99"],
            ["Pancit Tagalog", "Masiram men!", "PHP 249.99"],
            ["Pancit Malabon", "Laguna ire!", "PHP 349.99"]
        ];
        this.drinksMenuData = [
            ["Buko Juice", "12oz", "PHP 29.99"],
            ["Pinya Juice", "12oz", "PHP 49.99"]
        ];
    }

    renderImages() {
        this.optionsIcon = document.querySelector(".options-icon");
        this.logoIcon = document.querySelector(".logo-icon");
        this.backgroundImage = document.querySelector(".background-image");

        this.optionsIcon.src = optionsIcon;
        this.logoIcon.src = LogoIcon;
        this.backgroundImage.src = BackgroundImage;
    }

    createChildren(parent, childClasses, tag="div") {
        for (let childClass of childClasses) {
            const child = document.createElement(tag);
            child.classList.add(childClass);

            parent.appendChild(child);
        }
    }

    renderMainParts() {
        this.createChildren(this.content, ["header", "body", "background"]);
    }

    renderHeader() {
        this.header = document.querySelector(".header");
        this.createChildren(this.header, ["logo", "options"]);

        const renderLogo = () => {
            this.logo = document.querySelector(".logo");
            this.createChildren(this.logo, ["logo-link"], "a");
            this.logoLink = document.querySelector(".logo-link");
            this.logoLink.href = "#";
            this.createChildren(this.logoLink, ["logo-icon"], "img");
        }

        const renderoptions = () => {
            this.options = document.querySelector(".options");
            this.createChildren(this.options, ["options-link"], "a");
            this.optionsLink = document.querySelector(".options-link");
            this.optionsLink.href = "#";
            this.createChildren(this.optionsLink, ["options-icon"], "img");
        }

        renderLogo();
        renderoptions();
    }

    renderBody() {
        this.body = document.querySelector(".body");
        this.createChildren(this.body, ["title", "tabs", "menu"]);

        

        const createPastaMenu = (menuData) => {
            this.createMenu(menuData);

            this.tabPasta.classList.add("selected");
            this.tabPizza.classList.remove("selected");
            this.tabDrinks.classList.remove("selected");
        }

        const createPizzaMenu = (menuData) => {
            this.createMenu(menuData);

            this.tabPizza.classList.add("selected");
            this.tabPasta.classList.remove("selected");
            this.tabDrinks.classList.remove("selected");
        }

        const createDrinksMenu = (menuData) => {
            this.createMenu(menuData);

            this.tabDrinks.classList.add("selected");
            this.tabPizza.classList.remove("selected");
            this.tabPasta.classList.remove("selected");
        }        

        const renderTitle = () => {
            this.title = document.querySelector(".title");
            this.title.innerHTML = "SLICE N' SLURP";
        }

        const renderTabs = () => {
            this.tabs = document.querySelector(".tabs");
            this.createChildren(this.tabs, ["tab", "tab", "tab"], "button");

            this.tabPizza = this.tabs.children[0];
            this.tabPasta = this.tabs.children[1];
            this.tabDrinks = this.tabs.children[2];

            this.tabPizza.classList.add("pizza");
            this.tabPizza.innerHTML = "PIZZA";
            this.tabPizza.onclick = () => createPizzaMenu(this.pizzaMenuData);

            this.tabPasta.classList.add("pasta");
            this.tabPasta.innerHTML = "PASTA";
            this.tabPasta.onclick = () => createPastaMenu(this.pastaMenuData);

            this.tabDrinks.classList.add("drinks");
            this.tabDrinks.innerHTML = "DRINKS";
            this.tabDrinks.onclick = () => createDrinksMenu(this.drinksMenuData);
        }

        renderTitle();
        renderTabs();
    }

    renderBackground() {
        this.background = document.querySelector(".background");
        this.createChildren(this.background, ["background-image"], "img");
    }

    createMenu(menuData) {
        const menu = document.querySelector(".menu");

        menu.innerHTML = "";
        
        const AddMenuItem = (title, description, price) => {
            let menuItem = document.createElement("a");
            menuItem.classList.add("menu-item");
            menuItem.href = "#";
            
            this.createChildren(menuItem, ["menu-item-title", "menu-item-description", "menu-item-price"]);
            menuItem.querySelector(".menu-item-title").innerHTML = title;
            menuItem.querySelector(".menu-item-description").innerHTML = description;
            menuItem.querySelector(".menu-item-price").innerHTML = price;

            menu.appendChild(menuItem);
        }


        for (let menuItemData of menuData) {
            AddMenuItem(menuItemData[0],menuItemData[1],menuItemData[2]);
        }
    }
}