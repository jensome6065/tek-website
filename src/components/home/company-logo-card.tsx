"use client";

import { useState } from "react";
import type { FeaturedCompany } from "@/lib/data/companies";

interface CompanyLogoCardProps {
  company: FeaturedCompany;
}

export function CompanyLogoCard({ company }: CompanyLogoCardProps) {
  const [failed, setFailed] = useState(false);

  const initials = company.name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <li className="group relative shrink-0 list-none">
      <div className="relative flex h-12 w-[7.25rem] items-center justify-center rounded-xl bg-white px-3 shadow-soft transition-shadow duration-300 group-hover:shadow-elevated sm:h-14 sm:w-32">
        <div className="flex items-center justify-center transition-opacity duration-200 group-hover:opacity-0">
          {!failed ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={company.logoUrl}
              alt=""
              className="h-6 w-auto max-w-[5.5rem] object-contain sm:h-7 sm:max-w-[6.5rem]"
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={() => setFailed(true)}
            />
          ) : (
            <span className="text-xs font-semibold tracking-tight text-[#2b3c67]/70">
              {initials}
            </span>
          )}
        </div>

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <span className="line-clamp-2 text-center text-[11px] font-semibold leading-tight tracking-tight text-[#211f33]">
            {company.name}
          </span>
        </div>
      </div>
    </li>
  );
}
