@tailwind base;
@tailwind components;
@tailwind utilities;
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}
body {
  font-family: "Inter", system-ui, sans-serif;
  background-color: #fafafa;
  color: #1f2937;
}
body.dark {
  background-color: #0f172a;
  color: #f3f4f6;
}
/* Editor Canvas Styles */
.editor-canvas {
  background: white;
  min-height: 100vh;
}
.editor-canvas.dark {
  background: #1e293b;
}
/* Component Dragging */
.dragging {
  opacity: 0.5;
}
.drag-overlay {
  position: fixed;
  pointer-events: none;
  z-index: 1000;
}
/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
/* Selection Indicator */
.selected-component {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}
.selected-component::after {
  content: "";
  position: absolute;
  inset: 0;
  border: 2px dashed #3b82f6;
  pointer-events: none;
}
/* Scrollbar Styling */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-track {
  background: #f1f5f9;
}
::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
/* Dark mode scrollbar */
.dark ::-webkit-scrollbar-track {
  background: #1e293b;
}
.dark ::-webkit-scrollbar-thumb {
  background: #475569;
}
.dark ::-webkit-scrollbar-thumb:hover {
  background: #64748b;
}
/* Form Styles */
input,
textarea,
select {
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  padding: 0.5rem 0.75rem;
}
input:focus,
textarea:focus,
select:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 1px #3b82f6;
}
.dark input,
.dark textarea,
.dark select {
  background-color: #1f2937;
  border-color: #4b5563;
  color: white;
}
/* Utility Classes */
.text-primary {
  color: #2563eb;
}
.dark .text-primary {
  color: #60a5fa;
}
.bg-primary {
  background-color: #2563eb;
}
.bg-primary:hover {
  background-color: #1d4ed8;
}
.dark .bg-primary {
  background-color: #1d4ed8;
}
/* Responsive */
@media (max-width: 768px) {
  .editor-sidebar {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 18rem;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    z-index: 40;
  }
  .editor-sidebar.open {
    transform: translateX(0);
  }
}
