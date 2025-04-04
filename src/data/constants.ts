import dedent from "dedent";

// export const AI_PROMPT = dedent`"You are a professional React developer and UI/UX designer. Create a complete React application with Tailwind CSS based on the following requirements:\n\n1. Generate a responsive, modern UI based on the provided wireframe/description\n2. Include Header and Footer with appropriate navigation options\n3. Use 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg' for image placeholders\n4. Implement professional UI/UX design with consistent color scheme\n5. Use Lucide React for icons (import from 'lucide-react')\n6. Only use React and Tailwind CSS (no other libraries)\n7. Make sure all interactive elements have proper hover/focus states\n8. Include smooth scrolling for anchor links\n\nReturn the complete solution in the following Sandpack-compatible JSON format:\n\n{\n  \"files\": {\n    \"/App.js\": {\n      \"code\": \"import React from 'react';\\nimport { Icon1, Icon2 } from 'lucide-react';\\n\\nconst App = () => {\\n  return (\\n    <div>\\n      {/* Your component code */}\\n    </div>\\n  );\\n};\\n\\nexport default App;\"\n    },\n    \"/index.js\": {\n      \"code\": \"import React, { StrictMode } from 'react';\\nimport { createRoot } from 'react-dom/client';\\nimport './styles.css';\\nimport App from './App';\\n\\nconst root = createRoot(document.getElementById('root'));\\nroot.render(\\n  <StrictMode>\\n    <App />\\n  </StrictMode>\\n);\"\n    },\n    \"/styles.css\": {\n      \"code\": \"/* Your custom CSS */\\nhtml {\\n  scroll-behavior: smooth;\\n}\"\n    },\n    \"/public/index.html\": {\n      \"code\": \"<!DOCTYPE html>\\n<html>\\n  <head>\\n    <meta charset=\\\"UTF-8\\\">\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n    <title>Your App</title>\\n  </head>\\n  <body>\\n    <div id=\\\"root\\\"></div>\\n  </body>\\n</html>\"\n    },\n    \"/package.json\": {\n      \"code\": \"{\\n  \\\"dependencies\\\": {\\n    \\\"react\\\": \\\"^19.0.0\\\",\\n    \\\"react-dom\\\": \\\"^19.0.0\\\",\\n    \\\"react-scripts\\\": \\\"^5.0.0\\\",\\n    \\\"lucide-react\\\": \\\"^0.300.0\\\",\\n    \\\"tailwindcss\\\": \\\"^3.4.0\\\",\\n    \\\"postcss\\\": \\\"^8.4.35\\\",\\n    \\\"autoprefixer\\\": \\\"^10.4.18\\\"\\n  },\\n  \\\"main\\\": \\\"/index.js\\\"\\n}\"\n    },\n    \"/tailwind.config.js\": {\n      \"code\": \"module.exports = {\\n  content: [\\n    \\\"./index.html\\\",\\n    \\\"./src/**/*.{js,ts,jsx,tsx}\\\",\\n    \\\"./App.js\\\"\\n  ],\\n  theme: {\\n    extend: {\\n      fontFamily: {\\n        sans: ['Inter', 'sans-serif']\\n      }\\n    }\\n  },\\n  plugins: []\\n}\"\n    },\n    \"/postcss.config.js\": {\n      \"code\": \"module.exports = {\\n  plugins: {\\n    tailwindcss: {},\\n    autoprefixer: {},\\n  }\\n}\"\n    }\n  },\n  \"main\": \"/App.js\",\n  \"environment\": \"create-react-app\"\n}\n\nNotes:\n- Include all necessary files for a complete Sandpack setup\n- Make sure all file paths and dependencies are correctly specified\n- The App.js file should contain your main component code\n- Include proper Tailwind CSS configuration\n- Ensure the package.json includes all required dependencies",
//   "requirements": {
//     "response_format": "Only respond with the complete JSON object that can be directly used in Sandpack",
//     "code_quality": "Production-ready code with proper accessibility and responsive design",
//     "design_requirements": [
//       "Modern, clean UI with consistent spacing",
//       "Proper color contrast for accessibility",
//       "Mobile-first responsive design",
//       "Smooth animations and transitions",
//       "Professional typography hierarchy"
//     ]
//   }
// `;


// // export const AI_PROMPT = `Generate a React application based on the following requirements.

// // Return the response in the following JSON format:
// // {
// //   "files": {
// //     "App.js": \`export default function App() {
// //       return <h1>Here is the custom code</h1>;
// //     }\`
// //   }
// // }`

export const AI_PROMPT = `You are a React expert who creates production-ready code. Create a complete React landing page with Tailwind CSS that meets these requirements:

- Modern, responsive UI with header, main content sections, and footer
- Navigation with smooth scrolling for anchor links
- Placeholder images using: 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg'
- Lucide React icons with proper imports
- Mobile-first approach with responsive breakpoints
- Interactive elements with proper hover/focus states
- Consistent color scheme and typography
- Accessible design with proper contrast ratios

IMPORTANT: Return a valid JSON object with ALL code properly escaped as JSON strings. Do not use backticks (\`) in your response as they will break JSON parsing. Use proper JSON string escaping with double quotes and backslash escaping.

Return the response in this structure:
{
  "sandpack": {
    "files": {
      "App.js": {"code": "import React from 'react'; // Rest of properly escaped code..."},
      "index.js": {"code": "// Properly escaped code as a JSON string"},
      "styles.css": {"code": "/* Properly escaped CSS as a JSON string */"},
      "public/index.html": {"code": "<!-- Properly escaped HTML as a JSON string -->"},
      "package.json": {"code": "// Properly escaped JSON as a JSON string"},
      "tailwind.config.js": {"code": "// Properly escaped config as a JSON string"},
      "postcss.config.js": {"code": "// Properly escaped config as a JSON string"}
    },
    "main": "App.js",
    "environment": "create-react-app"
  },
  "explanation": {
    "overview": "Brief description of the application",
    "components": {
      "header": "Explanation of the header implementation",
      "content": "Explanation of the main content sections",
      "footer": "Explanation of the footer implementation",
      "responsiveness": "How the responsive design works",
      "accessibility": "Accessibility features implemented"
    },
    "keyFeatures": [
      "List of notable features with brief explanations"
    ]
  }
}

Remember: All code must be properly escaped as JSON strings with double quotes and backslashes. DO NOT use backticks (\`) in your response.

Example of proper escaping:
"code": "import React from \\"react\\";\\n\\nconst App = () => {\\n  return (\\n    <div>Hello World</div>\\n  );\\n};\\n\\nexport default App;"

The code must be complete and production-ready, and the explanation should be detailed enough for an end user to understand the implementation.`;

export const DEPENDANCY = {
        "postcss": "^8",
        "tailwindcss": "^3.4.1",
        autoprefixer: "^10.0.0",
        "uuid4": "^2.0.3",
        "tailwind-merge": "^2.4.0",
        "tailwindcss-animate": "^1.0.7",
        "lucide-react": "^0.469.0",
        "react-router-dom": "^7.1.1",
        "firebase": "^11.1.0",
        "@google/generative-ai": "^0.21.0",
        "date-fns": "^4.1.0",
        "react-chartjs-2": "^5.3.0",
        "chart.js": "^4.4.7",
}

export const FILES = {
    FILES: {
        '/App.css': {
            code: `
            @tailwind base;
@tailwind components;
@tailwind utilities;`
        },
        '/tailwind.config.js': {
            code: `
            /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`
        },

        '/postcss.config.js': {
            code: `/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },`
        }
    }
}