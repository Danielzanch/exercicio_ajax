document.addEventListener('DOMContentLoaded', function () {

    $('#link').click(function () {

        const nameElement = document.querySelector('#nome_usuario');
        const usernameElement = document.querySelector('#username');
        const avatarElement = document.querySelector('#avatar');
        const reposElement = document.querySelector('#repos');
        const followersElement = document.querySelector('#followers');
        const followingElement = document.querySelector('#following');
        const linkElement = document.querySelector('#link');

        fetch('https://api.github.com/users/ogiansouza')
        .then(function (res) {
            return res.json();
        })
            .then(function (json) {
            nameElement.innerText = json.name;
            usernameElement.innerText = json.login;
            avatarElement.src = json.avatar_url;
            followersElement.innerText = json.followers;
            followingElement.innerText = json.following;
            repos.innerText = json.public_repos;
            linkElement.href = json.html_url;
        })
        .catch(function(erro) {
            alert("Ocorreu um erro durante o processo");
        })
        .finally (function() {
            alert("Obrigado por usar nossa sistema de visualização de perfil do github! \n Veja a seguir o resultado da busca.")
        })
    })
})