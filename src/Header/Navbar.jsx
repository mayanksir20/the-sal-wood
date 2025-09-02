import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState([]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((r) => r.json())
      .then(setMenu)
      .catch(console.error);
  }, []);

  // lock scroll when mobile sheet is open (nice UX)
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-100 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto py-[10px] px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img
              src="/src/assets/Images/the-sal-wood-logo.png"
              alt="The Sal Wood"
              className="h-30 w-auto"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {menu.map((item) => (
              <div
                key={item.id}
                className="relative group"
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                onFocus={() => setHoveredId(item.id)}
                onBlur={() => setHoveredId(null)}
              >
                <a
                  href={item.link}
                  onClick={() => setActive(item.link)}
                  className={`relative px-3 py-2 rounded-lg transition-colors duration-200 text-lg ${
                    active === item.link
                      ? "text-[#c4c451]"
                      : "text-black hover:text-[#c4c451]"
                  } 
                  after:absolute after:inset-x-3 after:bottom-1.5 after:h-0.5 after:bg-[#c4c451] after:origin-left after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform`}
                >
                  {item.name}
                </a>

                {/* Smooth dropdown (no arrow) */}
                {item.submenu && (
                  <div className="absolute left-0 top-full pt-2">
                    <div
                      className={`min-w-[220px] overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl ring-1 ring-black/5 transform-gpu transition-all duration-200 ease-out
                        ${
                          hoveredId === item.id
                            ? "opacity-100 translate-y-0 scale-100"
                            : "pointer-events-none opacity-0 -translate-y-1 scale-95"
                        }`}
                    >
                      <ul className="py-2">
                        {item.submenu.map((sub) => (
                          <li key={sub.id}>
                            <a
                              href={sub.link}
                              onClick={() => setActive(sub.link)}
                              className={`block px-4 py-2.5 rounded-lg transition text-lg ${
                                active === sub.link
                                  ? "bg-blue-50 text-[#c4c451] font-medium"
                                  : "text-gray-700 hover:bg-gray-50 hover:text-[#c4c451]"
                              }`}
                            >
                              {sub.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href="#reservation"
              className="inline-flex items-center rounded-xl bg-[#c4c451] px-4 py-2 text-sm font-semibold text-black shadow-sm transition hover:bg-[#b5b53e]"
            >
              Reservation
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-gray-700 ring-1 ring-gray-200 hover:bg-gray-50"
          >
            {mobileOpen ? (
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile sheet (no arrows, smooth) */}
      <div
        className={`lg:hidden overflow-hidden border-t border-gray-100 bg-white transition-[max-height,opacity] duration-300 ease-out
        ${mobileOpen ? "opacity-100 max-h-screen" : "opacity-0 max-h-0"}`}
      >
        <div className="px-4 pb-4 pt-2">
          <ul className="space-y-1">
            {menu.map((item) => (
              <li key={item.id} className="rounded-lg">
                {/* Top-level row */}
                <button
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2 transition hover:bg-gray-50 text-sm ${
                    active === item.link ? "text-[#c4c451] font-semibold" : "text-gray-700"
                  }`}
                  onClick={() => {
                    if (item.submenu) {
                      setHoveredId((id) => (id === item.id ? null : item.id));
                    } else {
                      setActive(item.link);
                      setMobileOpen(false);
                    }
                  }}
                >
                  <span>{item.name}</span>
                  {item.submenu && (
                    <span
                      className={`ml-3 h-2 w-2 rounded-full transition ${
                        hoveredId === item.id ? "bg-[#c4c451]" : "bg-gray-300"
                      }`}
                    />
                  )}
                </button>

                {/* Collapsible submenu */}
                {item.submenu && (
                  <div
                    className={`pl-3 transition-all duration-300 ease-out ${
                      hoveredId === item.id ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                    } overflow-hidden`}
                  >
                    {item.submenu.map((sub) => (
                      <a
                        key={sub.id}
                        href={sub.link}
                        onClick={() => {
                          setActive(sub.link);
                          setMobileOpen(false);
                        }}
                        className={`mt-1 block rounded-md px-3 py-2 text-lg transition ${
                          active === sub.link
                            ? "bg-blue-50 text-[#c4c451] font-medium"
                            : "text-gray-600 hover:text-[#c4c451] hover:bg-gray-50"
                        }`}
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          <a
            href="#reservation"
            onClick={() => setMobileOpen(false)}
            className="mt-3 block w-full rounded-xl bg-[#c4c451] px-4 py-2 text-center font-semibold text-white shadow hover:bg-[#b5b53e] transition"
          >
            Reservation
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
