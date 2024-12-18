import React, { useState } from "react";
import { BsDot, BsChevronDown, BsChevronUp } from "react-icons/bs";

const SidebarRightHomepage = () => {
  // Stato espnzione
  const [isExpanded, setIsExpanded] = useState(false);

  //  numero  elementi
  const totalItems = 9; //  totale di "li"
  const limit = isExpanded ? totalItems : 4;

  return (
    <div className="card shadow-sm mt-3">
      <div className="card-body">
        <h5 className="card-title fw-bold">In primo piano</h5>
        <p className="text-muted mb-2">a cura di LinkedIn Notizie</p>
        <ul className="list-unstyled">
          {React.Children.toArray(
            [
              <li className="mb-3">
                <span className="fw-bold">Tech: le tendenze del 2025</span>
                <div className="text-muted small">
                  2 ore fa
                  <BsDot size={20} />
                  1.734 lettori
                </div>
              </li>,
              <li className="mb-3">
                <span className="fw-bold">Revolut</span>
                <div className="text-muted small">
                  1 giorno fa
                  <BsDot size={20} />
                  604 lettori
                </div>
              </li>,
              <li className="mb-3">
                <span className="fw-bold">Istantanee dal Maximall Pompeii</span>
                <div className="text-muted small">
                  2 ore fa
                  <BsDot size={20} />
                  310 lettori
                </div>
              </li>,
              <li className="mb-3">
                <span className="fw-bold">Come sarà il lavoro nel 2025</span>
                <div className="text-muted small">
                  23 minuti fa
                  <BsDot size={20} />
                  15 lettori
                </div>
              </li>,
              <li className="mb-3">
                <span className="fw-bold">Big Ideas: 15 spunti per il 2025</span>
                <div className="text-muted small">
                  2 ore fa
                  <BsDot size={20} />
                  4.470 lettori
                </div>
              </li>,
              <li className="mb-3">
                <span className="fw-bold">Unicredit-Banco Bpm</span>
                <div className="text-muted small">
                  1 ora fa
                  <BsDot size={20} />
                  3.721 lettori
                </div>
              </li>,
              <li className="mb-3">
                <span className="fw-bold">Che cosa fa Gemini 2.0</span>
                <div className="text-muted small">
                  2 ore fa
                  <BsDot size={20} />
                  630 lettori
                </div>
              </li>,
              <li className="mb-3">
                <span className="fw-bold">Approvato il Ddl Lavoro</span>
                <div className="text-muted small">
                  2 ore fa
                  <BsDot size={20} />
                  396 lettori
                </div>
              </li>,
              <li className="mb-3">
                <span className="fw-bold">Censis fotografa gli italiani</span>
                <div className="text-muted small">
                  2 ore fa
                  <BsDot size={20} />
                  340 lettori
                </div>
              </li>
            ].slice(0, limit)
          )}
        </ul>
        <button
          className="btn btn-outline-secondary btn-sm w-100 text-start"
          type="button"
          onClick={() => setIsExpanded(!isExpanded)} // change dello stato
        >
          {isExpanded ? "Meno dettagli" : "Più dettagli"}
          {isExpanded ? <BsChevronUp size={25} className="ps-2" /> : <BsChevronDown size={25} className="ps-2" />}
        </button>
      </div>
    </div>
  );
};

export default SidebarRightHomepage;
