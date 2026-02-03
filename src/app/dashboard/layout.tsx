import Sidenav from '../ui/dashboard/sidenav';

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Sidenav />
        <main className="ml-50 p-16 h-dvh max-md:ml-0">{children}</main>
      </body>
    </html>
  );
}
