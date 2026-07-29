

"use client";

import {
  BadgeCheck,
  CreditCard,
  Receipt,
  Wallet,
} from "lucide-react";

interface BookingPaymentCardProps {
  payment: {
    amount: number;

    cleaningFee?: number;

    securityDeposit?: number;

    totalAmount: number;

    paymentMethod: string;

    paymentStatus:
      | "PAID"
      | "PENDING"
      | "FAILED"
      | "REFUNDED";

    transactionId?: string;
  };
}

export default function BookingPaymentCard({
  payment,
}: BookingPaymentCardProps) {
  const statusColor = {
    PAID: "bg-green-100 text-green-700",
    PENDING: "bg-yellow-100 text-yellow-700",
    FAILED: "bg-red-100 text-red-700",
    REFUNDED: "bg-slate-200 text-slate-700",
  };

  return (
    <div
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
      "
    >
      <h2 className="mb-6 text-xl font-bold text-slate-900">
        Payment Details
      </h2>

      <div className="space-y-5">
        {/* Apartment Price */}

        <PaymentRow
          icon={<Wallet size={20} />}
          label="Apartment Fee"
          value={`₦${payment.amount.toLocaleString()}`}
        />

        {/* Cleaning Fee */}

        <PaymentRow
          icon={<Receipt size={20} />}
          label="Cleaning Fee"
          value={`₦${(
            payment.cleaningFee ?? 0
          ).toLocaleString()}`}
        />

        {/* Security Deposit */}

        <PaymentRow
          icon={<Receipt size={20} />}
          label="Security Deposit"
          value={`₦${(
            payment.securityDeposit ?? 0
          ).toLocaleString()}`}
        />

        {/* Total */}

        <div className="border-t border-slate-200 pt-5">
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-slate-700">
              Total Paid
            </span>

            <span className="text-2xl font-bold text-blue-600">
              ₦
              {payment.totalAmount.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Method */}

        <PaymentRow
          icon={<CreditCard size={20} />}
          label="Payment Method"
          value={payment.paymentMethod}
        />

        {/* Status */}

        <div className="flex items-center justify-between">
          <span className="text-slate-500">
            Payment Status
          </span>

          <span
            className={`
              rounded-full
              px-3
              py-1
              text-xs
              font-semibold
              ${
                statusColor[
                  payment.paymentStatus
                ]
              }
            `}
          >
            {payment.paymentStatus}
          </span>
        </div>

        {/* Transaction */}

        {payment.transactionId && (
          <PaymentRow
            icon={<BadgeCheck size={20} />}
            label="Transaction ID"
            value={payment.transactionId}
          />
        )}
      </div>
    </div>
  );
}

interface PaymentRowProps {
  icon: React.ReactNode;

  label: string;

  value: string;
}

function PaymentRow({
  icon,
  label,
  value,
}: PaymentRowProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            bg-slate-100
            text-slate-600
          "
        >
          {icon}
        </div>

        <span className="text-slate-600">
          {label}
        </span>
      </div>

      <span className="font-semibold text-slate-900">
        {value}
      </span>
    </div>
  );
}