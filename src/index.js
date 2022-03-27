import './style.css';
import OptionsSVG from './options.svg';
import LogoSVG from "./logo.svg";
import BackgroundImage from "./background.jpg";

(() => {
    document.querySelector(".options-svg").src = OptionsSVG;
    document.querySelector(".logo-svg").src = LogoSVG;
    document.querySelector(".background-img").src = BackgroundImage;
})();