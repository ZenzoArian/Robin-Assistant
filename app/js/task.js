//tasks array
let tasks = [
    {
        'id'    : '0',
        'timer' :  20,
        'image' : '3.003_N_EN.png',
        'text'  : 'Wash your hands',
    },
    {
        'id'    : '1',
        'timer' :  10,
        'image' : '3.004_N_EN.png',
        'text'  : 'Grab your toothbrush',
    },
    {
        'id'    : '2',
        'timer' :  5,
        'image' : '3.005_N_EN.png',
        'text'  : 'Wet your toothbrush',
    },
    {
        'id'    : '3',
        'timer' :  5,
        'image' : '3.006_N_EN.png',
        'text'  : 'Grab your toothpaste',
    },
    {
        'id'    : '4',
        'timer' :  10,
        'image' : '3.007_N_EN.png',
        'text'  : 'Put the toothpaste on your toothbrush',
    },
    {
        'id'    : '5',
        'timer' :  180,
        'image' : '3.008_N_EN.png',
        'text'  : 'Brush your teeth',
    },
    {
        'id'    : '6',
        'timer' :  10,
        'image' : '3.011_N_EN.png',
        'text'  : 'Spit the toothpaste into the sink',
    }
];

let bar = 0;
let time = 0;
let timeS = 0;
let timeM = 0;
let timerVar = 0;
let done = true;
let timeOriginal = 0;
let displayTimeS = '';
let displayTimeM = '';
let displayTime = '00:00';

//set the values for the timer
function setTimer() {
    for(let task in tasks){
        if (tasks[task].id == current) {
            clearInterval(timerVar);
            timeS = 0;
            timeM = 0;
            time = 0;
            timeS = tasks[task].timer;
            timeOriginal = tasks[task].timer;
            timerVar = setInterval(timer, 1000);
        }
    }
}

//use the given values to count down and activate updateTime(), updateTimeBar()
function timer() {
    if (timeS > 60) {
        while (timeS > 60) {
            timeS = timeS - 60;
            timeM = timeM + 1;
        }
    }
    if (timeS == 0 && timeM > 0) {
        timeS = timeS + 60;
        timeM = timeM - 1;
    }
    if (timeS > 0) {
        timeS--;
        time++;
    } else {
        done = true;
        document.getElementById('task--nav-button-' + current).style.opacity = '1';
        document.getElementById('task--nav-button-' + current).style.cursor = 'pointer';
    }

    if (timeS < 10) {
        displayTimeS = '0' + timeS;
    } else {
        displayTimeS = timeS;
    }

    if (timeM < 10) {
        displayTimeM = '0' + timeM;
    } else {
        displayTimeM = timeM;
    }

    updateTime();
    updateTimeBar();

}

//update the time display
function updateTime() {
    displayTime = displayTimeM + ':' + displayTimeS;
    document.getElementById('task--timer-'+ current).innerHTML = '<p>' + displayTime + '</p>';
}

//update the time bar
function updateTimeBar() {
    bar = time / timeOriginal * 100 + '%';
    document.getElementById('task--timerBar-'+ current).style.width = bar;
}

//create string with all tasks
let tasksCon = '';
let taskId = 0;
for(let task in tasks){
    tasksCon += `<div class="task--page" id="task--page-${tasks[task].id}">`;
    tasksCon +=     '<div class="task--timerBar-container">';
    tasksCon +=         '<div id="task--timerBar-' + taskId + '" class="task--timerBar"></div>';
    tasksCon +=     '</div>';
    tasksCon +=     '<div class="task--container">';
    tasksCon +=         '<div class="task--header-container">';
    tasksCon +=             '<div><img src="images/alert_icon.svg" alt="alert icon"></div>';
    tasksCon +=             `<div id="task--timer-` + taskId + `">` + `<p>` + displayTime + `</p>` + `</div>`;
    tasksCon +=             '<div><img src="images/audio_icon.svg" alt="audio icon"></div>';
    tasksCon +=         '</div>';
    tasksCon +=         '<div class="task--content-container">';
    tasksCon +=             `<div class="task--image-container"><img src="images/task/${tasks[task].image}" alt="task image"></div>`;
    tasksCon +=             `<div class="task--text-container"><p>${tasks[task].text}</p></div>`;
    tasksCon +=         '</div>';
    tasksCon +=         '<div class="task--nav-container">';
    tasksCon +=             `<button onclick="changeTask(0)">Back</button>`;
    tasksCon +=             `<button onclick="changeTask(1)" id="task--nav-button-` + taskId + `">Next</button>`;
    tasksCon +=         '</div>';
    tasksCon +=     '</div>';
    tasksCon += '</div>';
    taskId++;
}

document.getElementById('main-task--container').innerHTML = tasksCon;

//check how many tasks there are
tasksAmount = -1;
for(let task in tasks){
    tasksAmount++;
};

//change which task gets displayed
let end = tasksAmount;
let current = -1;

function changeTask(e) {
    hideTasks();
    if (e) {
        if (current == end) {
            completeTask();
        } else if (done) {
            current++;
            done = false;
            document.getElementById('task--nav-button-' + current).style.opacity = '.5';
            document.getElementById('task--nav-button-' + current).style.cursor = 'default';
        } else {
            current++;
        }
    } else {
        if (current == 0) {
            window.location.href = "tasksOverview.html";
        } else {
            current--;
        }
    }
    document.getElementById('task--page-' + current).style.display = 'block';
    document.getElementById('task--timerBar-'+ current).style.width = '0%';
    setTimer();
}

//hide all tasks
function hideTasks() {
    let pages = document.getElementsByClassName('task--page');
    for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    };
}

//display the taskcomplete element
function completeTask() {
    let complete = document.getElementById('task--complete');
    complete.style.display = 'flex';
}