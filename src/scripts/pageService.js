export class PageService {

    pageHistoryStack = [];

    /**
     * 
     * @param {Event} page 
     */
    openPage(page) {
        const pageName = page.attributes['data-paneltype'].value;
        this.togglePage(pageName);
    }

    togglePage(pageName) {
        this.pageHistoryStack.push(pageName);
        this.togglePageTab(pageName);
        this.togglePagePanel(pageName);
    }

    togglePageTab(pageName) {

        if (!pageName)
            return;

        let tab = [...document.querySelectorAll(".editor-tab")].find(tab => tab.attributes['data-paneltype'].value === pageName);
        if (!tab) {
            const tabToCreate = `
            <div class="editor-tab" data-paneltype="${pageName}">
                <span class="clickable" 
                    onclick="pageService.togglePage('${pageName}')">
                    ${this.upperCase(pageName)}
                </span>
                <span class="close-button clickable" onclick="pageService.closePageTab('${pageName}')">&times;</span>
            </div>
        `;

            document.getElementById('header-items').insertAdjacentHTML('afterbegin', tabToCreate);
        }
    }

    togglePagePanel(pageName) {
        const pageToOpen = `section-${pageName}`;

        const allPages = document.querySelectorAll(".editor-section");
        [...allPages].filter(p => p.id !== pageToOpen).forEach(page => {
            page.classList.add('hidden');
        });

        [...allPages].find(p => p.id === pageToOpen)?.classList?.remove("hidden");
    }

    closePageTab(pageName) {
        this.pageHistoryStack = this.pageHistoryStack.filter(item => item !== pageName);
        document.querySelector(`.editor-tab[data-paneltype="${pageName}"]`).remove();

        let newPage = "";
        if (this.pageHistoryStack.length) {
            newPage = this.pageHistoryStack.pop();
        }
        this.togglePage(newPage);

        event?.stopPropagation();
    }

    upperCase(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

}