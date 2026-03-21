import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tour Packages | Best Travel Agency in Odisha',
  description: 'Discover curated tour packages by the best travel agency in Odisha. We offer premium eco tours, tribal tours, and heritage trips across Bhubaneswar and India.',
  openGraph: {
    title: 'Tour Packages | Manjjari Holidays',
    description: 'Discover curated tour packages by Manjjari Holidays, the best tour and travel agency in Bhubaneswar, Odisha.',
    url: 'https://manjjariholidays.com/packages',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
