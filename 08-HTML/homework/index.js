document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('home').addEventListener('click', (e) =>  {
        document.getElementById('home').classList.add('active');
        document.getElementById('about_us').classList.remove('active');
        document.getElementById('mensaje-inferior').style.display = 'flex';
        document.getElementById('informacion').style.display = 'none';
    });
    document.getElementById('about_us').addEventListener('click', (e) =>  {
        document.getElementById('about_us').classList.add('active');
        document.getElementById('home').classList.remove('active');
        document.getElementById('mensaje-inferior').style.display = 'none';
        document.getElementById('informacion').style.display = 'flex';
    });
}, false);