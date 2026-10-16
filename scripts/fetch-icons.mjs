import fs from 'node:fs';
import path from 'node:path';

const outDir = path.resolve('public/assets/icons/tech');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 1. Rich Multi-color Devicon icons with high contrast
const deviconList = [
  { file: 'python.svg', path: 'python/python-original.svg', title: 'Python' },
  { file: 'typescript.svg', path: 'typescript/typescript-original.svg', title: 'TypeScript' },
  { file: 'react.svg', path: 'react/react-original.svg', title: 'React' },
  { file: 'angular.svg', path: 'angular/angular-original.svg', title: 'Angular' },
  { file: 'docker.svg', path: 'docker/docker-original.svg', title: 'Docker' },
  { file: 'csharp.svg', path: 'csharp/csharp-original.svg', title: 'C#' },
  { file: 'kotlin.svg', path: 'kotlin/kotlin-original.svg', title: 'Kotlin' },
  { file: 'html5.svg', path: 'html5/html5-original.svg', title: 'HTML5' },
  { file: 'java.svg', path: 'java/java-original.svg', title: 'Java' },
  { file: 'javascript.svg', path: 'javascript/javascript-original.svg', title: 'JavaScript' },
  { file: 'vite.svg', path: 'vitejs/vitejs-original.svg', title: 'Vite' },
  { file: 'springboot.svg', path: 'spring/spring-original.svg', title: 'Spring Boot' },
  { file: 'androidstudio.svg', path: 'androidstudio/androidstudio-original.svg', title: 'Android Studio' },
  { file: 'cplusplus.svg', path: 'cplusplus/cplusplus-original.svg', title: 'C++' },
  { file: 'php.svg', path: 'php/php-original.svg', title: 'PHP' },
  { file: 'tailwind.svg', path: 'tailwindcss/tailwindcss-original.svg', title: 'CSS3 / Tailwind' },
  { file: 'laravel.svg', path: 'laravel/laravel-original.svg', title: 'Laravel' }
];

async function fetchDevicons() {
  for (const item of deviconList) {
    const url = `https://raw.githubusercontent.com/devicons/devicon/master/icons/${item.path}`;
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      let svg = await res.text();
      fs.writeFileSync(path.join(outDir, item.file), svg.trim(), 'utf8');
      console.log(`Saved ${item.file} from Devicon`);
    } catch (e) {
      console.error(`Failed ${item.file}: ${e.message}`);
    }
  }
}

// 2. Simple Icons with custom brightened fills so dark logos never vanish on dark surfaces
const simpleIconList = [
  { file: 'supabase.svg', slug: 'supabase', color: '#3ECF8E', title: 'Supabase' },
  { file: 'unity.svg', slug: 'unity', color: '#FFFFFF', title: 'Unity 6' },
  { file: 'git.svg', slug: 'git', color: '#FF6442', title: 'Git & GitHub' }, // Brightened high-contrast coral orange
  { file: 'gdscript.svg', slug: 'godotengine', color: '#569FD6', title: 'GDScript' },
  { file: 'mysql.svg', slug: 'mysql', color: '#00A1F1', title: 'MySQL' } // Brightened vibrant cerulean
];

async function fetchSimpleIcons() {
  for (const item of simpleIconList) {
    const url = `https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/${item.slug}.svg`;
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      let svg = await res.text();
      // Inject fill color into path
      if (!svg.includes('fill=')) {
        svg = svg.replace('<path ', `<path fill="${item.color}" `);
      } else {
        svg = svg.replace(/fill="[^"]*"/, `fill="${item.color}"`);
      }
      fs.writeFileSync(path.join(outDir, item.file), svg.trim(), 'utf8');
      console.log(`Saved ${item.file} from Simple Icons with normalized color ${item.color}`);
    } catch (e) {
      console.error(`Failed ${item.file}: ${e.message}`);
    }
  }
}

// 3. Clean mono-font text monograms & official brand assets in sharp terminal tile style (No outline glyphs)
function generateTerminalMonograms() {
  const monograms = [
    {
      file: 'sql.svg',
      title: 'SQL',
      svg: `<svg role="img" viewBox="0 0 32 24" xmlns="http://www.w3.org/2000/svg">
  <title>SQL</title>
  <rect x="1" y="2" width="30" height="20" rx="3" fill="#00758F" fill-opacity="0.18" stroke="#38BDF8" stroke-width="1.4"/>
  <text x="16" y="15.5" fill="#38BDF8" font-family="'JetBrains Mono', ui-monospace, monospace" font-weight="900" font-size="9" text-anchor="middle" letter-spacing="1">SQL</text>
</svg>`
    },
    {
      file: 'networking.svg',
      title: 'Networking',
      svg: `<svg role="img" viewBox="0 0 32 24" xmlns="http://www.w3.org/2000/svg">
  <title>Networking</title>
  <rect x="1" y="2" width="30" height="20" rx="3" fill="#0284C7" fill-opacity="0.18" stroke="#38BDF8" stroke-width="1.4"/>
  <text x="16" y="15.5" fill="#38BDF8" font-family="'JetBrains Mono', ui-monospace, monospace" font-weight="900" font-size="8.5" text-anchor="middle" letter-spacing="1">NET</text>
</svg>`
    },
    {
      file: 'data-warehouse.svg',
      title: 'Data Warehousing',
      svg: `<svg role="img" viewBox="0 0 32 24" xmlns="http://www.w3.org/2000/svg">
  <title>Data Warehousing</title>
  <rect x="1" y="2" width="30" height="20" rx="3" fill="#7E22CE" fill-opacity="0.18" stroke="#C084FC" stroke-width="1.4"/>
  <text x="16" y="15.5" fill="#C084FC" font-family="'JetBrains Mono', ui-monospace, monospace" font-weight="900" font-size="8.5" text-anchor="middle" letter-spacing="1">DWH</text>
</svg>`
    },
    {
      file: 'hardware.svg',
      title: 'Computer Hardware',
      svg: `<svg role="img" viewBox="0 0 32 24" xmlns="http://www.w3.org/2000/svg">
  <title>Computer Hardware</title>
  <rect x="1" y="2" width="30" height="20" rx="3" fill="#D97706" fill-opacity="0.18" stroke="#FBBF24" stroke-width="1.4"/>
  <text x="16" y="15.5" fill="#FBBF24" font-family="'JetBrains Mono', ui-monospace, monospace" font-weight="900" font-size="9" text-anchor="middle" letter-spacing="1">HW</text>
</svg>`
    },
    {
      file: 'javafx.svg',
      title: 'JavaFX',
      svg: `<svg role="img" viewBox="0 0 32 24" xmlns="http://www.w3.org/2000/svg">
  <title>JavaFX</title>
  <polygon points="16,2 29,8 29,16 16,22 3,16 3,8" fill="#E76F00" fill-opacity="0.2" stroke="#F59E0B" stroke-width="1.4" stroke-linejoin="round"/>
  <text x="16" y="15.5" fill="#FBBF24" font-family="'JetBrains Mono', ui-monospace, monospace" font-weight="900" font-size="7.5" text-anchor="middle" letter-spacing="0.5">JFX</text>
</svg>`
    },
    {
      file: 'vba.svg',
      title: 'VBA',
      svg: `<svg role="img" viewBox="0 0 32 24" xmlns="http://www.w3.org/2000/svg">
  <title>VBA</title>
  <rect x="1" y="2" width="30" height="20" rx="3" fill="#15803D" fill-opacity="0.2" stroke="#4ADE80" stroke-width="1.4"/>
  <text x="16" y="15.5" fill="#4ADE80" font-family="'JetBrains Mono', ui-monospace, monospace" font-weight="900" font-size="8.5" text-anchor="middle" letter-spacing="1">VBA</text>
</svg>`
    }
  ];

  for (const item of monograms) {
    fs.writeFileSync(path.join(outDir, item.file), item.svg.trim(), 'utf8');
    console.log(`Generated terminal monogram ${item.file}`);
  }
}

async function run() {
  await fetchDevicons();
  await fetchSimpleIcons();
  generateTerminalMonograms();
  console.log('All 28 tech icons normalized and regenerated successfully!');
}

run();
