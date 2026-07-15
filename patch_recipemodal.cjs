const fs = require('fs');

let rm = fs.readFileSync('src/components/RecipeModal.tsx', 'utf8');

if (!rm.includes('HighlightedText')) {
  rm = rm.replace(
    /import \{ speakText \} from '\.\.\/services\/speechService\.js';/,
    `import { speakText } from '../services/speechService.js';\nimport { HighlightedText } from "./HighlightedText.js";\nimport { useMemo } from "react";`
  );
}

// Add state and useMemo
if (!rm.includes('spokenCharIndex')) {
  rm = rm.replace(
    /const \[addedToGrocery, setAddedToGrocery\] = useState\(false\);/,
    `const [addedToGrocery, setAddedToGrocery] = useState(false);\n  const [spokenCharIndex, setSpokenCharIndex] = useState(-1);\n\n  const stepOffsets = useMemo(() => {\n    if (!recipe) return [];\n    let currentLength = 0;\n    const offsets = [];\n    \n    if (recipe.instructions) {\n      recipe.instructions.forEach((step, idx) => {\n        const prefix = \`Step \${idx + 1}: \`;\n        const fullStep = \`\${prefix}\${step}. \`;\n        offsets.push({ start: currentLength + prefix.length, end: currentLength + fullStep.length });\n        currentLength += fullStep.length;\n      });\n    } else {\n      const steps = recipe.analyzedInstructions?.[0]?.steps || [];\n      steps.forEach((s) => {\n        const prefix = \`Step \${s.number}: \`;\n        const fullStep = \`\${prefix}\${s.step}. \`;\n        offsets.push({ start: currentLength + prefix.length, end: currentLength + fullStep.length });\n        currentLength += fullStep.length;\n      });\n    }\n    return offsets;\n  }, [recipe]);`
  );
}

rm = rm.replace(
  /const handleSpeakInstructions = \(\) => \{\n\s*if \(\!recipe\) return;\n\s*let textToSpeak = "";\n\s*if \(recipe\.instructions\) \{\n\s*textToSpeak = recipe\.instructions\.map\(\(step, idx\) => \`Step \$\{idx \+ 1\}: \$\{step\}\`\)\.join\("\. "\);\n\s*\} else \{\n\s*const steps = recipe\.analyzedInstructions\?\.\[0\]\?\.steps \|\| \[\];\n\s*if \(steps\.length === 0\) return;\n\s*textToSpeak = steps\.map\(s => \`Step \$\{s\.number\}: \$\{s\.step\}\`\)\.join\("\. "\);\n\s*\}\n\s*speakText\(textToSpeak\);\n\s*\};/,
  `const handleSpeakInstructions = () => {
    if (!recipe) return;
    let textToSpeak = "";
    if (recipe.instructions) {
      recipe.instructions.forEach((step, idx) => {
        textToSpeak += \`Step \${idx + 1}: \${step}. \`;
      });
    } else {
      const steps = recipe.analyzedInstructions?.[0]?.steps || [];
      if (steps.length === 0) return;
      steps.forEach((s) => {
        textToSpeak += \`Step \${s.number}: \${s.step}. \`;
      });
    }
    
    speakText(textToSpeak, {
      onBoundary: (e) => {
        setSpokenCharIndex(e.charIndex);
      },
      onEnd: () => {
        setSpokenCharIndex(-1);
      },
      onStart: () => {
        setSpokenCharIndex(0);
      }
    });
  };`
);

// Update render
rm = rm.replace(
  /<p className="text-sm md:text-base text-slate-700 leading-relaxed font-sans break-words">\{step\}<\/p>/g,
  `<p className="text-sm md:text-base text-slate-700 leading-relaxed font-sans break-words">
                            <HighlightedText text={step} active={spokenCharIndex >= (stepOffsets[idx]?.start || 0) && spokenCharIndex < (stepOffsets[idx]?.end || 0)} localCharIndex={spokenCharIndex - (stepOffsets[idx]?.start || 0)} />
                          </p>`
);

rm = rm.replace(
  /<p className="text-sm md:text-base text-slate-700 leading-relaxed font-sans break-words">\{step\.step\}<\/p>/g,
  `<p className="text-sm md:text-base text-slate-700 leading-relaxed font-sans break-words">
                              <HighlightedText text={step.step} active={spokenCharIndex >= (stepOffsets[idx]?.start || 0) && spokenCharIndex < (stepOffsets[idx]?.end || 0)} localCharIndex={spokenCharIndex - (stepOffsets[idx]?.start || 0)} />
                            </p>`
);

fs.writeFileSync('src/components/RecipeModal.tsx', rm, 'utf8');
