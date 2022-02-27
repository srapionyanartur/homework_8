
function fetchData () {
        fetch('https://ghibliapi.herokuapp.com/films') 
                .then (response => {
                       
                      if (!response.ok) {
                                throw Error("ERROR")
                        }

        return response.json()
        
        }).then(data => {
                console.log(data);
                const html = data
                .map(films => {
                        return `
                        <div class = "films">

                        
                        <p><b>Title:</b> ${films.title}</p>
                        <p><b>Release Date:</b> ${films.release_date}</p>
                        <p><b>Director:</b> ${films.director}</p>
                        <p><b>Description:</b> ${films.description}</p>

                        </div>`
                })
                .join("")

        document.querySelector("#app").insertAdjacentHTML("afterbegin",html)

        })
        
        .catch(error => {
                console.log(error)

        })
}

fetchData()

       


