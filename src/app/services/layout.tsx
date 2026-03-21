import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Best Tour and Travels in Bhubaneswar',
  description: 'Explore the expert travel services offered by Manjjari Holidays. From cab booking and hotel reservations to comprehensive tour and travel packages in Odisha.',
  openGraph: {
    title: 'Our Services | Manjjari Holidays',
    description: 'Explore the expert travel services offered by Manjjari Holidays, the best tour operators in Bhubaneswar.',
    url: 'https://manjjariholidays.com/services',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
