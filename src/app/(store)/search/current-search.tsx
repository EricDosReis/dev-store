'use client';

import { useSearchParams } from "next/navigation";

export default function CurrentSearch() {
  const searchParams = useSearchParams();

  const query = searchParams.get('q');

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <b>{query ?? ''}</b>
      </p>
    </div>
  );
}
