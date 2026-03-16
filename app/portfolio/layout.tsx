import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | SHINE Foundation',
  description: 'Explore startups from SHINE Acceleration and Incubation programs',
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
