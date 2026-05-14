export default function PageHeader({
  title,
  breadcrumb,
  children,
}) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-gray-500">{breadcrumb}</p>
      </div>

      <div>{children}</div>
    </div>
  );
}