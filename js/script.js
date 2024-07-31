document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('scrollBtn').addEventListener('click', function() {
        document.getElementById('dsc').scrollIntoView({ behavior: 'smooth' });
    });
});