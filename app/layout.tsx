import "./globals.css";

export const madata = {
  title: "Rick & Morty App",
  description: "Small demo with characters and dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <a href="/">Home</a>
          <span>  | </span>
          <a href="/characters">Characters</a>
          <span> | </span>
          <a href="/manage/dashboard">Dashboard</a>
        </nav>
        {children}
      </body>
    </html>
  );
}
