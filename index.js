window.onload = () => {
    checkFiles();
}

const refreshBtn = () => {
    const btn = document.querySelector('.button-refresh');
    btn.classList.add('animate-spin');
    setTimeout(() => window.location.reload(), 100 + Math.floor(Math.random() * 500));
}

// const checkFiles = () {

// }