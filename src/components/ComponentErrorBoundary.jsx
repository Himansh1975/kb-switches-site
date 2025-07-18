import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

class ComponentErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error in development
    if (process.env.NODE_ENV === 'development') {
      console.error(`Error in ${this.props.componentName}:`, error, errorInfo);
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <div className="flex items-center justify-center mb-4">
            <AlertCircle className="w-8 h-8 text-red-500" />
          </div>
          <h3 className="text-lg font-semibold text-red-800 mb-2">
            {this.props.componentName || 'Component'} Error
          </h3>
          <p className="text-red-600 mb-4">
            This section couldn't load properly. Please try refreshing.
          </p>
          <button
            onClick={this.handleRetry}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 mx-auto"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Retry</span>
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ComponentErrorBoundary;