import React from "react";

function useEscapeKey(callback) {
  React.useEffect(() => {
    function handleEscape(event) {
      if (event.code === 'Escape') {
        callback(event);
      }
    }
    
    window.addEventListener('keydown', handleEscape);

    return () => window.removeEventListener('keydown', handleEscape);
  }, [callback]);
}

export default useEscapeKey;