import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught:", error, errorInfo);
    this.props.showToast?.("Something went wrong. Please refresh the page.", "error");
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="section container" style={{ textAlign: "center" }}>
          <h2>Oops! Something went wrong</h2>
          <p className="muted">We're sorry for the inconvenience. Please refresh the page or contact support.</p>
          <button className="btn" onClick={() => window.location.reload()}>Refresh Page</button>
        </section>
      );
    }

    return this.props.children;
  }
}