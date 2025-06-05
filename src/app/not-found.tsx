import { clsx } from "clsx";
import { Metadata } from "next";
import Link from "next/link";
import { memo } from "react";

export const metadata: Metadata = {
  title: "404 Not Found",
};

const NotFound = () => {
  return (
    <main className="flex justify-center">
      <div
        className={clsx(
          "flex w-full max-w-85 flex-col gap-4 rounded-lg p-6",
          "bg-white text-center text-neutral-600 shadow-sm",
        )}
      >
        <h1 className="text-2xl font-semibold text-neutral-900">
          404 Not Found
        </h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link
          href="/"
          className={clsx(
            "rounded bg-neutral-900 px-4 py-2 font-medium text-white",
            "transition-colors hover:bg-neutral-700",
          )}
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default memo(NotFound);
