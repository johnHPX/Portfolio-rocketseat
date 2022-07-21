// requisição para API do github

function callAxios() {
    const perfilIMG = document.getElementsByClassName("perfil")
    const description = document.getElementById("description")
    const localInfor = document.getElementById("local-infor")
    const githubLink = document.getElementById("github-link")
    const nickGithub = githubLink.getElementsByTagName("p")

    axios.get("https://api.github.com/users/johnHPX")
        .then(response => {
            const responseAPI = response.data
            console.log(responseAPI)
            perfilIMG[0].setAttribute("src", responseAPI.avatar_url)
            perfilIMG[1].setAttribute("src", responseAPI.avatar_url)
            description.innerText = responseAPI.bio
            localInfor.innerText = responseAPI.location
            githubLink.setAttribute("href", responseAPI.html_url)
            nickGithub[0].innerText = responseAPI.login
        })
        .catch(error => console.log(error))


}