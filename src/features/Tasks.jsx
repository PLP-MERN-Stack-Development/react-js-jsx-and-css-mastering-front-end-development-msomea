import React, { useEffect, useState } from 'react'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'


const PAGE_SIZE = 10


export default function Posts(){
const [posts, setPosts] = useState([])
const [page, setPage] = useState(1)
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)
const [q, setQ] = useState('')


useEffect(()=>{
setLoading(true)
setError(null)
fetch(`https://jsonplaceholder.typicode.com/posts`)
.then(r => r.json())
.then(data => setPosts(data))
.catch(e => setError('Failed to fetch'))
.finally(()=>setLoading(false))
}, [])


const filtered = posts.filter(p => p.title.includes(q) || p.body.includes(q))
const total = Math.ceil(filtered.length / PAGE_SIZE)
const pageItems = filtered.slice((page-1)*PAGE_SIZE, page*PAGE_SIZE)


return (
        <Card>
            <h2 className="text-xl font-semibold mb-3">Your Tasks</h2>
            <div className="flex gap-2 mb-4">
                <input value={q} onChange={e=>{ setQ(e.target.value); setPage(1) }} placeholder="Search title/body" className="flex-1 p-2 rounded border dark:bg-gray-700" />
                <Button onClick={()=>{ setQ(''); setPage(1) }}>Clear</Button>
            </div>


            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}


            <ul className="space-y-3">
                {pageItems.map(p => (
                <li key={p.id} className="p-3 border rounded">
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="text-sm opacity-80">{p.body}</p>
                </li>
                ))}
            </ul>


            <div className="flex items-center gap-2 mt-4">
                <Button variant="secondary" onClick={()=>setPage(s=>Math.max(1, s-1))} disabled={page===1}>Prev</Button>
                <div className="text-sm">Page {page} / {total || 1}</div>
                <Button variant="secondary" onClick={()=>setPage(s=>Math.min(total || 1, s+1))} disabled={page===total}>Next</Button>
            </div>
        </Card>
    )
}