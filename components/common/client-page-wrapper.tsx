/** Page-level entrance: a quick fade-up of the whole route. CSS-only. */
export function ClientPageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full duration-500 ease-out animate-in fade-in slide-in-from-bottom-2">
      {children}
    </div>
  );
}
