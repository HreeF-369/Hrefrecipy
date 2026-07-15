const fs = require('fs');

let cookmode = fs.readFileSync('src/pages/CookMode.tsx', 'utf8');

if (!cookmode.includes('HighlightedText')) {
  cookmode = cookmode.replace(
    /import NotFound from "\.\/NotFound\.js";/,
    `import NotFound from "./NotFound.js";\nimport { HighlightedText } from "../components/HighlightedText.js";`
  );
}

// Add state
if (!cookmode.includes('spokenCharIndex')) {
  cookmode = cookmode.replace(
    /const \[loading, setLoading\] = useState\(true\);/,
    `const [loading, setLoading] = useState(true);\n  const [spokenCharIndex, setSpokenCharIndex] = useState(-1);`
  );
}

// modify speak
cookmode = cookmode.replace(
  /const speak = useCallback\(\(text: string\) => \{\n\s*if \(isMuted\) return;\n\s*speakText\(text\);\n\s*\}, \[isMuted\]\);/,
  `const speak = useCallback((text: string, offset: number = 0) => {
    if (isMuted) return;
    setSpokenCharIndex(0 - offset);
    speakText(text, {
      onBoundary: (e) => {
        setSpokenCharIndex(e.charIndex - offset);
      },
      onEnd: () => {
        setSpokenCharIndex(-1);
      },
      onStart: () => {
        setSpokenCharIndex(0 - offset);
      }
    });
  }, [isMuted]);`
);

cookmode = cookmode.replace(
  /const stepText = \`Step \$\{currentStep \+ 1\}\. \$\{steps\[currentStep\]\.step\}\`;\n\s*\/\/ Small delay to ensure clean state transitions\n\s*const timer = setTimeout\(\(\) => \{\n\s*speak\(stepText\);\n\s*\}, 500\);/,
  `const prefix = \`Step \${currentStep + 1}. \`;
      const stepText = \`\${prefix}\${steps[currentStep].step}\`;
      const timer = setTimeout(() => {
        speak(stepText, prefix.length);
      }, 500);`
);

cookmode = cookmode.replace(
  /onClick=\{\(\) => speak\(steps\[currentStep\]\.step\)\}/,
  `onClick={() => speak(steps[currentStep].step, 0)}`
);

cookmode = cookmode.replace(
  /<h2 className="text-xl sm:text-3xl font-bold leading-relaxed md:leading-tight md:text-3xl md:text-4xl lg:text-5xl text-slate-900 tracking-tight">\n\s*\{steps\[currentStep\]\?\.step\}\n\s*<\/h2>/,
  `<h2 className="text-xl sm:text-3xl font-bold leading-relaxed md:leading-tight md:text-3xl md:text-4xl lg:text-5xl text-slate-900 tracking-tight">
                      <HighlightedText text={steps[currentStep]?.step || ""} active={spokenCharIndex >= 0} localCharIndex={spokenCharIndex} />
                    </h2>`
);

fs.writeFileSync('src/pages/CookMode.tsx', cookmode, 'utf8');
