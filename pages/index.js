"use client";

export default function Home() {
  const videoUrl =
    "https://www.youtube.com/watch?v=IXdNnw99-Ic&list=RDIXdNnw99-Ic&start_radio=1";

  const handleClick = () => {
    window.open(videoUrl, "_blank");
  };

  return (
    <div className="container">
      <h1>Oi Duda (Aqui é o Shadow) 🐈‍⬛</h1>
      <button onClick={handleClick}>Clique aqui</button>
    </div>
  );
}
