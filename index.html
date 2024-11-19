<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task Engine Prototype</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        /* Popup styles */
        .popup {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            z-index: 1000;
            max-width: 80%;
            width: 400px;
            max-height: 80vh;
            overflow-y: auto;
        }
        /* Sidebar and content styles */
        .sidebar {
            position: fixed;
            top: 0;
            left: 0;
            height: 100%;
            width: 200px;
            background-color: #333;
            color: white;
            padding-top: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        @keyframes blink {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
    }
}

.blinking-btn {
    animation: blink 1s infinite;  /* Infinite blinking with 1s duration */
}

        .container {
            margin-left: 220px;
            padding: 20px;
        }
        .task-form, .task-table, .user-documentation {
            display: none;
        }
        #addTaskTab.active, #viewTaskTab.active, #userDocumentationTab.active {
            display: block;
        }
        .sidebar a {
            text-decoration: none;
            color: white;
            padding: 10px;
            width: 100%;
            text-align: center;
            border-bottom: 1px solid #444;
            cursor: pointer;
            font-size: 18px;
        }
        .sidebar a:hover {
            background-color: #575757;
        }
        .container {
            margin-left: 220px;
            padding: 20px;
        }
        .task-form, .task-table, .user-documentation {
            display: none;
        }
        #addTaskTab.active, #viewTaskTab.active, #userDocumentationTab.active {
            display: block;
        }
        /* Task Form & Table Styles */
        #taskTable td button {
            margin-right: 10px;
            padding: 5px 10px;
            border: none;
            cursor: pointer;
            font-size: 16px;
        }
        /* Button Colors */
        .updateBtn {
            background-color: orange;
            color: white;
        }
        #updatePopup h3 {
    color: #333; /* Color for the heading text */
    font-size: 18px; /* Font size for better visibility */
    margin-bottom: 8px; /* Space between heading and field */
    margin-top: 15px; /* Add margin before each section */
}

#updatePopup input,
#updatePopup textarea,
#updatePopup select {
    width: 100%; /* Ensure full width for inputs */
    padding: 10px;
    margin-bottom: 20px; /* Space after the input fields */
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #ccc;
}

#updatePopup textarea {
    height: 100px; /* Set a reasonable height for the description field */
}

        .deleteBtn {
            background-color: red;
            color: white;
        }
        .resetBtn {
            background-color: #ddd;
            color: black;
        }
        .updateBtn:hover, .deleteBtn:hover, .resetBtn:hover {
            opacity: 0.8;
        }
        /* Success Message Styles */
        .success-message {
            background-color: green;
            color: white;
            padding: 10px;
            margin: 10px 0;
            border-radius: 5px;
            display: none;
        }
        /* Blinking Text */
        .blinking-text {
            color: #1d5880;
            font-weight: bold;
            animation: blinker 1s linear infinite;
        }
        @keyframes blinker {
            50% { opacity: 0; }
        }
        /* Center the success message */
        .success-message.show {
            display: block;
        }
        /* Search Styles */
        #searchFilterBar {
            margin-bottom: 20px;
        }
        #searchFilterBar input {
            padding: 5px;
            font-size: 16px;
        }
        /* Confirmation Popup Styles */
#updateConfirmPopup {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    text-align: center;
}

#updateConfirmPopup button {
    padding: 10px 20px;
    margin: 5px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
}



#updateConfirmPopup button:hover {
    opacity: 0.8;
}

        /* No results message */
        #noResultsMessage {
            color: red;
            font-size: 16px;
            display: none;
        }
        #userDocumentationNav {
            color: #3498db;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <!-- Left Sidebar Navigation -->
    <div class="sidebar">
        <a href="#" id="addTaskNav">Add Task</a>
        <a href="#" id="viewTaskNav">View Task</a>
        <a href="#" id="userDocumentationNav">User Documentation</a>
    </div>

    <!-- Main Container -->
    <div class="container">
        <h1>Task Engine</h1>

        <!-- Success Message -->
        <div id="successMessage" class="success-message">Operation Successful!</div>

        <!-- Add Task Tab -->
        <div id="addTaskTab" class="task-form">
            <p class="blinking-text">Click User Documentation for help!!!</p>
            <form id="taskForm">
                <div class="form-left">
                    <h3>Name of Task:</h3>
                    <input type="text" id="title" required>
                    <p id="taskNameError" style="color: red; font-size: medium; margin: 0; display: none;">No numbers or special characters allowed! Please try again.</p>

                    <h3>Description of Task:</h3>
                    <textarea id="description" required></textarea>
                    <p id="wordCount" style="margin: 0;"></p>
                    <span id="descriptionError" style="display: none; color: red;">No numbers or special characters allowed! Please try again</span>

                    <h3>Deadline:</h3>
                    <input type="date" id="deadline" required>
                </div>
                <div class="form-right">
                    <h3>Team:</h3>
                    <select id="team" required>
                        <option value="Development Team">Development Team</option>
                        <option value="Design Team">Design Team</option>
                    </select>

                    <h3>Priority:</h3>
                    <select id="priority" required>
                        <option value="Low">Low: Can be addressed later</option>
                        <option value="Medium">Medium: Needs to be addressed soon</option>
                        <option value="High">High: Needs immediate attention</option>
                    </select>

                    <h3>Assignee:</h3>
                    <select id="assignee" required>
                        <option value="Member1">Member1</option>
                        <option value="Member2">Member2</option>
                    </select>

                    <button id="addTaskBtn" class="blinking-btn" type="submit">
                        <i class="fas fa-plus"></i> Add Task
                    </button>
                    <button type="button" id="resetBtn" class="resetBtn"><i class="fas fa-undo"></i> Reset</button>
                </div>
            </form>
        </div>

        <!-- View Task Tab -->
        <div id="viewTaskTab" class="task-table">
            <!-- Search Bar -->
            <div id="searchFilterBar">
                <input type="text" id="searchInput" placeholder="Search tasks...">
            </div>

            <!-- No results message -->
            <div id="noResultsMessage">No matches found. Please try another search.</div>

            <table id="taskTable">
                <thead>
                    <tr>
                        <th>Name of Task</th>
                        <th>Team</th>
                        <th>Description</th>
                        <th>Priority</th>
                        <th>Deadline</th>
                        <th>Assignee</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Dynamically generated task rows will go here -->
                </tbody>
            </table>
        </div>

      <!-- User Documentation Tab -->
<div id="userDocumentationTab" class="user-documentation">
    <h2>Welcome to Task Engine!</h2>
    <p>Unleash your productivity with Task Engine, your ultimate task management companion!</p>
    <p>This powerful web app is designed to help you:</p>
    <ul>
        <li><strong>Create Tasks:</strong> Effortlessly add tasks with just a few clicks.</li>
        <li><strong>Set Deadlines:</strong> Keep your projects on track by setting clear deadlines.</li>
        <li><strong>Assign Team Members:</strong> Collaborate seamlessly by assigning tasks to your team.</li>
        <li><strong>Prioritize Wisely:</strong> Use priority levels to focus on what matters most.</li>
        <li><strong>Search & Filter:</strong> Find tasks quickly with our intuitive search and filter options.</li>
        <li><strong>Edit & Delete:</strong> Stay flexible by editing or removing tasks as needed.</li>
    </ul>
    <p>Whether you're managing a small project or coordinating a large team, Task Engine is here to streamline your workflow and boost your efficiency. Let's get started and conquer those tasks!</p>

    <hr>

    <h2>Need Assistance?</h2>
    <p><strong>Feeling stuck?</strong> Don't worry! Reach out to your HR Manager:</p>
    <p><strong>Name:</strong> Jane Smith</p>
    <p><strong>Email:</strong> jane.smith@company.com</p>
    <p><strong>Phone:</strong> +1 (987) 654-3210</p>
    <p><strong>Available Hours:</strong> Monday to Friday, 9 AM - 5 PM</p>

    <hr>

    <p>If you're facing issues with the app, our IT Help Desk is here to help:</p>
    <p><strong>Email:</strong> it.support@company.com</p>
    <p><strong>Phone:</strong> +1 (555) 123-4567</p>
    <p><strong>Available Hours:</strong> 24/7 Support</p>

    <p>We're committed to ensuring you have the best experience possible. Don't hesitate to reach out!</p>
</div>

        <!-- Popup for Updating Task -->
        <div id="updatePopup" class="popup">
            <h2>Update Task</h2>
            <form id="updateForm">
                <h3>Name of Task:</h3>
                <input type="text" id="updateTitle" required>
                <p id="updateTaskNameError" style="color: red; font-size: medium; margin: 0; display: none;">No numbers or special characters allowed! Please try again.</p>

                <h3 for="updateDescription">Description of Task:</h3>
<textarea id="updateDescription" required></textarea>
<p id="updateWordCount" style="margin: 0; font-size: 14px; color: #555;">Word count: 0</p>
<span id="descriptionError" style="display: none; color: red;">No numbers or special characters allowed! Please try again</span>
                <h3>Deadline:</h3>
                <input type="date" id="updateDeadline" required>

                <h3>Team:</h3>
                <select id="updateTeam" required>
                    <option value="Development Team">Development Team</option>
                    <option value="Design Team">Design Team</option>
                </select>

                <h3>Priority:</h3>
                <select id="updatePriority" required>
                    <option value="Low">Low: Can be addressed later</option>
                    <option value="Medium">Medium: Needs to be addressed soon</option>
                    <option value="High">High: Needs immediate attention</option>
                </select>

                <h3>Assignee:</h3>
                <select id="updateAssignee" required>
                    <option value="Member1">Member1</option>
                    <option value="Member2">Member2</option>
                </select>

                <button type="submit">Save Changes</button>
                <button type="button" id="closePopupBtn">Close</button>
            </form>
        </div>
    </div>

    <script>
        const tasks = [];
        let editingIndex = null;

        // Function to show/hide tabs
        function showTab(tabId) {
            document.querySelectorAll('.task-form, .task-table, .user-documentation').forEach(tab => {
                tab.classList.remove('active');
            });
            document.getElementById(tabId).classList.add('active');
        }

        // Show Tab functionality
        document.getElementById('addTaskNav').addEventListener('click', () => showTab('addTaskTab'));
        document.getElementById('viewTaskNav').addEventListener('click', () => showTab('viewTaskTab'));
        document.getElementById('userDocumentationNav').addEventListener('click', () => showTab('userDocumentationTab'));

        // Add Task Name input validation
        function validateTaskName(inputId, errorId) {
            const taskNameInput = document.getElementById(inputId);
            const taskNameError = document.getElementById(errorId);
            const originalValue = taskNameInput.value;
            const cleanedValue = originalValue.replace(/[^a-zA-Z\s]/g, '');

            if (originalValue !== cleanedValue) {
                taskNameInput.value = cleanedValue;
            }

            if (/[^a-zA-Z\s]/.test(originalValue)) {
                taskNameError.style.display = 'block';
            } else {
                taskNameError.style.display = 'none';
            }
        }

        document.getElementById('title').addEventListener('input', function() {
            validateTaskName('title', 'taskNameError');
        });

        // Word count functionality
        function updateWordCount(textareaId, counterId) {
            const description = document.getElementById(textareaId).value;
            const wordCount = document.getElementById(counterId);
            const words = description.trim().split(/\s+/).filter(Boolean);
            wordCount.textContent = `${words.length}/30`;
        }

        document.getElementById('description').addEventListener('input', function() {
            updateWordCount('description', 'wordCount');
        });

        // Function to validate the description input
function validateDescription(inputId, errorId) {
    const descriptionInput = document.getElementById(inputId);
    const descriptionError = document.getElementById(errorId);
    const originalValue = descriptionInput.value;
    const cleanedValue = originalValue.replace(/[^a-zA-Z\s]/g, ''); // Adjust regex as needed

    if (originalValue !== cleanedValue) {
        descriptionInput.value = cleanedValue;
    }

    if (/[^a-zA-Z\s]/.test(originalValue)) {
        descriptionError.style.display = 'block';
    } else {
        descriptionError.style.display = 'none';
    }
}

// Add description input validation for "Add Task" form
document.getElementById('description').addEventListener('input', function() {
    validateDescription('description', 'descriptionError');
});

// Add description input validation for "Update Task" form
document.getElementById('updateDescription').addEventListener('input', function() {
    validateDescription('updateDescription', 'updateDescriptionError');
});


        // Add task form submission logic
        document.getElementById('taskForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const userConfirmed = confirm('Are you sure you want to add this new task?');
    if (userConfirmed) {
            const task = {
                title: document.getElementById('title').value,
                description: document.getElementById('description').value,
                deadline: document.getElementById('deadline').value,
                team: document.getElementById('team').value,
                priority: document.getElementById('priority').value,
                assignee: document.getElementById('assignee').value,
                status: 'Pending'
            };
            tasks.push(task);
            showSuccessMessage();
            clearForm();
            renderTaskTable();
    }
        });

        // Reset form functionality
        document.getElementById('resetBtn').addEventListener('click', function() {
            clearForm();
        });

        function clearForm() {
            document.getElementById('taskForm').reset();
            document.getElementById('taskNameError').style.display = 'none';
            document.getElementById('wordCount').textContent = '';
        }

     // Render task table
function renderTaskTable() {
    const taskTable = document.getElementById('taskTable').getElementsByTagName('tbody')[0];
    taskTable.innerHTML = ''; // Clear the table before re-rendering
    tasks.forEach((task, index) => {
        const row = taskTable.insertRow();

        // Insert task details into table
        row.insertCell(0).textContent = task.title;
        row.insertCell(1).textContent = task.team;
        row.insertCell(2).textContent = task.description;

        // Priority Cell with conditional color styling
        const priorityCell = row.insertCell(3);
        const priorityText = task.priority;
        const priorityElement = document.createElement('span');
        priorityElement.textContent = priorityText;

        // Apply color based on priority
        if (priorityText === "Low") {
            priorityElement.style.color = "green";  // Green for low priority
        } else if (priorityText === "Medium") {
            priorityElement.style.color = "orange";  // Orange for medium priority
        } else if (priorityText === "High") {
            priorityElement.style.color = "red";  // Red for high priority
        }

        priorityCell.appendChild(priorityElement);

        // Insert other task details into the table
        row.insertCell(4).textContent = task.deadline;
        row.insertCell(5).textContent = task.assignee;
        row.insertCell(6).textContent = task.status;

        // Action Buttons (with icons)
        const actionsCell = row.insertCell(7);

       // Create the Update button with an icon
       const updateBtn = document.createElement('button');
                updateBtn.innerHTML = '<i class="fas fa-edit"></i> Update';  // Font Awesome Edit Icon
                updateBtn.classList.add('updateBtn');
                actionsCell.appendChild(updateBtn);
    
                // Create the Delete button with an icon
                const deleteBtn = document.createElement('button');
                deleteBtn.innerHTML = '<i class="fas fa-trash"></i> Delete';  // Font Awesome Trash Icon
                deleteBtn.classList.add('deleteBtn');
                actionsCell.appendChild(deleteBtn);

        // Add event listener for Update button
        updateBtn.addEventListener('click', function() {
            const userConfirmed = confirm('Are you sure you want to update this task?');
    if (userConfirmed) {
        editTask(index);  // Proceed with editing the task if confirmed
    }
});
            

        // Add event listener for Delete button
        deleteBtn.addEventListener('click', function() {
            deleteTask(index);  // Call the delete function to remove the task
        });
        // Add drag-and-drop functionality
        row.setAttribute('draggable', true); // Make row draggable
                row.addEventListener('dragstart', (e) => handleDragStart(e, index));
                row.addEventListener('dragover', (e) => handleDragOver(e));
                row.addEventListener('drop', (e) => handleDrop(e, index));
            });
        }
    
        let draggedRowIndex = null; // Store the index of the dragged row
    
        // Handle the start of dragging
        function handleDragStart(e, index) {
            draggedRowIndex = index; // Store the index of the task being dragged
            e.dataTransfer.setData('text', e.target.id); // Store the ID of the dragged task
        }
    
        // Allow the target area (task row) to accept the dragged item
        function handleDragOver(e) {
            e.preventDefault(); // Required to allow drop
        }
    
        // Handle the drop of the dragged task
        function handleDrop(e, index) {
            e.preventDefault();
            const draggedTask = tasks[draggedRowIndex]; // The task being dragged
            tasks.splice(draggedRowIndex, 1); // Remove the task from the original position
            tasks.splice(index, 0, draggedTask); // Insert the task into the new position
    
            renderTaskTable(); // Re-render the task table to reflect the new order
        }
   





        // Edit task logic
        function editTask(index) {
            const task = tasks[index];
            document.getElementById('updateTitle').value = task.title;
            document.getElementById('updateDescription').value = task.description;
            document.getElementById('updateDeadline').value = task.deadline;
            document.getElementById('updateTeam').value = task.team;
            document.getElementById('updatePriority').value = task.priority;
            document.getElementById('updateAssignee').value = task.assignee;
            editingIndex = index;
            document.getElementById('updatePopup').style.display = 'block';

            // Update word count for description
            updateWordCount('updateDescription', 'updateWordCount');
        }

        // Close popup
        document.getElementById('closePopupBtn').addEventListener('click', function() {
            document.getElementById('updatePopup').style.display = 'none';
        });

        // Add Task Name input validation for update form
        document.getElementById('updateTitle').addEventListener('input', function() {
            validateTaskName('updateTitle', 'updateTaskNameError');
        });

        // Word count functionality for update description
        document.getElementById('updateDescription').addEventListener('input', function() {
            updateWordCount('updateDescription', 'updateWordCount');
        });

        // Save updated task
        document.getElementById('updateForm').addEventListener('submit', function(event) {
            event.preventDefault();

            // Validate task name
            validateTaskName('updateTitle', 'updateTaskNameError');
            if (document.getElementById('updateTaskNameError').style.display === 'block') {
                return; // Don't submit if there's an error
            }

            const updatedTask = {
                title: document.getElementById('updateTitle').value,
                description: document.getElementById('updateDescription').value,
                deadline: document.getElementById('updateDeadline').value,
                team: document.getElementById('updateTeam').value,
                priority: document.getElementById('updatePriority').value,
                assignee: document.getElementById('updateAssignee').value,
                status: 'Pending'
            };

            tasks[editingIndex] = updatedTask;
            document.getElementById('updatePopup').style.display = 'none';
            renderTaskTable();
            showSuccessMessage();
        });

        // Delete task function
        function deleteTask(index) {
            if (confirm('Are you sure you want to delete this task?')) {
            tasks.splice(index, 1);
            renderTaskTable();
            showSuccessMessage();
        }
    }

        // Success message functionality
        function showSuccessMessage() {
            const successMessage = document.getElementById('successMessage');
            successMessage.classList.add('show');
            setTimeout(function() {
                successMessage.classList.remove('show');
            }, 2000);
        }
        document.getElementById('searchInput').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const filteredTasks = tasks.filter(task => {
        return task.title.toLowerCase().includes(searchTerm) ||
            task.team.toLowerCase().includes(searchTerm) ||
            task.description.toLowerCase().includes(searchTerm) ||
            task.priority.toLowerCase().includes(searchTerm) ||
            task.deadline.toLowerCase().includes(searchTerm) ||
            task.assignee.toLowerCase().includes(searchTerm) ||
            task.status.toLowerCase().includes(searchTerm);
    });

    const taskTable = document.getElementById('taskTable').getElementsByTagName('tbody')[0];
    taskTable.innerHTML = ''; // Clear the table

    if (filteredTasks.length === 0) {
        document.getElementById('noResultsMessage').style.display = 'block';
    } else {
        document.getElementById('noResultsMessage').style.display = 'none';
        filteredTasks.forEach((task, index) => {
            const row = taskTable.insertRow();
            row.insertCell(0).textContent = task.title;
            row.insertCell(1).textContent = task.team;
            row.insertCell(2).textContent = task.description;

            // Priority Cell with color styling
            const priorityCell = row.insertCell(3);
            const priorityElement = document.createElement('span');
            priorityElement.textContent = task.priority;
            if (task.priority === "Low") {
                priorityElement.style.color = "green";
            } else if (task.priority === "Medium") {
                priorityElement.style.color = "orange";
            } else if (task.priority === "High") {
                priorityElement.style.color = "red";
            }
            priorityCell.appendChild(priorityElement);

            row.insertCell(4).textContent = task.deadline;
            row.insertCell(5).textContent = task.assignee;
            row.insertCell(6).textContent = task.status;

            // Action Buttons with icons
            const actionsCell = row.insertCell(7);

            // Update button with icon
            const updateBtn = document.createElement('button');
            updateBtn.innerHTML = '<i class="fas fa-edit"></i> Update';
            updateBtn.classList.add('updateBtn');
            actionsCell.appendChild(updateBtn);

            // Delete button with icon
            const deleteBtn = document.createElement('button');
            deleteBtn.innerHTML = '<i class="fas fa-trash"></i> Delete';
            deleteBtn.classList.add('deleteBtn');
            actionsCell.appendChild(deleteBtn);

            // Event listeners for Update and Delete buttons
            updateBtn.addEventListener('click', function() {
                editTask(index);
            });
            deleteBtn.addEventListener('click', function() {
                deleteTask(index);
            });

            // Add drag-and-drop functionality
            row.setAttribute('draggable', true);
            row.addEventListener('dragstart', (e) => handleDragStart(e, index));
            row.addEventListener('dragover', (e) => handleDragOver(e));
            row.addEventListener('drop', (e) => handleDrop(e, index));
        });
    }
});

        // Show Add Task Tab initially
        showTab('addTaskTab');
    </script>
</body>
</html>
