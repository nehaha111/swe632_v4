document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('taskForm');
    const taskTable = document.getElementById('taskTable').getElementsByTagName('tbody')[0];
    const searchInput = document.getElementById('search');
    const filterSelect = document.getElementById('filter');
    const descriptionInput = document.getElementById('description');
    const wordCountDisplay = document.getElementById('wordCount');
    const deadlineInput = document.getElementById('deadline');
    const noResultsMessage = document.getElementById('noResults');
    const resetButton = document.getElementById('resetButton');
    const helpButton = document.getElementById('helpButton');
    const closePopupButton = document.getElementById('closePopup');
    const helpPopup = document.getElementById('helpPopup');
    const helpMessage = document.getElementById('helpMessage');
    const notification = document.getElementById('notification');
    const formHeading = document.getElementById('formHeading');

    let tasks = [];
    let editIndex = null; // Track the index of the task being edited

    // Function for notification
    function showMessage(message) {
        notification.textContent = message; // Set message text
        notification.style.opacity = '1'; // Show notification

        // Automatically hide notification after 3 seconds
        setTimeout(() => {
            notification.style.opacity = '0'; // Fade out notification
        }, 3000);
    }

    // Function to add a row to the task table
    function addTaskRow(task, index) {
        const row = taskTable.insertRow();
        row.innerHTML = `
            <td>${task.title}</td>
            <td>${task.team}</td>
            <td>${task.description}</td>
            <td>${task.priority}</td>
            <td>${task.deadline}</td>
            <td>${task.assignee}</td>
            <td>
                <select>
                    <option value="Not Started">Not Started</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                    <option value="Blocked">Blocked</option>
                </select>
            </td>
            <td>
                <button class="edit-btn"><i class="fas fa-edit"></i> Update</button>
                <button class="delete-btn"><i class="fas fa-trash-alt"></i> Delete</button>
            </td>
        `;

        // Add delete functionality
        row.querySelector('.delete-btn').addEventListener('click', () => {
            if (confirm('Are you sure you want to delete this task?')) {
                tasks.splice(index, 1); // Remove the task from the list
                displayTasks(); // Re-display the tasks
                showMessage('Task deleted successfully!'); // Confirmation message
            }
        });

        // Add edit functionality
        row.querySelector('.edit-btn').addEventListener('click', () => {
            editTask(index); // Directly call editTask without confirmation
        });

        // Apply priority color to the priority cell
        const priorityCell = row.cells[3];
        if (task.priority === 'High') {
            priorityCell.style.color = 'red';
        } else if (task.priority === 'Medium') {
            priorityCell.style.color = 'orange';
        } else if (task.priority === 'Low') {
            priorityCell.style.color = 'green';
        }
    }

    // Function to display all tasks
    function displayTasks() {
        taskTable.innerHTML = ''; // Clear the table
        tasks.forEach((task, index) => {
            addTaskRow(task, index); // Add each task to the table
        });
    }

    // Add or update a task
    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const newTask = {
            title: document.getElementById('title').value,
            team: document.getElementById('team').value,
            description: document.getElementById('description').value,
            priority: document.getElementById('priority').value,
            deadline: document.getElementById('deadline').value,
            assignee: document.getElementById('assignee').value
        };

        if (editIndex === null) {
            // Prompt for confirmation when adding a new task
            if (confirm('Are you sure you want to add this task?')) {
                tasks.push(newTask);
                showMessage('Task added successfully!'); // Confirmation message
                taskForm.reset(); // Clear the form
            }
        } else {
            // Prompt for confirmation before updating the existing task
            if (confirm('Are you sure you want to update this task?')) {
                tasks[editIndex] = newTask; // Update the existing task
                showMessage('Task updated successfully!'); // Confirmation message
                editIndex = null; // Reset editIndex after updating
                taskForm.reset(); // Clear the form
            }
        }

        displayTasks(); // Refresh the task table
        resetForm();
    });

    // Function to fill the form with task data for editing
    function editTask(index) {
        const task = tasks[index];
        
        // Populate the form with the task's details
        document.getElementById('title').value = task.title;
        document.getElementById('team').value = task.team;
        document.getElementById('description').value = task.description;
        document.getElementById('priority').value = task.priority;
        document.getElementById('deadline').value = task.deadline;
        document.getElementById('assignee').value = task.assignee;
    
        // Highlight the task row being edited
        const rows = taskTable.querySelectorAll('tr');
        rows.forEach(row => row.classList.remove('editing')); // Remove highlight from all rows
        rows[index + 1].classList.add('editing'); // Highlight the current row (index + 1 for header row)
    
        // Update the form heading and button text
        formHeading.textContent = "Edit Task";
        document.querySelector('button[type="submit"]').textContent = "Update Task";
    
        // Set the current edit index and mode
        editIndex = index;
    }

    function resetForm() {
        // Reset the form inputs
        taskForm.reset();

        // Reset the form heading and button text
        formHeading.textContent = "Add New Task";
        document.querySelector('button[type="submit"]').textContent = "Add Task";

        // Remove all highlights from rows
        const rows = taskTable.querySelectorAll('tr');
        rows.forEach(row => row.classList.remove('editing'));

        // Reset the edit index and mode
        editIndex = null;
    }

    // Word count logic
    descriptionInput.addEventListener('input', function() {
        const wordCount = descriptionInput.value.split(/\s+/).filter(word => word.length > 0).length;
        wordCountDisplay.textContent = `${wordCount}/30 words`;
        wordCountDisplay.style.color = wordCount > 30 ? 'red' : '#888';
    });

    // Set date input to only show future dates
    const today = new Date().toISOString().split('T')[0];
    deadlineInput.setAttribute('min', today);

    // Function to filter tasks by search or priority
    function filterTasks() {
        const searchQuery = searchInput.value.toLowerCase();
        const filterValue = filterSelect.value;

        const filteredTasks = tasks.filter(task => 
            (task.title.toLowerCase().includes(searchQuery) || 
            task.description.toLowerCase().includes(searchQuery) ||
            task.team.toLowerCase().includes(searchQuery) ||
            task.priority.toLowerCase().includes(searchQuery) ||
            task.deadline.toLowerCase().includes(searchQuery) ||
            task.assignee.toLowerCase().includes(searchQuery)) &&
            (filterValue === '' || task.priority === filterValue)
        );

        taskTable.innerHTML = ''; // Clear the table

        if (filteredTasks.length > 0) {
            filteredTasks.forEach((task, index) => {
                addTaskRow(task, tasks.indexOf(task));
            });
            noResultsMessage.style.display = 'none';
        } else {
            noResultsMessage.style.display = 'block';
        }
    }

    searchInput.addEventListener('input', filterTasks);
    filterSelect.addEventListener('change', filterTasks);

    // Help and Documentation Popup Logic
    helpButton.addEventListener('click', function() {
        helpPopup.style.display = 'block';
        helpMessage.textContent = "Hey!"; // Show "Hello" message
    });

    // Close help popup
    closePopupButton.addEventListener('click', function() {
        helpPopup.style.display = 'none';
    });

    // Reset button functionality
    resetButton.addEventListener('click', function() {
        taskForm.reset(); // Reset the form fields to their initial values
        document.querySelector('button[type="submit"]').textContent = 'Add Task'; // Reset button text to 'Add Task'
        editIndex = null; // Clear the edit index
        noResultsMessage.style.display = 'none'; // Hide no results message
    });

    displayTasks(); // Display tasks when DOM is loaded
});
