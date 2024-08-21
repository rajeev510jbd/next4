import Link from "next/link";

export const ComingSoon = () => {
  return (
    <main className="flex justify-center h-full w-full pt-48 px-12">
      <div className="max-w-xl text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Hello
        </h1>
        <p className="text-lg text-muted-foreground">
          We are good to go.{" "}
          <Link href="/" className="text-slate-600 underline">
            
          </Link>
        </p>
      </div>
    </main>
  );
};
