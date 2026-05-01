import React, { useState, FormEvent, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Plus, 
  Trash2, 
  Printer, 
  Share2, 
  CheckCircle2, 
  Apple, 
  Package, 
  Milk, 
  Flame,
  Edit2,
  Check,
  ShoppingCart,
  ChevronDown,
  XCircle,
  Clock,
  Sparkles
} from "lucide-react";
import { useApp } from "../context/AppContext";

export default function GroceryList() {
  const { groceryItems, addGroceryItem, toggleGroceryItem, deleteGroceryItem, updateGroceryItemAmount, clearGroceryList } = useApp();
  
  const [newItemName, setNewItemName] = useState("");
  const [newItemCategory, setNewItemCategory] = useState("Produce");
  const [newItemAmount, setNewItemAmount] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState("");
  const [collapsedCats, setCollapsedCats] = useState<string[]>([]);

  React.useEffect(() => {
    document.title = "Grocery List | Hreefrecipy";
  }, []);

  const dynamicCategories = useMemo(() => {
    const cats = Array.from(new Set(groceryItems.map(i => i.category)));
    return cats.sort();
  }, [groceryItems]);

  const toggleCategory = (cat: string) => {
    setCollapsedCats(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const handleQuickAdd = (e?: FormEvent) => {
    if (e) e.preventDefault();
    if (!newItemName.trim()) return;
    addGroceryItem(newItemName, newItemCategory, newItemAmount || "1 unit");
    setNewItemName("");
    setNewItemAmount("");
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    const listText = groceryItems
      .filter(i => !i.checked)
      .map(i => `• ${i.name} (${i.amount}) - [${i.category}]`)
      .join("\n");
    const text = encodeURIComponent(`🛒 My Grocery List from Hreefrecipy:\n\n${listText}`);
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  const startEditing = (id: string, currentAmount: string) => {
    setEditingId(id);
    setEditValue(currentAmount);
  };

  const saveEdit = (id: string) => {
    updateGroceryItemAmount(id, editValue);
    setEditingId(null);
  };

  const getCategoryIcon = (cat: string) => {
    const c = cat.toLowerCase();
    if (c.includes("produce") || c.includes("fruit") || c.includes("vegetable")) return <Apple size={16} />;
    if (c.includes("dairy") || c.includes("milk") || c.includes("cheese")) return <Milk size={16} />;
    if (c.includes("pantry") || c.includes("oil") || c.includes("baking") || c.includes("condiments")) return <Package size={16} />;
    if (c.includes("meat") || c.includes("poultry") || c.includes("seafood") || c.includes("fish")) return <Flame size={16} />;
    if (c.includes("grain") || c.includes("pasta") || c.includes("rice")) return <Clock size={16} />;
    if (c.includes("spice") || c.includes("salt") || c.includes("pepper")) return <Sparkles size={16} />;
    if (c.includes("bakery") || c.includes("bread")) return <Package size={16} className="text-orange-400" />;
    return <ShoppingCart size={16} />;
  };

  const defaultCategories = ["Produce", "Dairy", "Meat", "Grains", "Bakery", "Spices", "Condiments", "Other"];

  const groupedItems = dynamicCategories.reduce((acc, cat) => {
    const items = groceryItems.filter(i => i.category === cat);
    if (items.length > 0) acc[cat] = items;
    return acc;
  }, {} as Record<string, typeof groceryItems>);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-10 print:p-0"
    >
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between print:hidden">
        <div>
          <h1 className="font-display text-3xl md:text-4xl font-black tracking-tight text-brand-ink uppercase">Grocery List</h1>
          <p className="text-slate-400 font-bold tracking-widest text-[10px] uppercase">Check off as you shop</p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={clearGroceryList}
            className="flex-1 sm:flex-none p-3 bg-red-50 border border-red-100 rounded-xl text-red-500 hover:bg-red-500 hover:text-white transition-all active:scale-95 flex items-center justify-center"
            title="Clear List"
          >
            <Trash2 size={20} />
          </button>
          <button 
            onClick={handlePrint}
            className="flex-1 sm:flex-none p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-500 hover:text-brand-green transition-colors flex items-center justify-center"
            title="Print List"
          >
            <Printer size={20} />
          </button>
          <button 
            onClick={handleShare}
            className="flex-1 sm:flex-none p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-500 hover:text-brand-green transition-colors flex items-center justify-center"
            title="Share List"
          >
            <Share2 size={20} />
          </button>
        </div>
      </header>

      {/* Print Only Header */}
      <div className="hidden print:block text-center mb-10">
        <h1 className="text-3xl font-bold">Hreefrecipy Shopping List</h1>
        <p className="text-gray-500">{new Date().toLocaleDateString()}</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar/Add Area - Comes first for mobile */}
        <aside className="w-full lg:w-1/3 shrink-0 space-y-6 print:hidden order-1 lg:max-w-sm">
          <form 
            onSubmit={handleQuickAdd}
            className="rounded-3xl bg-white p-6 md:p-8 shadow-xl recipe-card-shadow ring-1 ring-gray-100"
          >
            <h3 className="text-lg font-bold mb-6">Quick Add</h3>
            <div className="space-y-4">
              <input 
                type="text" 
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                placeholder="Item name (e.g. Avocado)"
                className="w-full rounded-2xl bg-gray-50 border-none px-4 py-4 focus:ring-2 focus:ring-brand-green transition-all outline-none"
              />
              <div className="grid grid-cols-2 gap-3">
                <input 
                  type="text" 
                  value={newItemAmount}
                  onChange={(e) => setNewItemAmount(e.target.value)}
                  placeholder="2 units"
                  className="w-full rounded-2xl bg-gray-50 border-none px-4 py-4 focus:ring-2 focus:ring-brand-green transition-all outline-none"
                />
                <select 
                  value={newItemCategory}
                  onChange={(e) => setNewItemCategory(e.target.value)}
                  className="w-full rounded-2xl bg-gray-50 border-none px-4 py-4 focus:ring-2 focus:ring-brand-green transition-all outline-none"
                >
                  {defaultCategories.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <button 
                type="submit"
                className="w-full rounded-2xl bg-brand-green py-4 font-bold text-white shadow-lg shadow-brand-green/20 transition-transform active:scale-95"
              >
                Add to List
              </button>
            </div>
          </form>

          <div className="rounded-3xl bg-brand-green-light/10 p-6 md:p-8 space-y-4">
            <h4 className="font-bold text-brand-green flex items-center gap-2">
              <Sparkles size={18} /> Smart Tip
            </h4>
            <p className="text-sm text-brand-green/80 leading-relaxed">
              Plan your meals first! Your grocery list will automatically sync with all the ingredients you need for your week.
            </p>
          </div>
        </aside>

        {/* List Content */}
        <div className="flex-1 w-full space-y-8 order-2">
          {Object.entries(groupedItems).map(([category, itemsData]) => {
            const items = itemsData as any[];
            const isCollapsed = collapsedCats.includes(category);
            return (
              <section key={category} className="space-y-4 break-inside-avoid">
                <div 
                  onClick={() => toggleCategory(category)}
                  className="flex items-center gap-3 border-b border-slate-100 pb-2 cursor-pointer group"
                >
                  <div className="p-1.5 rounded-lg bg-slate-50 text-slate-400">
                     {getCategoryIcon(category)}
                  </div>
                  <h2 className="text-xl font-bold text-brand-ink">{category}</h2>
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">{items.length} items</span>
                  <div className={`ml-auto transition-transform ${isCollapsed ? "-rotate-90" : ""}`}>
                    <ChevronDown size={18} className="text-slate-300 group-hover:text-brand-green" />
                  </div>
                </div>

                <AnimatePresence>
                  {!isCollapsed && (
                    <motion.div 
                      key={`${category}-content`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="grid gap-3 overflow-hidden"
                    >
                      {items.map(item => (
                        <motion.div
                          layout
                          key={item.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          className={`group flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm border border-slate-100 transition-all ${
                            item.checked ? "bg-slate-50 border-transparent opacity-60" : "hover:shadow-md"
                          } print:shadow-none print:border-b print:border-slate-100`}
                        >
                          <button 
                            onClick={(e) => { e.stopPropagation(); toggleGroceryItem(item.id); }}
                            className={`transition-colors flex items-center justify-center h-6 w-6 rounded border-2 print:hidden ${
                              item.checked 
                                ? "bg-brand-green-light border-brand-green text-brand-green" 
                                : "bg-white border-slate-200 text-transparent"
                            }`}
                          >
                            <CheckCircle2 size={16} />
                          </button>
                          
                          <div className="flex-1 flex items-center justify-between">
                            <p className={`font-bold transition-all text-sm ${item.checked ? "line-through text-slate-400" : "text-slate-700"}`}>
                              {item.name}
                            </p>
                            
                            <div className="flex items-center justify-end min-w-[80px]">
                              {editingId === item.id ? (
                                <div className="flex items-center gap-2">
                                  <input 
                                    autoFocus
                                    type="text"
                                    value={editValue}
                                    onChange={(e) => setEditValue(e.target.value)}
                                    onBlur={() => saveEdit(item.id)}
                                    onKeyDown={(e) => e.key === "Enter" && saveEdit(item.id)}
                                    className="text-xs w-20 px-2 py-1 rounded-md border border-brand-green outline-none font-bold text-brand-green bg-green-50"
                                  />
                                  <button onClick={() => saveEdit(item.id)} className="text-brand-green p-1 hover:bg-green-100 rounded-md"><Check size={14} /></button>
                                </div>
                              ) : (
                                <div 
                                  onClick={(e) => { e.stopPropagation(); !item.checked && startEditing(item.id, item.amount || ""); }}
                                  className="group/amount flex items-center gap-2 cursor-pointer px-3 py-1.5 rounded-lg hover:bg-slate-50 transition-colors"
                                >
                                  <p className="text-xs font-bold text-slate-500">
                                    {item.amount}
                                  </p>
                                  {!item.checked && (
                                    <Edit2 size={12} className="text-slate-300 opacity-0 group-hover/amount:opacity-100 transition-opacity" />
                                  )}
                                </div>
                              )}
                            </div>
                          </div>

                          <button 
                            onClick={(e) => { e.stopPropagation(); deleteGroceryItem(item.id); }}
                            className="opacity-0 group-hover:opacity-100 p-2 text-gray-400 hover:text-red-500 transition-all print:hidden"
                          >
                            <Trash2 size={18} />
                          </button>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </section>
            );
          })}

          {groceryItems.length === 0 && (
            <div className="py-32 flex flex-col items-center justify-center text-center space-y-6">
              <div className="h-24 w-24 bg-brand-green/10 rounded-full flex items-center justify-center text-brand-green">
                <ShoppingCart size={40} />
              </div>
              <div>
                <h3 className="font-bold text-brand-ink text-xl">Your list is empty. Start adding items!</h3>
                <p className="text-slate-500 mt-2">Add items manually or pick ingredients from your meal plan.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
