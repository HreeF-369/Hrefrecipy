import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  ShieldCheck, 
  Trash2, 
  Download, 
  RefreshCw, 
  AlertTriangle, 
  ChevronRight,
  Database,
  Lock,
  EyeOff
} from "lucide-react";
import { useApp } from "../context/AppContext";

const DataPreference = () => {
  const { preferences, updatePreferences, clearGroceryList, clearAllData, plan, favorites, groceryItems } = useApp();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved">("idle");

  const handleToggleSync = () => {
    updatePreferences({ googleSync: !preferences.googleSync });
    triggerSave();
  };

  const triggerSave = () => {
    setSaveStatus("saving");
    setTimeout(() => setSaveStatus("saved"), 800);
    setTimeout(() => setSaveStatus("idle"), 3000);
  };

  const handleExportData = () => {
    const data = {
      plan,
      favorites,
      groceryItems,
      preferences,
      exportDate: new Date().toISOString(),
      app: "Hreefrecipy"
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `hreefrecipy-data-export-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleClearGrocery = () => {
    if (window.confirm("Are you sure you want to clear your current grocery list? This cannot be undone.")) {
      clearGroceryList();
      alert("Grocery list cleared.");
    }
  };

  const handleDeleteAccount = () => {
    clearAllData();
    setShowDeleteConfirm(false);
    alert("All your data has been permanently removed.");
    window.location.href = "/";
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-4xl mx-auto"
    >
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-brand-green-light rounded-lg text-brand-green">
            <ShieldCheck size={24} />
          </div>
          <h1 className="text-3xl font-display font-bold text-brand-ink uppercase tracking-tight">Data Preference</h1>
        </div>
        <p className="text-slate-500 max-w-2xl leading-relaxed">
          Manage how we handle your information. We prioritize your privacy and ensure your data 
          is used only to enhance your kitchen experience.
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main Controls */}
        <div className="lg:col-span-2 space-y-8">
          {/* Privacy Statement */}
          <motion.section variants={itemVariants} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
            <h2 className="text-lg font-bold text-brand-ink mb-4 flex items-center gap-2">
              <Lock size={18} className="text-brand-green" />
              Our Privacy Promise
            </h2>
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>
                At Hreefrecipy, we believe your data belongs to you. We use Google OAuth only to provide features 
                like syncing your meal plan to Google Calendar or adding ingredients to Google Tasks.
              </p>
              <p>
                We do not sell, share, or monetize your personal information. All your cooking habits and 
                preferences are stored locally or in your secure private cloud.
              </p>
            </div>
          </motion.section>

          {/* Integration Controls */}
          <motion.section variants={itemVariants} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
            <h2 className="text-lg font-bold text-brand-ink mb-6">Integrations & Sync</h2>
            
            <div className="flex items-center justify-between py-4 border-b border-slate-50">
              <div>
                <h3 className="font-bold text-slate-800">Google Ecosystem Sync</h3>
                <p className="text-xs text-slate-500 mt-1">Automatically add recipes to Google Calendar & Tasks</p>
              </div>
              <button 
                onClick={handleToggleSync}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${preferences.googleSync ? 'bg-brand-green' : 'bg-slate-200'}`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${preferences.googleSync ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>

            <div className="mt-8">
              <button 
                onClick={triggerSave}
                disabled={saveStatus !== "idle"}
                className={`w-full py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                  saveStatus === "saved" 
                    ? "bg-green-500 text-white" 
                    : "bg-brand-ink text-white hover:bg-slate-800 active:scale-95"
                }`}
              >
                {saveStatus === "saving" && <RefreshCw size={16} className="animate-spin" />}
                {saveStatus === "saved" ? "Changes Saved" : "Save Preferences"}
              </button>
            </div>
          </motion.section>

          {/* Danger Zone */}
          <motion.section variants={itemVariants} className="bg-red-50/50 p-8 rounded-[2rem] border border-red-100">
            <h2 className="text-lg font-bold text-red-900 mb-6 flex items-center gap-2">
              <AlertTriangle size={18} />
              Danger Zone
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-red-900">Clear Grocery History</h3>
                  <p className="text-xs text-red-700/70 mt-1">Permanently remove all items from your current list.</p>
                </div>
                <button 
                  onClick={handleClearGrocery}
                  className="px-4 py-2 rounded-lg bg-white border border-red-200 text-red-600 text-xs font-black uppercase tracking-wider hover:bg-red-600 hover:text-white transition-all shadow-sm"
                >
                  Clear Now
                </button>
              </div>

              <div className="pt-6 border-t border-red-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-red-900 text-lg">Delete Account Data</h3>
                    <p className="text-sm text-red-700/70 mt-1">This will erase your recipes, favorites, and all preferences.</p>
                  </div>
                  <button 
                    onClick={() => setShowDeleteConfirm(true)}
                    className="px-6 py-3 rounded-xl bg-red-600 text-white text-sm font-bold shadow-lg shadow-red-200 hover:bg-red-700 transition-all active:scale-95"
                  >
                    Delete Everything
                  </button>
                </div>
              </div>
            </div>
          </motion.section>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <motion.div variants={itemVariants} className="bg-brand-green p-6 rounded-[2rem] text-white">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 mb-4">
              <Download size={20} />
            </div>
            <h3 className="font-bold text-lg mb-2">Export Your Data</h3>
            <p className="text-sm text-white/80 mb-6 leading-relaxed">
              Take your culinary journey with you. Download a copy of your curated recipes and plan in JSON format.
            </p>
            <button 
              onClick={handleExportData}
              className="w-full py-3 bg-white text-brand-green rounded-xl text-sm font-bold hover:bg-slate-50 transition-colors shadow-sm"
            >
              Export My Recipes
            </button>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Database size={16} className="text-slate-400" />
              Data Summary
            </h3>
            <ul className="space-y-3">
              <li className="flex justify-between text-xs">
                <span className="text-slate-500">Plan Items</span>
                <span className="font-bold text-brand-ink">{Object.keys(plan).length}</span>
              </li>
              <li className="flex justify-between text-xs">
                <span className="text-slate-500">Favorites</span>
                <span className="font-bold text-brand-ink">{favorites.length}</span>
              </li>
              <li className="flex justify-between text-xs">
                <span className="text-slate-500">Grocery Items</span>
                <span className="font-bold text-brand-ink">{groceryItems.length}</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 sm:p-0">
          <div className="absolute inset-0 bg-brand-ink/40 backdrop-blur-md" onClick={() => setShowDeleteConfirm(false)}></div>
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative bg-white w-full max-w-md p-8 rounded-[2.5rem] shadow-2xl"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-red-600 mb-6 mx-auto">
              <Trash2 size={32} />
            </div>
            <h2 className="text-2xl font-bold text-center text-brand-ink mb-2">Are you absolutely sure?</h2>
            <p className="text-slate-500 text-center mb-8">
              This action is permanent and cannot be reversed. You will lose all your saved recipes, meal plans, and personalized settings.
            </p>
            <div className="flex flex-col gap-3">
              <button 
                onClick={handleDeleteAccount}
                className="w-full py-4 bg-red-600 text-white rounded-2xl font-bold hover:bg-red-700 transition-all active:scale-95 shadow-lg shadow-red-100"
              >
                Yes, delete everything
              </button>
              <button 
                onClick={() => setShowDeleteConfirm(false)}
                className="w-full py-4 bg-slate-100 text-slate-600 rounded-2xl font-bold hover:bg-slate-200 transition-all active:scale-95"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default DataPreference;
