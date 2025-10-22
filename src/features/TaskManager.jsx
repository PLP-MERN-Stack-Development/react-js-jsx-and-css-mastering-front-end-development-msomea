import React, { useMemo, useState } from 'react'
import useLocalStorage from './hooks/useLocalStorage'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'


export default function TaskManager(){
    const [tasks, setTasks] = useLocalStorage('week3_tasks', [])
    const [text, setText] = useState('')
    const [filter, setFilter] = useState('all')


    function addTask(e){
        e.preventDefault()
        if(!text.trim()) return
        setTasks(prev => [{ id: Date.now(), text: text.trim(), done: false }, ...prev])
        setText('')
    }


    function toggle(id){ setTasks(prev => prev.map(t => t.id === id ? {...t, done: !t.done} : t)) }
    function remove(id){ setTasks(prev => prev.filter(t => t.id !== id)) }


    const filtered = useMemo(()=>{
        if(filter === 'active') return tasks.filter(t => !t.done)
        if(filter === 'completed') return tasks.filter(t => t.done)
        return tasks
    }, [tasks, filter])


    return (
        <Card>
            <h2 className="text-xl font-semibold mb-3">Task Manager</h2>
            <form className="flex gap-2 mb-4" onSubmit={addTask}>
                <input className="flex-1 p-2 rounded border dark:bg-gray-700" value={text} onChange={e=>setText(e.target.value)} placeholder="Add task..." />
                <Button type="submit">Add</Button>
            </form>


            <div className="flex gap-2 mb-4">
                {['all','active','completed'].map(f=> (
                    <button key={f} onClick={()=>setFilter(f)} className={`px-3 py-1 rounded ${filter===f? 'bg-blue-600 text-white':'bg-gray-200 dark:bg-gray-700'}`}>
                        {f}
                    </button>
            ))}
            </div>


            <ul className="space-y-2">
                {filtered.map(t => (
                    <li key={t.id} className="flex items-center justify-between p-2 rounded border dark:border-gray-700">
                        <div className="flex items-center gap-3">
                            <input type="checkbox" checked={t.done} onChange={()=>toggle(t.id)} />
                            <span className={`${t.done? 'line-through opacity-70':''}`}>{t.text}</span>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="secondary" onClick={()=>remove(t.id)}>Delete</Button>
                        </div>
                    </li>
                ))}
            </ul>


            {tasks.length === 0 && <p className="mt-4 text-sm opacity-80">No tasks — add one above.</p>}
        </Card>
)
}