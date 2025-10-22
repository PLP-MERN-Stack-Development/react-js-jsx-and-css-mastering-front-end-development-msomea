import React from 'react'
import { Routes, Route } from 'react-router'
import Layout from './components/Layout'
import TaskManager from './features/TaskManager'
import Tasks from "./features/Tasks"


export default function App(){
return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<TaskManager />} />
      <Route path="tasks" element={<Tasks />} />
      </Route>
    </Routes>
  )
}