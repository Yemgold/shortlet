


import CreateApartmentForm from "@/components/dashboard/apartments/CreateApartmentForm/index";

export default function CreateApartmentPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Create Apartment
        </h1>

        <p className="mt-2 text-slate-500">
          Add a new apartment listing.
        </p>
      </div>

      <CreateApartmentForm />
    </div>
  );
}