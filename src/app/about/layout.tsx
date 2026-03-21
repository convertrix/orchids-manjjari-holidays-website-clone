import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Manjjari Holidays - Travel Agency in Bhubaneswar',
  description: 'Learn about Manjjari Holidays, one of the best travel agents and tour operators in Bhubaneswar, Odisha. We specialize in eco tours, tribal tours, and custom travel packages.',
  openGraph: {
    title: 'About Us | Manjjari Holidays',
    description: 'Learn about Manjjari Holidays, the premier travel agency in Bhubaneswar, Odisha.',
    url: 'https://manjjariholidays.com/about',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
