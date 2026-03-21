import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Manjjari Holidays - Travel Agency BBSr',
  description: 'Get in touch with Manjjari Holidays, the best travel company in Bhubaneswar. We are here to plan your perfect vacation in Odisha.',
  openGraph: {
    title: 'Contact Us | Manjjari Holidays',
    description: 'Contact the best travel agency in Bhubaneswar, Odisha today.',
    url: 'https://manjjariholidays.com/contact',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
