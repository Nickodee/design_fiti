import "./globals.css";


export const metadata = {
  title: "Design Fiti",
  description: "Created by Design Fiti",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
