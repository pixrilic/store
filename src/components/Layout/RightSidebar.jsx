// src/components/Layout/RightSidebar.jsx
import React from 'react';
import { useBuilder } from '../../context/BuilderContext';
import { Sliders, SlidersHorizontal } from 'lucide-react';

export default function RightSidebar() {
  const { selectedElementId, pages, activePageId, updateSections, isEditMode, theme, setTheme } = useBuilder();

  if (!isEditMode) return null;

  const currentPage = pages.find(p => p.id === activePageId) || { sections: [] };
  const targetElement = currentPage.sections.find(s => s.id === selectedElementId);

  const handlePropChange = (key, value) => {
    updateSections((prevSections) => 
      prevSections.map((sec) => 
        sec.id === selectedElementId 
          ? { ...sec, props: { ...sec.props, [key]: value } } 
          : sec
      )
    );
  };

  return (
    <aside className="w-80 border-l border-white/10 bg-slate-900/40 backdrop-blur-md p-4 flex flex-col gap-6 overflow-y-auto">
      {/* Tab Header Selector Block */}
      <div>
        <div className="flex items-center gap-2 border-b border-white/5 pb-3">
          <SlidersHorizontal size={14} className="text-blue-400" />
          <h2 className="text-xs font-bold tracking-wider uppercase text-slate-200">Inspector Properties</h2>
        </div>
      </div>

      {targetElement ? (
        <div className="space-y-4 animate-in fade-in duration-150">
          <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-[10px] text-slate-400 font-mono">
            ID: {targetElement.id} <br />
            Node: <span className="text-blue-400 uppercase font-bold">{targetElement.type}</span>
          </div>

          {/* Conditional Contextual Prop Mutators Form Fields */}
          {Object.prototype.hasOwnProperty.call(targetElement.props, 'heading') && (
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-medium text-slate-400">Heading Text Value</label>
              <input
                type="text"
                value={targetElement.props.heading || ''}
                onChange={(e) => handlePropChange('heading', e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500 transition"
              />
            </div>
          )}

          {Object.prototype.hasOwnProperty.call(targetElement.props, 'content') && (
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-medium text-slate-400">Context Body Area</label>
              <textarea
                rows={5}
                value={targetElement.props.content || ''}
                onChange={(e) => handlePropChange('content', e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500 transition resize-none leading-relaxed"
              />
            </div>
          )}
        </div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center text-slate-500 border border-dashed border-white/5 rounded-xl">
          <Sliders size={24} className="mb-2 opacity-40 animate-pulse" />
          <p className="text-xs font-medium">No active selected node instance.</p>
          <p className="text-[10px] mt-0.5">Click a section structural item module element path directly within the engine canvas layout stream block workspace to view its properties.</p>
        </div>
      )}

      {/* Global Theme Editor Panel Module System */}
      <div className="mt-auto border-t border-white/5 pt-4 space-y-4">
        <h3 className="text-[11px] font-bold tracking-wider uppercase text-slate-400">Global Aesthetics Layout</h3>
        
        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] text-slate-500">Global Primary Accent</label>
          <div className="flex items-center gap-2">
            <input 
              type="color" 
              value={theme.primaryColor} 
              onChange={(e) => setTheme({ ...theme, primaryColor: e.target.value })}
              className="bg-transparent border-none cursor-pointer w-7 h-7"
            />
            <span className="text-xs text-mono text-slate-300">{theme.primaryColor}</span>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] text-slate-500">Global Structural Border Radius</label>
          <select
            value={theme.borderRadius}
            onChange={(e) => setTheme({ ...theme, borderRadius: e.target.value })}
            className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none transition"
          >
            <option value="0px">Sharp Edge (0px)</option>
            <option value="8px">Standard Rounded (8px)</option>
            <option value="16px">Smooth Curved (16px)</option>
            <option value="24px">Hyper Glass Capsule (24px)</option>
          </select>
        </div>
      </div>
    </aside>
  );
}
