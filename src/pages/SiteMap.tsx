// SiteMap.tsx
import { Link } from "wouter"

export default function SiteMap() {
  const routes = [
    { path: "/", label: "Home" },
    { path: "/homePage", label: "Home Page" },
    { path: "/about", label: "About" },
    { path: "/music-videos", label: "Music Videos" },
    { path: "/corporate-videos", label: "Corporate Videos" },
    { path: "/contact", label: "Contact" },
    { path: "/services", label: "Services" },
    { path: "/all-budgets-welcomed", label: "All Budgets Welcomed" },
    { path: "/miami-best-music-video-production-company-trends", label: "Miami Best Video Trends" },
    { path: "/color-grading", label: "Color Grading" },
    { path: "/corporate-video-production-miami", label: "Corporate Video Production Miami" },
    { path: "/florida-video-production-company", label: "Florida Video Production Company" },
    { path: "/miami-video-production", label: "Miami Video Production" },
    { path: "/music-video-production", label: "Music Video Production" },
    { path: "/music-video-production-company-atlanta", label: "Music Video Production Company Atlanta" },
    { path: "/music-video-production-company-los-angeles", label: "Music Video Production Company Los Angeles" },
    { path: "/music-video-production-company-new-york", label: "Music Video Production Company New York" },
    { path: "/miami-video-production-company", label: "Miami Video Production Company" },
    { path: "/movies", label: "Movies" },
    { path: "/music-video-production-companies-in-miami", label: "Music Video Production Companies in Miami" },
    { path: "/music-video-companies", label: "Music Video Companies" },
    { path: "/packages", label: "Packages" },
    { path: "/phantom-camera", label: "Phantom Camera" },
    { path: "/red-dragon", label: "Red Dragon" },
    { path: "/miami-video-production-services", label: "Miami Video Production Services" },
    { path: "/music-video-directors-in-miami", label: "Music Video Directors in Miami" },
    { path: "/music-video-production-miami", label: "Music Video Production Miami (Companies)" },
    { path: "/video-production-miami-film-production-companies/", label: "Video Production Miami Film Production Companies" },
    { path: "/regulus-films", label: "Regulus Films" },
    { path: "/about-regulus", label: "About Regulus" },
    { path: "/miami-music-video-production", label: "Miami Music Video Production" },
    { path: "/music-video-promotion", label: "Music Video Promotion" },
    { path: "/behind-the-scenes", label: "Behind The Scenes" },
    { path: "/fort-lauderdale-video-production", label: "Fort Lauderdale Video Production" },
  ]

  return (
    <div className="min-h-screen pt-32">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Site Map</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {routes.map((route) => (
            <li key={route.path}>
              <Link href={route.path}>
                <a className="text-blue-600 hover:underline">{route.label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
