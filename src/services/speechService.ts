
export const getBestVoice = (): SpeechSynthesisVoice | null => {
  if (typeof window === 'undefined' || !window.speechSynthesis) return null;
  const voices = window.speechSynthesis.getVoices();
  if (voices.length === 0) return null;

  // Filter for English voices
  const englishVoices = voices.filter(v => v.lang.startsWith('en-'));
  
  // High-priority clean, high-quality female search indicators and names
  const femaleKeywords = ['female', 'samantha', 'victoria', 'hazel', 'sabina', 'zira', 'karen', 'moira', 'tessa', 'susan', 'sabrina2', 'joanna'];
  
  // Male words to strongly penalize
  const maleKeywords = ['male', 'david', 'daniel', 'mark', 'george', 'guy', 'peter', 'alex', 'fred', 'brian', 'calum', 'oliver', 'ravi'];
  
  // Prioritization score
  const getScore = (voice: SpeechSynthesisVoice) => {
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
};

export const speakText = (text: string, options: { rate?: number; pitch?: number } = {}) => {
  if (typeof window === 'undefined' || !window.speechSynthesis) return;
  
  // Force stop any previous active utterance
  window.speechSynthesis.cancel();
  
  const utterance = new SpeechSynthesisUtterance(text);
  const voice = getBestVoice();
  
  if (voice) {
    utterance.voice = voice;
  }
  
  utterance.rate = options.rate || 0.95;
  utterance.pitch = options.pitch || 1.0;
  utterance.volume = 1.0;

  // Double check that we canceled before speaking to prevent any overlapping speech layers
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
};
