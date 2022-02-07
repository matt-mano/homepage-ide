import "../styles/site.css";
import { PageService } from "./pageService"; "./pageService.js";

window.pageService = new PageService();

if (document.readyState !== 'loading') {
    pageService.togglePage('home');
} else {
    document.addEventListener('DOMContentLoaded', function () {
        pageService.togglePage('home');
    });
}