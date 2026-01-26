import type { ExportState } from '../types/cv.types';

interface DownloadButtonProps {
  onClick: () => void;
  state: ExportState;
  className?: string;
}

/**
 * Download CV button with loading and status states
 */
export default function DownloadButton({ onClick, state, className = '' }: DownloadButtonProps) {
  const isLoading = state.status === 'preparing' || state.status === 'rendering';
  const isSuccess = state.status === 'success';
  const isError = state.status === 'error';

  const getButtonText = () => {
    switch (state.status) {
      case 'preparing':
        return 'Preparing...';
      case 'rendering':
        return 'Generating...';
      case 'success':
        return '✓ Downloaded';
      case 'error':
        return 'Retry Download';
      default:
        return 'Download CV';
    }
  };

  const getButtonStyles = () => {
    const base = 'h-10 px-4 border uppercase text-[10px] tracking-[0.2em] transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-1 flex items-center gap-2';
    
    if (isSuccess) {
      return `${base} border-green-600 bg-green-600 text-white`;
    }
    if (isError) {
      return `${base} border-red-600 bg-transparent text-red-600 hover:bg-red-600 hover:text-white focus-visible:ring-red-600`;
    }
    if (isLoading) {
      return `${base} border-[#1A1A1A] bg-transparent text-[#1A1A1A] opacity-70 cursor-wait`;
    }
    return `${base} border-[#1A1A1A] bg-transparent text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white focus-visible:ring-[#1A1A1A]`;
  };

  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className={`${getButtonStyles()} ${className}`}
      aria-busy={isLoading}
    >
      {isLoading && (
        <span className="animate-spin h-3 w-3 border border-current border-t-transparent rounded-full" />
      )}
      {getButtonText()}
    </button>
  );
}

