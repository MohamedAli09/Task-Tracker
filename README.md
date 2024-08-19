 

# Task Tracker CLI

## Overview

The **Task Tracker CLI** is a simple command-line tool for managing tasks. It allows you to add, list, update, and delete tasks with different statuses. The tasks are stored in a JSON file, making it easy to maintain and retrieve the task data.

## Features

- **Add a Task**: Create a new task with a description and an initial status of "todo".
- **List Tasks**: View all tasks or filter tasks by their status (e.g., "todo", "in-progress", "done").
- **Mark Task Status**: Update the status of an existing task.
- **Delete Task**: Remove a task by its ID (functionality to be implemented).

## Requirements

- Node.js installed on your machine.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/MohamedAli09/Task-Tracker.git
    cd Task-Tracker
    ```

2. Ensure you have Node.js installed. If not, download and install it from the [official website](https://nodejs.org/).

 
## Usage

### Add a Task

To add a new task, use the following command:

```bash
node index.js add "Task description"
```

### List Tasks

To list all tasks, use:

```bash
node index.js list
```

To list tasks by status, use:

```bash
node index.js list <status>
```

Valid statuses include `todo`, `in-progress`, and `done`.

### Mark Task Status

To change the status of a task, use:

```bash
node index.js mark <task-id> <new-status>
```

Replace `<task-id>` with the ID of the task and `<new-status>` with the desired status.

### Delete Task

*Note: The delete functionality is not yet implemented.*

## File Structure

- **`index.js`**: Main script for handling CLI commands and interacting with the task data.
- **`taskTracker.json`**: JSON file used to store the tasks.

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements.

## License

This project is licensed under the MIT License.

---

This description provides a clear overview of what the CLI application does, how to use it, and where to find or contribute to the code. Adjust any sections as needed based on your project's specific details.
