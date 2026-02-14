import Sidenav from '../ui/dashboard/sidenav';

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Sidenav />
      <section className="flex justify-center ml-50 p-16 h-dvh max-md:ml-0">
        {children}
      </section>
    </div>
  );
}
