//Add person info array
let AddPersonInfo = [
    {
        'id'    : '0',
        'textTitle'  : 'Step 1',
        'textSmall'  : 'Click on the add person icon.',
        'textBig'  : 'If you scroll to the top of the page you can see a icon of a person with a plus next to it on the right side of the already added persons. Click on it.'
    },
    {
        'id'    : '1',
        'textTitle'  : 'Step 2',
        'textSmall'  : 'Input the persons info.',
        'textBig'  : 'There should now be an input in which you can enter the persons name.'
    },
    {
        'id'    : '2',
        'textTitle'  : 'Step 3',
        'textSmall'  : 'Add the person.',
        'textBig'  : 'Click on the person and add him/her by clicking on the "Add" button.'
    }
];



//create string with all info
let addPersonInfoCon = '';
let addPersonInfoId = 0;
for(let info in AddPersonInfo){
    addPersonInfoCon += `<div class="sub-all" id="sub-${AddPersonInfo[info].id}">`;
    addPersonInfoCon +=         '<div class="sub-details">';
    addPersonInfoCon +=             `<p>${AddPersonInfo[info].textTitle}</p>`;
    addPersonInfoCon +=             `<p>${AddPersonInfo[info].textSmall}</p>`;
    addPersonInfoCon +=             `<p>${AddPersonInfo[info].textBig}</p>`;
    addPersonInfoCon +=         '</div>';
    addPersonInfoCon +=     '</div>';
    addPersonInfoCon += '</div>';
    addPersonInfoId++;
}

document.getElementById('main-addPersonInfo--container').innerHTML = addPersonInfoCon;



//Change account info array
let ChangeAccountInfo = [
    {
        'id'    : '0',
        'textTitle'  : 'Step 1',
        'textSmall'  : 'Go to our <i>Profile</i> page.',
        'textBig'  : 'If you scroll to the top of the page you can see your account name in the top left on which you can click to get to your <i>Profile</i> page.'
    },
    {
        'id'    : '1',
        'textTitle'  : 'Step 2',
        'textSmall'  : 'Change your information.',
        'textBig'  : 'There should now be five inputs on which you can click to change the information inside.'
    },
    {
        'id'    : '2',
        'textTitle'  : 'Step 3',
        'textSmall'  : 'Save your new information',
        'textBig'  : 'you can now click on the button "Save Changes" to save the changes you have made.'
    }
];


//create string with all info
let changeAccountInfoCon = '';
let changeAccountInfoId = 0;
for(let info in ChangeAccountInfo){
    changeAccountInfoCon += `<div class="sub-all" id="sub-${ChangeAccountInfo[info].id}">`;
    changeAccountInfoCon +=         '<div class="sub-details">';
    changeAccountInfoCon +=             `<p>${ChangeAccountInfo[info].textTitle}</p>`;
    changeAccountInfoCon +=             `<p>${ChangeAccountInfo[info].textSmall}</p>`;
    changeAccountInfoCon +=             `<p>${ChangeAccountInfo[info].textBig}</p>`;
    changeAccountInfoCon +=         '</div>';
    changeAccountInfoCon +=     '</div>';
    changeAccountInfoCon += '</div>';
    changeAccountInfoId++;
}

document.getElementById('main-changeProfileInfo--container').innerHTML = changeAccountInfoCon;



//Add/change/delete tasks info array
let taskInfo = [
    {
        'id'    : '0',
        'textTitle'  : 'Step 1',
        'textSmall'  : 'Go to the <i>Task Overview</i> page.',
        'textBig'  : 'If you scroll to the top of the page you can see the person(s) you have added. Click on one of them and then click on the "Tasks" button.'
    },
    {
        'id'    : '1',
        'textTitle'  : 'Step 2',
        'textSmall'  : 'Change/delete/add a task',
        'textBig'  : 'If you want to change/delete a task click on the icons on the right side of the task. If you want to add a task click on the "Add task" button on the left side of the already existing tasks'
    },
    {
        'id'    : '2',
        'textTitle'  : 'Step 3',
        'textSmall'  : 'Follow the steps for adding a task',
        'textBig'  : 'Now that you clicked on "Add Task" you need to follow the steps that are on the screen. At the final step click on the button "Confirm" to confirm adding the task'
    }
];


//create string with all info
let taskInfoCon = '';
let taskInfoId = 0;
for(let info in taskInfo){
    taskInfoCon += `<div class="sub-all" id="sub-${taskInfo[info].id}">`;
    taskInfoCon +=         '<div class="sub-details">';
    taskInfoCon +=             `<p>${taskInfo[info].textTitle}</p>`;
    taskInfoCon +=             `<p>${taskInfo[info].textSmall}</p>`;
    taskInfoCon +=             `<p>${taskInfo[info].textBig}</p>`;
    taskInfoCon +=         '</div>';
    taskInfoCon +=     '</div>';
    taskInfoCon += '</div>';
    taskInfoId++;
}

document.getElementById('main-taskInfo--container').innerHTML = taskInfoCon;

