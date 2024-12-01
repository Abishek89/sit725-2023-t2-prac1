document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('locationForm');
    const result = document.getElementById('result');
    const resultMessage = document.getElementById('resultMessage');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const location = document.getElementById('location').value;

        if (location.trim()) {
            result.style.display = 'block';
            resultMessage.textContent = `Searching for sockets near ${location}...`;
        } else {
            result.style.display = 'block';
            resultMessage.textContent = 'Please enter a valid location.';
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
});
