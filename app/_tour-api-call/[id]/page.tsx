import React from "react";

const url = "https://www.course-api.com/react-tours-project";

interface Tour {
  id: string;
}

async function fetchTours() {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch tours");
  }

  return (await response.json()) as Tour[];
}

export async function generateStaticParams() {
  const tours = await fetchTours();

  return tours.map((tour) => ({
    id: tour.id,
  }));
}

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <div>
      <h1 className="text-5xl">ID: {(await params).id}</h1>
    </div>
  );
}
