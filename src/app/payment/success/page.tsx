



import Link from "next/link";

interface PaymentSuccessPageProps {
  searchParams: Promise<{
    reference?: string;
  }>;
}

export default async function PaymentSuccessPage({
  searchParams,
}: PaymentSuccessPageProps) {
  const { reference } = await searchParams;

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div>
        <h1 className="text-3xl font-bold">
          Payment Successful
        </h1>

        <p>{reference}</p>

        <Link href="/">Home</Link>
      </div>
    </main>
  );
}