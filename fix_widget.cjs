const fs = require('fs');
let content = fs.readFileSync('src/pages/RecipeDetail.tsx', 'utf8');

// 1. First, find where it currently is by taking a substring
const startIdx = content.indexOf('<h4 className="text-lg font-bold text-slate-800 mb-2">How did it turn out?</h4>');
if (startIdx !== -1) {
    // find the start of the div
    const divStart = content.lastIndexOf('<div className="mt-8 pt-8 border-t border-slate-200 no-print">', startIdx);
    if (divStart !== -1) {
        // find the end of this div block. It ends with: {userRating > 0 && <p className="text-sm font-bold text-brand-green mt-2">Thanks for rating!</p>} \n </div>
        const endStr = '{userRating > 0 && <p className="text-sm font-bold text-brand-green mt-2">Thanks for rating!</p>}\n                </div>';
        const divEnd = content.indexOf(endStr, startIdx);
        if (divEnd !== -1) {
            const fullBlock = content.substring(divStart, divEnd + endStr.length);
            console.log("Found block to remove:\n", fullBlock);
            content = content.replace(fullBlock, '');
        }
    }
}

// 2. Insert at the bottom of the tabs
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

const insertTarget = `              </motion.div>
            </div>
            
            <Banner300x250 />
          </div>
        </section>`;

const newInsertTarget = `              </motion.div>
            </div>
` + widgetBlock + `
            <div className="mt-6">
              <Banner300x250 />
            </div>
          </div>
        </section>`;

content = content.replace(insertTarget, newInsertTarget);
fs.writeFileSync('src/pages/RecipeDetail.tsx', content);
console.log("Fixed!");
