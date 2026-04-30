
export const getBestVoice = (): SpeechSynthesisVoice | null => {
  const voices = window.speechSynthesis.getVoices();
  if (voices.length === 0) return null;

  // Filter for English voices
  const englishVoices = voices.filter(v => v.lang.startsWith('en-'));
  
  // Prioritization score
  const getScore = (voice: SpeechSynthesisVoice) => {
    let score = 0;
    const name = voice.name.toLowerCase();
    
    if (name.includes('google')) score += 100;
    if (name.includes('natural')) score += 50;
    if (voice.lang === 'en-US') score += 20;
    if (voice.lang === 'en-GB') score += 10;
    if (name.includes('premium')) score += 30;
    
    return score;
  };

  return englishVoices.sort((a, b) => getScore(b) - getScore(a))[0] || voices[0];
};

export const speakText = (text: string, options: { rate?: number; pitch?: number } = {}) => {
  window.speechSynthesis.cancel();
  
  const utterance = new SpeechSynthesisUtterance(text);
  const voice = getBestVoice();
  
  if (voice) {
    utterance.voice = voice;
  }
  
  utterance.rate = options.rate || 0.95;
  utterance.pitch = options.pitch || 1.0;
  utterance.volume = 1.0;

  window.speechSynthesis.speak(utterance);
};
