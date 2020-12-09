const siteId = location.hash.substring(1);
const site = sites.find((site) => site.id === siteId );


const editParameters = {
    editType: 'standard',
    defaultSite: siteId
};


document.querySelector('#editType').addEventListener('change', (event) => {
    event.target.value === 'json' ? editParameters.editType = 'json' : editParameters.editType = 'standard';
    document.querySelector('#editForm').textContent = '';
    generateEditPanelDOM(editParameters);
});


document.querySelector('#editForm').addEventListener('submit', (event) => {
    event.preventDefault();

    editParameters.editType === 'json' ? editSiteJson(event, site) : editSiteStandard(event, site);
});


generateEditPanelDOM(editParameters);