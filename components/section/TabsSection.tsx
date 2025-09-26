"use client";

import React, { useState } from 'react'
import TabPanels from './TabPanels'

const TAB_LABELS = [
  'Front-End Development',
  'Back-End Development',
  'Mobile App Development',
  'Data Science & Machine Learning',
  'UI/UX Design & Prototyping',
]

export default function TabsSection() {
  const [active, setActive] = useState<number>(0)

  return (
    <section id="skills" className="w-full py-12 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Decorative gradient lines with label */}
        <div className="flex items-center justify-center mb-2">
          {/* left line: visible on all sizes so the whole block can be centered */}
          <div className="w-24 h-[1px] mr-3 rounded-sm bg-gradient-to-r from-slate-400/20 via-slate-400/50 to-slate-400/90" aria-hidden="true" />

          <span className="text-sm text-gray-600 text-center">Keahlian Saya</span>

          {/* right line: visible on all sizes */}
          <div className="w-24 h-[1px] ml-3 rounded-sm bg-gradient-to-l from-slate-400/20 via-slate-400/50 to-slate-400/90" aria-hidden="true" />
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-slate-900 mb-4 mt-8">
          {TAB_LABELS[active]}
        </h2>

        {/* Tabs container (show all tabs, wrap instead of horizontal scroll) */}
        <div className="rounded-2xl">
          <div
            role="tablist"
            className="flex flex-col sm:flex-row sm:flex-nowrap items-center sm:justify-center gap-4 py-4 px-0 overflow-visible sm:overflow-x-auto"
          >
            {TAB_LABELS.map((label, idx) => {
              const isActive = idx === active
              return (
                <button
                  key={label}
                  onClick={() => setActive(idx)}
                  role="tab"
                  id={`tab-${idx}`}
                  aria-selected={isActive}
                  aria-controls={`tab-panel-${idx}`}
                  tabIndex={isActive ? 0 : -1}
                  className={`mx-auto w-full max-w-[360px] sm:w-auto sm:max-w-[220px] px-10 py-5 rounded-xl text-center font-semibold text-base sm:text-sm leading-tight whitespace-normal break-words transition-transform duration-150 focus:outline-none focus:ring-4 focus:ring-sky-200/50 ${
                    isActive
                      ? 'bg-[#0253EE] text-white shadow-lg'
                      : 'bg-white text-slate-800 border border-slate-200 hover:scale-[1.01]'
                  }`}
                >
                  {label}
                </button>
              )
            })}
          </div>
        </div>
        <TabPanels active={active} />
      </div>
    </section>
  )
}