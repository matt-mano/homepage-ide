let pageHistoryStack = [];

/**
 * 
 * @param {Event} page 
 */
function openPage(page) {
    const pageName = page.attributes['data-paneltype'].value;
    togglePage(pageName);
}

function togglePage(pageName) {
    pageHistoryStack.push(pageName);
    togglePageTab(pageName);
    togglePagePanel(pageName);
}

function togglePageTab(pageName) {

    if(!pageName)
        return;

    let tab = [...document.querySelectorAll(".editor-tab")].find(tab => tab.attributes['data-paneltype'].value === pageName);
    if(!tab) {
        const tabToCreate = `
            <div class="editor-tab" data-paneltype="${pageName}">
                <span class="clickable" 
                    onclick="togglePage('${pageName}')">
                    ${upperCase(pageName)}
                </span>
                <span class="close-button clickable" onclick="closePageTab('${pageName}')">&times;</span>
            </div>
        `;

        document.getElementById('header-items').insertAdjacentHTML('afterbegin', tabToCreate);
    }
}

function togglePagePanel(pageName) {
    const pageToOpen = `section-${pageName}`;

    const allPages = document.querySelectorAll(".editor-section");
    [...allPages].filter(p => p.id !== pageToOpen).forEach(page => {
        page.classList.add('hidden');
    });

    [...allPages].find(p => p.id === pageToOpen)?.classList?.remove("hidden");
}

function closePageTab(pageName) {
    pageHistoryStack = pageHistoryStack.filter(item => item !== pageName);
    document.querySelector(`.editor-tab[data-paneltype="${pageName}"]`).remove();
    
    let newPage = "";
    if(pageHistoryStack.length) {
        newPage = pageHistoryStack.pop();
    }
    togglePage(newPage);

    event.stopPropagation();
}

function upperCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

if( document.readyState !== 'loading' ) {
    togglePage('home');
} else {
    document.addEventListener('DOMContentLoaded', function () {
        togglePage('home');
    });
}