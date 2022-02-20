loadData();

// Submit Button Script Start


function submission() {
    // Getting Input Start

    var input = document.getElementById('item').value;

    // Getting Input End


    // Checking Input Start

    if (input.length === 0) {
        return null;
    }

    // Checking Input End


    // Local Storage Start

    var storage = JSON.parse(localStorage.getItem('todos'));
    if (storage == null) {
        var data = [input];
        localStorage.setItem('todos', JSON.stringify(data));
    }
    else {
        storage.push(input);
        localStorage.setItem('todos', JSON.stringify(storage));
    }
    storage = JSON.parse(localStorage.getItem('todos'));
    var index = storage.length - 1;

    // Local Storage End


    // row element/wrapper Start

    var itemRow = document.createElement('div');
    itemRow.className = ('item-row');
    itemRow.id = ('item-row');
    itemRow.id = (index);

    // row id End


    // Printing input Start

    var toDoCreated = document.createElement('div');
    toDoCreated.id = ('to-dos');
    toDoCreated.innerText = input;

    // Printing input End


    // Delete Button Start

    var delBtn = document.createElement('button');
    delBtn.innerText = "Delete";
    delBtn.id = ('del-btn');
    delBtn.className = ('del-btn');
    delBtn.setAttribute('onclick', 'del(this)');

    // Delete Button End


    // Appending Everything From Above Start

    var toDoAppended = document.getElementById('added-item-container');
    toDoAppended.appendChild(itemRow);
    itemRow.append(toDoCreated, delBtn);

    // Appending Everything From Above End


    // Input-Box Clear Start

    document.getElementById('item').value = '';

    // Input-Box Clear End


}

// Submit Button Script End


// Clear Button Script Start

function clearItem() {
    var toDoClear = document.getElementById('added-item-container').innerHTML = "";
    var clearStorage = localStorage.clear();
}

// Clear Button Script End


// Delete Button Script Start

function del(location) {
    var del = location.parentElement.remove();
    var index = location.parentElement.getAttribute('id');
    var storage = JSON.parse(localStorage.getItem('todos'));
    storage.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(storage));
    var index = storage.length - 1;
    loadData();
}

// Delete Button Script End


// Onload Data Start

function loadData() {
    var storage = JSON.parse(localStorage.getItem('todos'));
    if (storage != null) {
        document.getElementById('added-item-container').innerHTML = '';
        for (let i = 0; i < storage.length; i++) {


            // row element/wrapper Start

            var itemRow = document.createElement('div');
            itemRow.className = ('item-row');
            itemRow.id = ('item-row');
            itemRow.id = (i);

            // row element/wrapper End


            // Printing input Start

            var toDoCreated = document.createElement('div');
            toDoCreated.id = ('to-dos');
            toDoCreated.innerText = storage[i];

            // Printing input End


            // Delete Button Start

            var delBtn = document.createElement('button');
            delBtn.innerText = "Delete";
            delBtn.id = ('del-btn');
            delBtn.className = ('del-btn');
            delBtn.setAttribute('onclick', 'del(this)');

            // Delete Button End


            // Appending Everything From Above Start

            var toDoAppended = document.getElementById('added-item-container');
            toDoAppended.appendChild(itemRow);
            itemRow.append(toDoCreated, delBtn);

            // Appending Everything From Above End


        }
    }
}

window.onload = function () {
    loadData();
}

// Onload Data End