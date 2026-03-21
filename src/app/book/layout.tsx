import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Tour | Best Tour Operators in Odisha',
  description: 'Book your dream vacation with Manjjari Holidays. The most trusted tour operators and best travel agency in Bhubaneswar, Odisha.',
  openGraph: {
    title: 'Book a Tour | Manjjari Holidays',
    description: 'Book your dream vacation with the best travel company in Bhubaneswar.',
    url: 'https://manjjariholidays.com/book',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
