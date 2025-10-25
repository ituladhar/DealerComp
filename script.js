const { useState, useMemo } = React;

// LucideIcon Component
const LucideIcon = ({ name, className = '' }) => {
  const iconData = lucide[name];
  if (!iconData) return null;

  const paths = iconData.map(([tag, props], i) => {
    const attrs = Object.entries(props)
      .map(([k, v]) => `${k}="${v}"`)
      .join(' ');
    return `<${tag} ${attrs} />`;
  }).join('');

  const svg = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="${className}"
    >
      ${paths}
    </svg>
  `;
  return React.createElement('span', { dangerouslySetInnerHTML: { __html: svg } });
};

// ... (rest of your React code: initialMetrics, formatCurrency, App, etc.)

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
