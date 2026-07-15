const fs = require('fs');

let speech = fs.readFileSync('src/services/speechService.ts', 'utf8');

speech = speech.replace(
  /export const getBestVoice = \(\): SpeechSynthesisVoice \| null => \{[\s\S]*?return sorted\[0\];\n\};/,
  `export const getBestVoice = (): SpeechSynthesisVoice | null => {
  if (typeof window === 'undefined' || !window.speechSynthesis) return null;
  const voices = window.speechSynthesis.getVoices();
  if (voices.length === 0) return null;

  // Filter for English voices
  const englishVoices = voices.filter(v => v.lang.startsWith('en-'));
  
  // High-priority clean, high-quality female search indicators and names
  const femaleKeywords = ['female', 'samantha', 'victoria', 'hazel', 'sabina', 'zira', 'karen', 'moira', 'tessa', 'susan', 'sabrina2', 'joanna', 'google us english female', 'microsoft zira'];
  
  // Male words to strongly penalize
  const maleKeywords = ['male', 'david', 'daniel', 'mark', 'george', 'guy', 'peter', 'alex', 'fred', 'brian', 'calum', 'oliver', 'ravi'];
  
  // Prioritization score
  const getScore = (voice) => {
    let score = 0;
    const name = voice.name.toLowerCase();
    
    // Explicitly check for female indicators
    const isFemale = femaleKeywords.some(keyword => name.includes(keyword));
    const isMale = maleKeywords.some(keyword => name.includes(keyword));
    
    if (isFemale) {
      score += 2000;
    }
    if (isMale) {
      score -= 5000;
    }
    
    if (name.includes('samantha')) score += 3000;
    if (name.includes('google us english')) score += 2500;
    if (name.includes('zira')) score += 2500;

    if (name.includes('google')) score += 200;
    if (name.includes('natural')) score += 100;
    if (name.includes('neural')) score += 1500;
    if (voice.lang === 'en-US') score += 50;
    if (voice.lang === 'en-GB') score += 30;
    if (name.includes('premium')) score += 100;
    
    return score;
  };

  const sorted = (englishVoices.length > 0 ? englishVoices : voices).sort((a, b) => getScore(b) - getScore(a));
  return sorted[0];
};`
);

speech = speech.replace(
  /export const speakText = \(text: string, options: \{ rate\?: number; pitch\?: number \} = \{\}\) => \{/,
  `export const speakText = (text: string, options: { rate?: number; pitch?: number; onBoundary?: (event: SpeechSynthesisEvent) => void; onEnd?: (event: SpeechSynthesisEvent) => void; onStart?: (event: SpeechSynthesisEvent) => void; } = {}) => {`
);

speech = speech.replace(
  /const utterance = new SpeechSynthesisUtterance\(text\);\n  const voice = getBestVoice\(\);/,
  `const utterance = new SpeechSynthesisUtterance(text);\n  utterance.lang = "en-US";\n  const voice = getBestVoice();`
);

speech = speech.replace(
  /utterance\.rate = options\.rate \|\| 0\.95;/,
  `utterance.rate = options.rate || 0.9;`
);

speech = speech.replace(
  /utterance\.volume = 1\.0;/,
  `utterance.volume = 1.0;\n\n  if (options.onBoundary) utterance.onboundary = options.onBoundary;\n  if (options.onEnd) utterance.onend = options.onEnd;\n  if (options.onStart) utterance.onstart = options.onStart;`
);

fs.writeFileSync('src/services/speechService.ts', speech, 'utf8');
