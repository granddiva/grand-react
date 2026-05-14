import TableAdmin from "../components/TableAdmin";

export default function AdminPage() {
  return (
    <div className="p-6">
      <TableAdmin data={data.wisata} />
    </div>
  );
}