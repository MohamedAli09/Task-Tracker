 

# Task Tracker CLI

## Overview

  solution for the [task-tracker](https://roadmap.sh/projects/task-tracker) challenge from [roadmap.sh](https://roadmap.sh/).

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

 
### Delete Task

```bash
node index.js delete <task-id>
```
 
