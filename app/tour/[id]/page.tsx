import TourClient from "./TourClient";

export async function generateStaticParams() {
  return [
    { id: "demo1" },
    { id: "demo2" },
    { id: "hotel1" },
  ];
}

export default async function TourPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <TourClient id={id} />;
}