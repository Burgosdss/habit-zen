import React, { Component } from "./node_modules/react";
import style from "./HabitForm.css";

class HabitForm extends Component {
    
    state = {
        Goal: '',
        Habit: '',
        StartDate: '',
        EndDate: ''
    }

    render() {
        return (
            <div>
                <h3>HabitForm</h3>
            </div>
        )
    }
}

export default HabitForm;