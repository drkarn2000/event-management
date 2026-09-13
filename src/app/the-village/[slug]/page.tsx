import { notFound } from "next/navigation";
import { HostProfileLanding } from "@/components/HostProfileLanding";
import { getHostBySlug, hosts } from "@/lib/data/hosts";

export function generateStaticParams() {
  return hosts.map((host) => ({ slug: host.slug }));
}

export default async function HostProfilePage({ params }: PageProps<"/the-village/[slug]">) {
  const { slug } = await params;
  const host = getHostBySlug(slug);

  if (!host) {
    notFound();
  }

  return <HostProfileLanding host={host} />;
}
