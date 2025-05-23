import React, { useDebugValue } from "react";
import Header from '../others/Header'
import TaskListNumbers from "../others/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = () => {
    return (
        <div className="p-10 bg-[#1C1C1C] h-screen  " >
            <Header />
            <TaskListNumbers />
            <TaskList />

        </div>
    )
}

export default EmployeeDashboard