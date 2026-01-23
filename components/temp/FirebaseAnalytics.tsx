"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { logFirebasePageView } from "@/lib/firebase";

export default function FirebaseAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams?.toString();
    const path = query ? `${pathname}?${query}` : pathname;
    logFirebasePageView(path);
  }, [pathname, searchParams]);

  return null;
}
