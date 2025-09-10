"use client"
import { useEffect, useState } from "react"

// my simple dashboard for add/delete chars (localstorage)

export default function DashboardPage() {
  const [items, setItems] = useState<any[]>([])
  const [name, setName] = useState("")
  const [species, setSpecies] = useState("")

  useEffect(() => {
    const raw = localStorage.getItem("myChars")
    setItems(raw ? JSON.parse(raw) : [])
  }, [])

  useEffect(() => {
    localStorage.setItem("myChars", JSON.stringify(items))
  }, [items])

  function add() {
    if (!name || !species) return
    setItems([{ id: Date.now(), name, species }, ...items])
    setName("")
    setSpecies("")
  }

  function del(id: number) {
    setItems(items.filter(x => x.id !== id))
  }

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <form
        onSubmit={e => {
          e.preventDefault()
          add()
        }}
      >
        <input
          placeholder="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          placeholder="species"
          value={species}
          onChange={e => setSpecies(e.target.value)}
        />
        <button type="submit">add</button>
      </form>

      <ul>
        {items.map(it => (
          <li key={it.id}>
            {it.name} ({it.species})
            <button onClick={() => del(it.id)}>delete</button>
          </li>
        ))}
      </ul>

      {items.length === 0 && <p>no data yet</p>}
    </div>
  )
}
