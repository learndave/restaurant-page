import './style.css';
import { ComponentService } from './component.service';

const componentService = new ComponentService();

const run = (componentService) => {
    componentService.renderMainParts();
    componentService.renderHeader();
    componentService.renderBody();
    componentService.renderBackground();
    componentService.renderImages();
}

run(componentService);