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

    let tasks = [];
    let editIndex = null;

    // Function to add a new row in the task table
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
                <button class="edit-btn"><i class="fas fa-pencil-alt"></i> Update</button> <!-- Added icon here -->
                <button class="delete-btn"><i class="fas fa-trash"></i> Delete</button> <!-- Added icon here -->
            </td>
        `;

        row.querySelector('.delete-btn').addEventListener('click', () => {
            if (confirm('Are you sure you want to delete this task?')) {
                tasks.splice(index, 1); // Remove task from array
                displayTasks(); // Re-display tasks after deletion
                showMessage('Task deleted successfully!');
            }
        });

        row.querySelector('.edit-btn').addEventListener('click', () => {
            editTask(index); // Populate the form with selected task data
        });

        // Change the color of the priority text based on priority level
        const priorityCell = row.cells[3];
        priorityCell.style.color = task.priority === 'High' ? 'red' : task.priority === 'Medium' ? 'orange' : 'green';
    }

    // Function to display all tasks
    function displayTasks() {
        taskTable.innerHTML = ''; // Clear the table before displaying
        tasks.forEach((task, index) => {
            addTaskRow(task, index); // Add each task to the table
        });
    }

    // Function to show a notification message
    function showMessage(message) {
        const popup = document.createElement('div');
        popup.className = 'popup';
        popup.innerHTML = `
            <p>${message}</p>
            <button class="close-btn">Close</button>
        `;
        document.body.appendChild(popup);

        // Style the popup
        popup.style.position = 'fixed';
        popup.style.bottom = '20px';
        popup.style.left = '50%';
        popup.style.transform = 'translateX(-50%)';
        popup.style.backgroundColor = '#333';
        popup.style.color = '#fff';
        popup.style.padding = '10px';
        popup.style.borderRadius = '5px';
        popup.style.zIndex = '1000';

        popup.querySelector('.close-btn').addEventListener('click', () => {
            document.body.removeChild(popup); // Close the popup on button click
        });

        setTimeout(() => {
            if (document.body.contains(popup)) {
                document.body.removeChild(popup); // Auto close the popup after 3 seconds
            }
        }, 3000);
    }

    // Event listener for form submission to add or update a task
    taskForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from refreshing the page

        const newTask = {
            title: document.getElementById('title').value,
            team: document.getElementById('team').value,
            description: document.getElementById('description').value,
            priority: document.getElementById('priority').value,
            deadline: document.getElementById('deadline').value,
            assignee: document.getElementById('assignee').value
        };

        if (editIndex === null) {
            // Adding a new task
            if (confirm('Are you sure you want to add this task?')) {
                tasks.push(newTask);
                showMessage('Task added successfully!');
                taskForm.reset(); // Clear the form
                document.querySelector('button[type="submit"]').innerHTML = '<i class="fas fa-plus"></i> Add Task'; // Reset button text
            }
        } else {
            // Updating an existing task
            if (confirm('Are you sure you want to update this task?')) {
                tasks[editIndex] = newTask; // Update the task at the editIndex
                showMessage('Task updated successfully!');
                editIndex = null; // Reset editIndex after update
                taskForm.reset(); // Clear the form
                document.querySelector('button[type="submit"]').innerHTML = '<i class="fas fa-plus"></i> Add Task'; // Reset button text
            }
        }

        displayTasks(); // Re-render the task list after form submission
    });

    // Function to populate the form with data when editing a task
    function editTask(index) {
        const task = tasks[index];
        document.getElementById('title').value = task.title;
        document.getElementById('team').value = task.team;
        document.getElementById('description').value = task.description;
        document.getElementById('priority').value = task.priority;
        document.getElementById('deadline').value = task.deadline;
        document.getElementById('assignee').value = task.assignee;

        editIndex = index; // Set the editIndex to the task index
        document.querySelector('button[type="submit"]').innerHTML = '<i class="fas fa-plus"></i> Update Task'; // Change button text to "Update"
    }

    // Word count logic for task description
    descriptionInput.addEventListener('input', function() {
        const wordCount = descriptionInput.value.split(/\s+/).filter(word => word.length > 0).length;
        wordCountDisplay.textContent = `${wordCount}/30 words`;
        wordCountDisplay.style.color = wordCount > 30 ? 'red' : '#888'; // Change color if word count exceeds 30
    });

    // Set minimum date for deadline input to today's date
    const today = new Date().toISOString().split('T')[0];
    deadlineInput.setAttribute('min', today);

    // Function to filter tasks by search and priority
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
                addTaskRow(task, tasks.indexOf(task)); // Add filtered tasks to the table
            });
            noResultsMessage.style.display = 'none'; // Hide no results message
        } else {
            noResultsMessage.style.display = 'block'; // Show no results message
        }
    }

    // Add event listeners for search and filter
    searchInput.addEventListener('input', filterTasks);
    filterSelect.addEventListener('change', filterTasks);

    // Help button for showing help popup
    helpButton.addEventListener('click', function() {
        helpPopup.style.display = 'block';
        helpMessage.textContent = "This is a task management application where you can create, edit, and delete tasks, set deadlines, assign them to team members, and filter tasks by priority.";
    });

    // Close help popup
    closePopupButton.addEventListener('click', function() {
        helpPopup.style.display = 'none';
    });

    // Reset button to clear form and reset task list
    resetButton.addEventListener('click', function() {
        taskForm.reset(); // Reset the form fields
        document.querySelector('button[type="submit"]').innerHTML = '<i class="fas fa-plus"></i> Add Task'; // Reset button text
        editIndex = null; // Reset edit index
        noResultsMessage.style.display = 'none'; // Hide no results message
    });

    displayTasks(); // Display tasks on page load
});
