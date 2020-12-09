// Generate a Site Editing Form
const generateEditPanelDOM = (edit) => {
    const editPanelElement = document.querySelector('#editPanel');
    const formElement = document.querySelector('#editForm');
    const buttonDivElement = document.createElement('div');
    const buttonElement = document.createElement('button');
    
    if ( edit.editType === 'standard' ) {
        renderInputElement('siteName', 'Site Name');
        renderInputElement('department', 'Department');
        renderInputElement('floor', 'Floor');
        renderInputElement('isActive', 'Active Site');
    } else {
        renderTextAreaElement();
    };

    buttonElement.textContent = 'Submit'

    buttonDivElement.appendChild(buttonElement);
    formElement.appendChild(buttonDivElement);
    editPanelElement.appendChild(formElement);
};


// Edit site standard way
const editSiteStandard = (event, site) => {
    const siteKeys = Object.keys(site);
    siteKeys.forEach((key) => {
        site[key] = event['target'][key]['value'];
    });
    location.assign('/index.html');
};


// Edit site with JSON
const editSiteJson = (event, site) => {
    const siteKeys = Object.keys(site);
    siteKeys.forEach((key) => {
        site[key] = event.target.siteBody.value;
    });
    location.assign('/index.html');
};
