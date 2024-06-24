function getFullTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Formatação para garantir dois dígitos (e.g., 09:05:08)
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return hours + ':' + minutes + ':' + seconds;
}

function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var fullTime = getFullTime(); // Chama a função getFullTime para obter o horário completo
    var hours = new Date().getHours(); // Obtém apenas a hora atual para a lógica de mudança de imagem
    var hours = 07
    msg.innerHTML = `Agora são ${fullTime}.`; // Exibe horas, minutos e segundos
    if (hours >= 0 && hours < 12) {
        // Bom dia!
        img.src = 'fotomanha.png';
        document.body.style.background = '#5f92c1';
    } else if (hours >= 12 && hours < 18) {
        // Boa Tarde!
        img.src = 'fototarde.png';
        document.body.style.background = '#c1b674';
    } else {
        // Boa Noite!
        img.src = 'fotonoite.png';
        document.body.style.background = '#515154';
    }
}

console.log(getFullTime()); // Exemplo de saída: 14:07:33