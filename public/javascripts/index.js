window.addEventListener("load", (event) => {
    let search = document.getElementById('search-filter')
    search.addEventListener("focus", (event) => {
        search.addEventListener("keypress", (event) => {
            if (event.key === "Enter" || event.key === "Return") {
                let searchString = search.value;
                window.location.href = `/searches/${searchString}`;
            }
        })
    })


    let userContainer = document.querySelectorAll('user-container');
    let userNav = document.querySelectorAll('user-nav-container');
    userContainer.addEventListener('mouseover', e => {
        userNav.visibility = visible;
    })

})
