export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-muted/40">
      {/* Sidebar and Header will go here */}
      <main className="p-4">{children}</main>
    </div>
  );
}
