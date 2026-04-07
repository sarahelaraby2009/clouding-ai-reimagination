/** Shared TypeScript types for clouding.ai */

export interface PageProps {
  params: Record<string, string>;
  searchParams: Record<string, string | string[]>;
}

export interface ComponentBaseProps {
  className?: string;
  children?: React.ReactNode;
}
