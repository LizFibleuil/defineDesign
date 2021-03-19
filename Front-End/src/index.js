import HomeScreen from "./screens/HomeScreen";
import SingleFamilyScreen from "./screens/SingleFamilyScreen";
import Error404Screen from './screens/Error404Screen';
import { parseRequestUrl } from "./utils";
import ApartmentScreen from "./screens/ApartmentScreen";
import InspirationScreen from "./screens/InspirationScreen";
import SubmitDesignScreen from "./screens/SubmitDesignScreen";
import FinishScreen from "./screens/FinishScreen";
import DesignsScreen from "./screens/DesignsScreen";

const routes = {
    '/': HomeScreen,
    '/singlefamily': SingleFamilyScreen,
    '/apartment': ApartmentScreen,
    '/inspiration': InspirationScreen,
    '/submitdesign': SubmitDesignScreen,
    '/finish': FinishScreen,
    '/designs': DesignsScreen,
};
const router = async () => {
    const request = parseRequestUrl();
    const parseUrl =
        (request.resource ? `/${request.resource}` : '/') +
        (request.id ? '/:id' : '') +
        (request.verb ? `/${request.verb}` : '');
    const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;
    const main = document.getElementById('main-container');
    main.innerHTML = await screen.render();
    if (screen.after_render) {
        await screen.after_render();
    }
};

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
