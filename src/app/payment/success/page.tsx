

import PaymentSuccessClient from "./PaymentSuccessClient";

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
    <PaymentSuccessClient
      reference={reference ?? ""}
    />
  );
}