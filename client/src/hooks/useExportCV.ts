import { useState, useCallback, useRef } from 'react';
import type { ExportState } from '../types/cv.types';
import { exportElementAsJpg, waitForFonts } from '../utils/exportUtils';
import { getDefaultExportOptions } from '../utils/exportConstants';

const INITIAL_STATE: ExportState = {
  status: 'idle',
  progress: 0,
  error: null,
};

/**
 * Hook for managing CV export functionality
 */
export function useExportCV() {
  const [state, setState] = useState<ExportState>(INITIAL_STATE);
  const exportContainerRef = useRef<HTMLDivElement>(null);

  const setStatus = useCallback((status: ExportState['status'], error: string | null = null) => {
    setState(prev => ({ ...prev, status, error }));
  }, []);

  const exportCV = useCallback(async () => {
    const container = exportContainerRef.current;
    
    if (!container) {
      setStatus('error', 'Export container not found');
      return;
    }

    try {
      // Preparing phase
      setStatus('preparing');
      await waitForFonts();

      // Rendering phase
      setStatus('rendering');
      const options = getDefaultExportOptions();
      
      await exportElementAsJpg(container, options);

      // Success
      setStatus('success');
      
      // Reset to idle after 3 seconds
      setTimeout(() => {
        setState(INITIAL_STATE);
      }, 3000);

    } catch (error) {
      console.error('Export failed:', error);
      setStatus('error', error instanceof Error ? error.message : 'Export failed');
    }
  }, [setStatus]);

  const retry = useCallback(() => {
    setState(INITIAL_STATE);
    exportCV();
  }, [exportCV]);

  const reset = useCallback(() => {
    setState(INITIAL_STATE);
  }, []);

  return {
    state,
    exportContainerRef,
    exportCV,
    retry,
    reset,
  };
}

