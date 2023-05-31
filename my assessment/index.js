document.title = "Assessment"
const main = document.querySelector(".main")
const img = document.querySelector("img")
const title = document.getElementById("title")
const fullName = document.getElementById("fullName")
const number = document.getElementById("number")
const email = document.getElementById("email")
const address = document.getElementById("address")


const url = "https://randomuser.me/api"

const getRandomUser = () => {
    fetch(url).then((response) => {
        return response.json()
        })
        .then((data)=> {
            console.log(data);
            img.src = `${data.results[0].picture.medium}`
            title.textContent += `${data.results[0].name.title}`
            fullName.textContent += `${data.results[0].name.first}`
            number.textContent += `${data.results[0].phone}`
            email.textContent += `${data.results[0].email}`
            address.textContent += `${data.results[0].location.city}`
            

            
        })
}

getRandomUser()

main.style.backgroundColor = "blue"
