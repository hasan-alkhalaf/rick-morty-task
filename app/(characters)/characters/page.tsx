"use client";
import { useState, useEffect } from "react";

export default function CharactersPage() {
  const [chars, setChars] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then(res => res.json())
      .then(data => setChars(data.results || []));
  }, []);

  const filtered = chars.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <div className="box">
        <h2>Characters</h2>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        <div className="char-grid">
          {filtered.map(c => (
            <a key={c.id} href={`/characters/${c.id}`} className="char-card">
              <img src={c.image} alt={c.name} />
              <p>{c.name}</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
