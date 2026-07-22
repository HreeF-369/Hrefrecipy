const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

const target = `                    <div className="flex gap-4 md:gap-5 justify-center items-center">
                      <a 
                        href="https://www.pinterest.com/aalhyane72/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex h-11 w-11 items-center justify-center rounded-full text-white bg-[#E60023] shadow-md shadow-red-200 transition-all duration-300 hover:scale-110 hover:bg-[#ad081b] cursor-pointer"
                        aria-label="Pinterest"
                        title="Follow us on Pinterest"
                      >
                        <svg 
                          viewBox="0 0 24 24" 
                          fill="currentColor" 
                          className="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.033-1.002 2.324-1.492 3.12 1.1.34 2.269.521 3.483.521 6.621 0 11.988-5.366 11.988-11.987S18.638 0 12.017 0z"/>
                        </svg>
                      </a>
                    </div>`;

const replacement = `                    <div className="flex gap-4 md:gap-5 justify-center items-center">
                      <a 
                        href="https://www.instagram.com/dishfit_healthy_recipes" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex h-11 w-11 items-center justify-center rounded-full text-white bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] shadow-md shadow-pink-200 transition-all duration-300 hover:scale-110 cursor-pointer"
                        aria-label="Instagram"
                        title="Follow us on Instagram"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                        </svg>
                      </a>
                      <a 
                        href="https://www.pinterest.com/aalhyane72/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex h-11 w-11 items-center justify-center rounded-full text-white bg-[#E60023] shadow-md shadow-red-200 transition-all duration-300 hover:scale-110 hover:bg-[#ad081b] cursor-pointer"
                        aria-label="Pinterest"
                        title="Follow us on Pinterest"
                      >
                        <svg 
                          viewBox="0 0 24 24" 
                          fill="currentColor" 
                          className="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.033-1.002 2.324-1.492 3.12 1.1.34 2.269.521 3.483.521 6.621 0 11.988-5.366 11.988-11.987S18.638 0 12.017 0z"/>
                        </svg>
                      </a>
                    </div>`;

if (content.includes(target)) {
  content = content.replace(target, replacement);
  fs.writeFileSync('src/App.tsx', content);
  console.log("Patched successfully.");
} else {
  console.log("Target not found!");
}
