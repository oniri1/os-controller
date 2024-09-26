import Link from "next/link";

export default function Home() {
  return (
    <Link href="/share">
      <div className="border-x-emerald-500">start share</div>
    </Link>
  );
}
