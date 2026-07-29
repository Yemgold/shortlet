



// "use client";

// import Link from "next/link";
// import { useRouter } from "next/navigation";

// import { useForm } from "react-hook-form";

// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";

// import Button from "@/components/ui/Button";
// import Input from "@/components/ui/Input";

// import {
//   AuthCard,
//   AuthHeader,
//   AuthFooter,
//   Divider,
//   PasswordInput,
//   SocialLogin,
// } from "@/components/auth";

// import { useLogin } from "@/hooks/useLogin";

// const loginSchema = z.object({
//   email: z
//     .string()
//     .trim()
//     .email("Enter a valid email address"),

//   password: z
//     .string()
//     .min(
//       8,
//       "Password must contain at least 8 characters"
//     ),
// });

// type LoginFormData = z.infer<
//   typeof loginSchema
// >;

// export default function LoginForm() {
//   const router = useRouter();

//   const loginMutation = useLogin();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<LoginFormData>({
//     resolver: zodResolver(loginSchema),

//     defaultValues: {
//       email: "",
//       password: "",
//     },
//   });

//   const onSubmit = async (
//     data: LoginFormData
//   ) => {
//     try {
//       const response =
//         await loginMutation.mutateAsync(
//           data
//         );

//       const role =
//         response.data.user.role;

//       /**
//        * Redirect according to role
//        */

//       if (role === "ADMIN") {
//         router.push("/admin");
//       } else {
//         router.push("/");
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <AuthCard>
//       <AuthHeader
//         title="Welcome Back"
//         subtitle="Login to your RH Luxury Homes account"
//       />

//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="space-y-6"
//       >
//         <Input
//           label="Email Address"
//           type="email"
//           placeholder="example@email.com"
//           autoComplete="email"
//           {...register("email")}
//           error={errors.email?.message}
//         />

//         <PasswordInput
//           label="Password"
//           placeholder="Enter your password"
//           autoComplete="current-password"
//           {...register("password")}
//           error={
//             errors.password?.message
//           }
//         />

//         <div className="flex justify-end">
//           <Link
//             href="/auth/forgot-password"
//             className="text-sm font-medium text-primary transition hover:underline"
//           >
//             Forgot password?
//           </Link>
//         </div>

//         {loginMutation.isError && (
//           <div className="rounded-xl border border-red-200 bg-red-50 p-4">
//             <p className="text-sm font-medium text-red-600">
//               {loginMutation.error
//                 ?.message ??
//                 "Login failed. Please check your credentials and try again."}
//             </p>
//           </div>
//         )}

//         {loginMutation.isSuccess && (
//           <div className="rounded-xl border border-green-200 bg-green-50 p-4">
//             <p className="text-sm font-medium text-green-700">
//               {
//                 loginMutation.data
//                   ?.message
//               }
//             </p>
//           </div>
//         )}

//         <Button
//           type="submit"
//           className="w-full"
//           disabled={
//             loginMutation.isPending
//           }
//         >
//           {loginMutation.isPending
//             ? "Logging in..."
//             : "Login"}
//         </Button>
//       </form>

//       <Divider />

//       <SocialLogin />

//       <AuthFooter
//         text="Don't have an account?"
//         linkText="Create Account"
//         href="/auth/register"
//       />
//     </AuthCard>
//   );
// }









"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

import {
  AuthCard,
  AuthHeader,
  AuthFooter,
  Divider,
  PasswordInput,
  SocialLogin,
} from "@/components/auth";

import { useLogin } from "@/hooks/auth/useLogin";

const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .email("Enter a valid email address"),

  password: z
    .string()
    .min(
      8,
      "Password must contain at least 8 characters"
    ),
});

type LoginFormData = z.infer<
  typeof loginSchema
>;

interface LoginFormProps {
  adminOnly?: boolean;
}

export default function LoginForm({
  adminOnly = false,
}: LoginFormProps) {
  const router = useRouter();

  const loginMutation = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),

    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (
    data: LoginFormData
  ) => {
    try {
      const response =
        await loginMutation.mutateAsync(
          data
        );

      const role =
        response.data.user.role;

      /**
       * Admin Login Page
       */

      if (adminOnly) {
        if (role !== "ADMIN") {
          alert(
            "You are not authorized to access the Admin Dashboard."
          );

          return;
        }

        router.push("/admin/dashboard");
        return;
      }

      /**
       * Normal Login
       */

      switch (role) {
        case "ADMIN":
          router.push("/admin/dashboard");
          break;

        case "USER":
          router.push("/");
          break;

        default:
          router.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthCard>
      <AuthHeader
        title={
          adminOnly
            ? "Administrator Login"
            : "Welcome Back"
        }
        subtitle={
          adminOnly
            ? "Sign in to the RH Luxury Homes Admin Dashboard."
            : "Login to your RH Luxury Homes account."
        }
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <Input
          label="Email Address"
          type="email"
          placeholder="example@email.com"
          autoComplete="email"
          {...register("email")}
          error={errors.email?.message}
        />

        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          autoComplete="current-password"
          {...register("password")}
          error={
            errors.password?.message
          }
        />

        <div className="flex justify-end">
          <Link
            href="/auth/forgot-password"
            className="text-sm font-medium text-primary transition hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        {loginMutation.isError && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-4">
            <p className="text-sm font-medium text-red-600">
              {loginMutation.error
                ?.message ??
                "Login failed. Please check your credentials and try again."}
            </p>
          </div>
        )}

        {loginMutation.isSuccess && (
          <div className="rounded-xl border border-green-200 bg-green-50 p-4">
            <p className="text-sm font-medium text-green-700">
              {
                loginMutation.data
                  ?.message
              }
            </p>
          </div>
        )}

        <Button
          type="submit"
          className="w-full"
          disabled={
            loginMutation.isPending
          }
        >
          {loginMutation.isPending
            ? adminOnly
              ? "Signing in..."
              : "Logging in..."
            : adminOnly
            ? "Admin Login"
            : "Login"}
        </Button>
      </form>

      {!adminOnly && (
        <>
          <Divider />

          <SocialLogin />
        </>
      )}

      {!adminOnly ? (
        <AuthFooter
          text="Don't have an account?"
          linkText="Create Account"
          href="/auth/register"
        />
      ) : (
        <AuthFooter
          text="Return to website?"
          linkText="Go Home"
          href="/"
        />
      )}
    </AuthCard>
  );
}