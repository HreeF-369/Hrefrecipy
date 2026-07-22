const fs = require('fs');
let content = fs.readFileSync('src/pages/RecipeDetail.tsx', 'utf8');

const target = `                    <div className="text-center py-20 bg-white rounded-[2.5rem] border border-slate-200 border-dashed">
                      <Clock className="mx-auto text-slate-400 mb-3" size={40} />
                      <p className="text-slate-700 font-bold uppercase tracking-widest text-xs">No step-by-step instructions available</p>
                      <p className="text-slate-500 mt-1 max-w-sm mx-auto text-sm">Please check the recipe summary or external link for details.</p>
                    </div>
                  )}
                </div>`;

const replacement = target + `
                
                <div className="mt-8 pt-8 border-t border-slate-200 no-print">
                  <h4 className="text-lg font-bold text-slate-800 mb-2">How did it turn out?</h4>
                  <p className="text-sm text-slate-500 mb-4">Rate this recipe and let others know what you think.</p>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => handleRate(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="p-1 transition-transform hover:scale-110 focus:outline-none"
                      >
                        <span className={\`text-3xl leading-none \${(hoverRating || userRating) >= star ? 'text-yellow-400' : 'text-slate-200'}\`}>
                          ★
                        </span>
                      </button>
                    ))}
                  </div>
                  {userRating > 0 && <p className="text-sm font-bold text-brand-green mt-2">Thanks for rating!</p>}
                </div>`;

content = content.replace(target, replacement);
fs.writeFileSync('src/pages/RecipeDetail.tsx', content);
