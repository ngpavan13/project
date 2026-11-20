import './globals.css';
import { StayProvider } from '@/context/StayContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
export const metadata = { title: 'NestNear | Find your place near campus', description: 'Discover, compare and shortlist verified-style PG accommodation options near your university.' };
export default function RootLayout({ children }) {
  return <html lang="en"><body><StayProvider><Navbar /><main>{children}</main><Footer /></StayProvider></body></html>;
}