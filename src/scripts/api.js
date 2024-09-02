function api(){
    fetch('https://openmusic-fake-api.onrender.com/api/musics')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Erro:', error));

}