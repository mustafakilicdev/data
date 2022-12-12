//return a promise
async function getAllContacts(){
    const res = await fetch('https://github.com/mustafakilicdev/data/blob/main/data/contacts.json')
    const contacts = await res.json();
    return contacts
}

// Presentational Temlating 
// Interactive Templating: convert templates to element addEvents
async function renderContacts (props) {
    const contacts = await getAllContacts();
    const container = document.createElement('div')
    let markup = ``

    contacts.forEach(({name, email})=>{
        const template =`
        <aside class="list-group-item list-group-item-action">
        <header class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">${name}</h5>
        </header>
       <address>${email}</address>
      </aside>
        `
        markup += template
    })
     container.innerHTML = markup
    return container
}

export {renderContacts}