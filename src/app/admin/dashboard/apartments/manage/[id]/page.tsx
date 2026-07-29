
//src\app\admin\dashboard\apartments\manage\[id]\page.tsx



import EditApartment from "@/components/dashboard/apartments/Edit Apartment";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditApartmentPage({
  params,
}: PageProps) {
  const { id } = await params;

  console.log("Page id:", id);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Manage Apartment
        </h1>

        <p className="mt-2 text-slate-500">
          Update listing apartment.
        </p>
      </div>

      <EditApartment apartmentId={id} />
    </div>
  );
}