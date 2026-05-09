declare function gtag(
  command: 'config' | 'event' | 'js' | 'set',
  targetId: string | Date,
  params?: Record<string, unknown>
): void;

interface Window {
  gtag: typeof gtag;
  dataLayer: unknown[];
}
