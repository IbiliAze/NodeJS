renderSites(sites, filters);


document.querySelector('#searchText').addEventListener('input', (event) => {
    filters.searchText = event.target.value;
    renderSites(sites, filters);
});


document.querySelector('#siteForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const site = {
        id: uuidv4(),
        siteName: event.target.elements.siteName.value,
        department: event.target.elements.department.value,
        floor: event.target.elements.floor.value,
        isActive: event.target.elements.isActive.value.toLowerCase() === 'false' ? false : true
    };
    sites.push(site);
    
    const siteElement = generateSiteDOM(site);
    document.querySelector('#sites').appendChild(siteElement);

    event.target.elements.siteName.value = '';
    event.target.elements.department.value = '';
    event.target.elements.floor.value = '';
    event.target.elements.isActive.value = '';
});


document.querySelector('#hideInactive').addEventListener('change', (event) => {
    filters.hideInactive = event.target.checked;
    renderSites(sites, filters);
});


document.querySelector('#filterBy').addEventListener('change', (event) => {
    console.log(event.target.value);
});