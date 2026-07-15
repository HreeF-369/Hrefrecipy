import React from 'react';

export const HighlightedText: React.FC<{ text: string; active: boolean; localCharIndex: number }> = ({ text, active, localCharIndex }) => {
  if (!active || localCharIndex < 0 || localCharIndex >= text.length) {
    return <>{text}</>;
  }

  let nextSpace = text.indexOf(' ', localCharIndex);
  if (nextSpace === -1) nextSpace = text.length;
  // Also check for punctuation to not include it if possible, but space is fine.

  const before = text.substring(0, localCharIndex);
  const highlighted = text.substring(localCharIndex, nextSpace);
  const after = text.substring(nextSpace);

  return (
    <>
      {before}
      <span className="bg-brand-green/30 text-brand-green-dark rounded px-0.5 font-bold transition-all duration-100">{highlighted}</span>
      {after}
    </>
  );
};
