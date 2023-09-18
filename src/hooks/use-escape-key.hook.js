import React from "react";

function useEscapeKey(callback) {
  React.useEffect(() => {
    function handleEscape(event) {
      if (event.code === 'Escape') {
        callback([]);
      }
    }

    console.log('render')
    window.addEventListener('keydown', handleEscape);

    return () => window.removeEventListener('keydown', handleEscape);
  }, [callback]);
}

export default useEscapeKey;