import PageHeader from "../components/PageHeader";

export default function Dashboard() {
  return (
    <div>
      <PageHeader
        title="Dashboard"
        breadcrumb="Home / Dashboard"
      >
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
          Add Data
        </button>
      </PageHeader>

      <div className="bg-white p-6 rounded-xl shadow">
        Welcome to Dashboard
      </div>
    </div>
  );
}