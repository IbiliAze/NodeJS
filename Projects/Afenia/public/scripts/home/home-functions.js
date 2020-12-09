// Delete a site
const deleteSite = (siteId) => {
    const siteIndex = sites.findIndex( (site) => site.id === siteId );
    sites.splice(siteIndex, 1);
};


// Render sites
const renderSites = (sites, filters) => {
    let filteredSites = sites.filter((site) => {
        return site.id.toLowerCase().includes(filters.searchText.toLowerCase()) 
            || site.siteName.toLowerCase().includes(filters.searchText.toLowerCase());
    });
    
    if (filters.hideInactive) {
        filteredSites = filteredSites.filter((site) => {
            return site ? site.isActive === true : site
        });
    };

    document.querySelector('#sites').innerHTML = '';

    filteredSites.forEach((site) => {
        const siteElement = generateSiteDOM(site);
        document.querySelector('#sites').appendChild(siteElement);
    });
};


// Generate DOMs
const generateSiteDOM = (site) => {
    const siteElement = document.createElement('div');
    const textElement = document.createElement('a');
    const deleteButton = document.createElement('button');
    const editButton = document.createElement('button');
    const viewButton = document.createElement('button');
    const checkbox = document.createElement('input');


    // Setup text attribute => href:site.html
    textElement.setAttribute('href', `site.html#${site.id}`);
    textElement.setAttribute('id', 'siteNameText');


    // Setup checkbox attribute => type:checkbox
    checkbox.setAttribute('type', 'checkbox');


    // Setup button attributes => id:id
    deleteButton.setAttribute('id', 'deleteSite');
    editButton.setAttribute('id', 'editSite');
    viewButton.setAttribute('id', 'viewButton');


    // Setup button event listeners
    deleteButton.addEventListener('click', (event) => {
        deleteSite(site.id);
        renderSites(sites, filters);
    });
    // Edit button redirect
    editButton.addEventListener('click', (event) => {
        location.assign(`/site.html#${site.id}`);
    });

    
    // Add text to Site Name and Button
    deleteButton.textContent = 'Delete'; 
    editButton.textContent = 'Edit';
    viewButton.textContent = 'View';
    textElement.textContent = site.siteName;

    
    // Position the elements from left to right
    siteElement.appendChild(checkbox);
    siteElement.appendChild(textElement);
    siteElement.appendChild(viewButton);
    siteElement.append(editButton);
    siteElement.appendChild(deleteButton);

    return siteElement;
};