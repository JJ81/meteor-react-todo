// Task component - represents a single todo item
Task = React.createClass({
    // ??
    propTypes: {
        // This component gets the task to display through a React prop.
        // We can use propTypes to indicate it is required
        task: React.PropTypes.object.isRequired
    },

    toggleChecked() { // update
        // Set the checked property to the opposite of its current value
        Tasks.update(this.props.task._id, {
            $set: {checked: ! this.props.task.checked}
        });
    },

    deleteThisTask() { // remove
        Tasks.remove(this.props.task._id);
    },

    render() {
        // Give tasks a different className when they are checked off,
        // so that we can style them nicely in CSS
        const taskClassName = this.props.task.checked ? "checked" : "";

        // 로그인한 계정과 각 리스트의 이름을 확인하여 로그인한 계정에 맞는 리스트만 노출할 수 있도록 한다.
        return (
            <li className={taskClassName} onClick={this.toggleChecked}>

                {this.props.task.username}

                <button className="delete" onClick={this.deleteThisTask}>
                    Delete
                </button>

                <input
                    type="checkbox"
                    readOnly={true}
                    checked={this.props.task.checked}
                    onClick={this.toggleChecked} />

                <span className="text">
                  <strong>{this.props.task.text}</strong> ({this.props.task.username})
                </span>

            </li>
        );
    }
});