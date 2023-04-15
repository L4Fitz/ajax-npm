import '../component/computer-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main =() => {
    const searchElement = document.querySelector('search-bar');
    const computerListElement = document.querySelector('computer-list');

    const onButtonSearchClicked = async () => {
        try{
            const result = await DataSource.searchComputer(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message);
        }
    };
    const renderResult = results => {
        computerListElement.computer = results;
    };

    const fallbackResult = message => {
        computerListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
