let tasks = document.querySelectorAll('.task-name');
tasks.forEach(task => {
    task.addEventListener('click', (e) => {
        var steps = e.target.parentElement.querySelector('.task-steps');
        steps.classList.toggle('open');
    })
});

let bubbles = document.querySelectorAll('.task-bubbles span');
bubbles.forEach(bubble => {
    bubble.addEventListener('mouseenter', (e) => {
        var popup = e.target.querySelector('.popup');
        if (popup) {
            popup.style.display = 'block';
        }
    })
    bubble.addEventListener('mouseleave', (e) => {
        var popup = e.target.querySelector('.popup');
        if (popup) {
            popup.style.display = 'none';
        }
    })
}) 

let weekBubbles = document.querySelectorAll('.week-task-bubbles span');
weekBubbles.forEach(bubble => {
    bubble.addEventListener('mouseenter', (e) => {
        var popup = e.target.querySelector('.popup');
        if (popup) {
            popup.style.display = 'block';
        }
    })
    bubble.addEventListener('mouseleave', (e) => {
        var popup = e.target.querySelector('.popup');
        if (popup) {
            popup.style.display = 'none';
        }
    })
}) 