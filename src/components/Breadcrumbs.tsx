import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav id="breadcrumbs-nav" aria-label="Breadcrumb" className="flex items-center space-x-1.5 md:space-x-2 text-xs md:text-sm font-semibold text-slate-400 mb-6 flex-wrap leading-tight py-1 no-print">
      <Link 
        id="breadcrumb-home-link"
        to="/" 
        className="flex items-center gap-1 text-slate-400 hover:text-brand-green transition-colors py-1 shrink-0"
      >
        <Home size={14} />
        <span className="text-xs">Home</span>
      </Link>
      {items.map((item, idx) => (
        <div key={idx} className="flex items-center gap-1.5 md:gap-2 shrink-0 py-1">
          <ChevronRight size={12} className="text-slate-300 shrink-0" />
          {item.path ? (
            <Link 
              id={`breadcrumb-link-${idx}`}
              to={item.path} 
              className="text-slate-400 hover:text-brand-green transition-colors capitalize"
            >
              {item.label}
            </Link>
          ) : (
            <span 
              id={`breadcrumb-active-${idx}`}
              className="text-slate-700 font-bold truncate max-w-[150px] sm:max-w-[250px] md:max-w-md capitalize" 
              aria-current="page"
            >
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}
