const fs = require('fs');
let content = fs.readFileSync('src/pages/RecipeDetail.tsx', 'utf8');

const widgetBlockToRemove = `
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

content = content.replace(widgetBlockToRemove, '');

const insertTarget = `        </section>
      </div>

      {relatedRecipes.length > 0 && (`;

const widgetBlockToInsert = `        </section>
      </div>

      <div className="mt-12 max-w-3xl mx-auto py-10 px-8 bg-white border border-slate-100 shadow-sm rounded-3xl text-center no-print">
        <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">How did it turn out?</h3>
        <p className="text-slate-500 mb-6">Rate this recipe and let others know what you think.</p>
        <div className="flex gap-2 justify-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => handleRate(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              className="p-2 transition-transform hover:scale-110 focus:outline-none"
              aria-label={\`Rate \${star} stars\`}
            >
              <span className={\`text-4xl leading-none \${(hoverRating || userRating) >= star ? 'text-yellow-400 drop-shadow-sm' : 'text-slate-200'}\`}>
                ★
              </span>
            </button>
          ))}
        </div>
        {userRating > 0 && (
          <p className="text-sm font-bold text-brand-green mt-4 bg-brand-green/10 inline-block px-4 py-2 rounded-full">
            Thanks for rating! ({userRating} stars)
          </p>
        )}
      </div>

      {relatedRecipes.length > 0 && (`;

content = content.replace(insertTarget, widgetBlockToInsert);
fs.writeFileSync('src/pages/RecipeDetail.tsx', content);
console.log("Moved widget outside grid!");
