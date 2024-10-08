 

# Task Tracker CLI

## Overview

  solution for the [task-tracker](https://roadmap.sh/projects/task-tracker) challenge from [roadmap.sh](https://roadmap.sh/).

## Features

- **Add a Task**: Create a new task with a description and an initial status of "todo".
- **List Tasks**: View all tasks or filter tasks by their status (e.g., "todo", "in-progress", "done").
- **Update a Task**: Modify the description of an existing task.
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
node taskTraker.js add "Task description"
```

### List Tasks

To list all tasks, use:

```bash
node taskTraker.js list
```

To list tasks by status, use:

```bash
node taskTraker.js list <status>
```

Valid statuses include `todo`, `in-progress`, and `done`.

### Update a Task
To update the description of a task, use:

```bash
node taskTraker.js update <task-id> "New task description"
```

### Mark Task Status

To change the status of a task, use:

```bash
node taskTraker.js mark <task-id> <new-status>
```

 
### Delete Task

```bash
node taskTraker.js delete <task-id>
```
 
