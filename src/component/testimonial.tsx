import { clsx } from "clsx";
import Image from "next/image";
import { memo, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  headshotFilename: string;
  fullName: string;
  username: string;
};

export const Testimonial = memo((props: Props) => {
  return (
    <div
      className={clsx(
        "flex w-full max-w-85 flex-col gap-4 rounded-lg p-6",
        "bg-white text-neutral-600 shadow-sm",
        props.className,
      )}
    >
      <div className="flex items-center gap-4">
        <div className="relative size-12 shrink-0">
          <Image
            src={`/asset/image/headshot/${props.headshotFilename}`}
            alt=""
            fill
            sizes="3rem"
            priority
          />
        </div>
        <div className="overflow-hidden">
          <p className="truncate text-lg font-semibold text-neutral-900">
            {props.fullName}
          </p>
          <p className="mt-[0.0625rem] truncate text-sm">@{props.username}</p>
        </div>
      </div>
      {/* Testimonial */}
      <p>{props.children}</p>
    </div>
  );
});

Testimonial.displayName = "Testimonial";
