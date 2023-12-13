// $(document).ready(function() {
//     $('#link').click(function() {
//         const endpoint = `https://api.github.com/users/ogiansouza`;
//         const botao = (this);
//         $.ajax(endpoint).done(function(resposta) {
//             const nome = resposta.name;
//             const username = resposta.login;
//             const img_user = resposta.avatar_url;
//             const repos = resposta.public_repos;
//             const seguidores = resposta.followers;
//             const seguindo = resposta.following;

//             const nomeElement = `${nome}`;
//             const usernomeElement = `${username}`;
//             const foto = `${img_user}`;
//             const reposElement = `${repos}`;
//             const seguidoresElement = `${seguidores}`;
//             const seguindoElement = `${seguindo}`;

//             $('#nome_usuario').val(nomeElement);
//             $('#username').val(usernomeElement);
//             $('#avatar').val(foto);
//             $('#repos').val(reposElement);
//             $('#seguidores').val(seguidoresElement);
//             $('#seguindo').val(seguindoElement);
//             console.log(seguindoElement);
//         })
//     })
// })

document.addEventListener('DOMContentLoaded', function () {

    $('#link').click(function () {

        const nameElement = document.querySelector('#nome_usuario');
        const usernameElement = document.querySelector('#username');
        const avatarElement = document.querySelector('#avatar');
        const reposElement = document.querySelector('#repos');
        const followersElement = document.querySelector('#followers');
        const followingElement = document.querySelector('#following');
        const linkElement = document.querySelector('#link');

        fetch('https://api.github.com/users/danielzanch')
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
    })
})