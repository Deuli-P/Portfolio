import { FilterProvider } from "./filter-projets-context";
import ActiveSectionContextProvider from "./active-section-context";


export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ActiveSectionContextProvider>
      <FilterProvider>
        {children}
      </FilterProvider>
    </ActiveSectionContextProvider>
  );
}