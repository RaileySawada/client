import { Link } from "react-router";

export default function NotFound() {
  return (
    <>
      <main className="h-screen w-screen flex flex-col gap-10 justify-center items-center">
        <p className="text-xl">404 | Not Found</p>
        <Link to={"/"} className="py-2 px-4 rounded-md bg-slate-950 text-white">
          Back to Home page
        </Link>
      </main>
    </>
  );
}
