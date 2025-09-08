import React, { ReactNode } from "react";

class ErrorBoundary extends React.Component<
  {
    fallback?: ReactNode;
    children: ReactNode;
  },
  {
    hasError: boolean;
    error: unknown;
    errorInfo: string | null;
  }
> {
  constructor(props: { fallback?: ReactNode; children: ReactNode; }) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render shows the fallback UI.
    return { hasError: true, error: error };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // You can also log the error to an error reporting service
    console.error("Error caught by Error Boundary:", error, errorInfo);
    this.setState({ errorInfo: errorInfo });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h1>Something went wrong.</h1>
          {this.props.fallback || <p>Please try again later.</p>}
          {/* Optional: Display error details for debugging */}
          {/* <details style={{ whiteSpace: 'pre-wrap' }}>
                {this.state.error && this.state.error.toString()}
                <br />
                {this.state.errorInfo && this.state.errorInfo.componentStack}
              </details> */}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
