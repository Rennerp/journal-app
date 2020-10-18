import React from 'react'

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage: 'url(https://i.blogs.es/3650f5/eclipsed-moon-trail-c-chuanjin-su/450_1000.jpg)'
        }}
      >
      </div>

      <div className="journal__entry-body">
        <p className="journal__entry-title">
          Un nuevo dia
        </p>
        <p className="journal__entry-content">
          Este es un nuevo texo basura mas texto basura
          para rellenar la caja
        </p>
      </div>

      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>16</h4>
      </div>
    </div>
  )
}
