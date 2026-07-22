const fs = require('fs');
let content = fs.readFileSync('src/pages/RecipeDetail.tsx', 'utf8');

const widgetBlock = `
            <div className="mt-8 pt-8 border-t border-slate-200 no-print w-full">
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

content = content.replace('<Banner300x250 />', widgetBlock + '\n            <div className="mt-6"><Banner300x250 /></div>');
fs.writeFileSync('src/pages/RecipeDetail.tsx', content);
console.log("Fixed again!");
