"use client";
import { useState, useEffect } from "react";

export default function CharacterPage({ params }) {
  const [char, setChar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
      .then(res => res.json())
      .then(data => {
        setChar(data);
        setLoading(false);
      });
  }, [params.id]);

  if (loading) return <p>Loading...</p>;
  if (!char) return <p>No character found.</p>;

  return (
    <main>
      <div className="char-details box">
        <img src={char.image} alt={char.name} />
        <h2>{char.name}</h2>
        <p><strong>Status:</strong> {char.status}</p>
        <p><strong>Species:</strong> {char.species}</p>
        <p><strong>Gender:</strong> {char.gender}</p>
        <p><strong>Origin:</strong> {char.origin?.name}</p>
     <a href="/characters">
  <button>← Back to Characters</button>
</a> 
      </div>
    </main>
  );
}
