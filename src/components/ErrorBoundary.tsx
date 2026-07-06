import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    const message = String(error?.message || "");
    const isChunkError =
      message.includes("Failed to fetch dynamically imported module") ||
      message.includes("Loading chunk") ||
      message.includes("Importing a module script failed") ||
      message.includes("dynamically imported module");

    console.error("App crashed:", error, info);

    if (isChunkError && !sessionStorage.getItem("chunk-reload-attempted")) {
      sessionStorage.setItem("chunk-reload-attempted", "true");
      window.location.reload();
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-6 space-y-4">
          <h1 className="text-xl font-bold text-slate-900">
            Something went wrong loading this page
          </h1>
          <p className="text-sm text-slate-500 max-w-sm">
            This can happen right after the site is updated. Please refresh
            the page — if it keeps happening, come back in a minute.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="rounded-xl bg-brand-green px-6 py-3 font-bold text-white shadow-lg active:scale-95 transition-all"
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
