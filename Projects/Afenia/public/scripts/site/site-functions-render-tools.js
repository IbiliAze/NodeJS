// Generate a Site Editing Form for a standard input
const renderInputElement = (name, placeHolder) => {
    const editPanelElement = document.querySelector('#editPanel');
    const formElement = document.querySelector('#editForm');
    const inputDivElement = document.createElement('div');
    const inputElement = document.createElement('input');

    inputElement.setAttribute('name', name);
    inputElement.setAttribute('placeholder', placeHolder);
    inputElement.setAttribute('type', 'text');
    inputElement.value = site[name];

    inputDivElement.appendChild(inputElement);
    formElement.appendChild(inputDivElement);
    editPanelElement.appendChild(formElement);
};


// Generate a Site Editing Form for a JSON input
const renderTextAreaElement = () => {
    const editPanelElement = document.querySelector('#editPanel');
    const formElement = document.querySelector('#editForm');
    const textAreaDivElement = document.createElement('div');
    const textAreaElement = document.createElement('textarea');

    textAreaElement.setAttribute('id', 'siteBody');
    textAreaElement.setAttribute('placeholder', 'JSON formatted Site Object');
    textAreaElement.setAttribute('name', 'siteBody');
    textAreaElement.setAttribute('cols', '48');
    textAreaElement.setAttribute('rows', '10');
    textAreaElement.setAttribute('font', 'calibri');
    textAreaElement.textContent = JSON.stringify(site, null, 2);

    textAreaDivElement.appendChild(textAreaElement);
    formElement.appendChild(textAreaDivElement);
    editPanelElement.appendChild(formElement);
};

