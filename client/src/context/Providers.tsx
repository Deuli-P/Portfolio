import { FilterProvider } from "./filter-projets-context";


export default function Providers({ children }: { children: React.ReactNode }) {
  return (
      <FilterProvider>
        {children}
      </FilterProvider>
  );
}