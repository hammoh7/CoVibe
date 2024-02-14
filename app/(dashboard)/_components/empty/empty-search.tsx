import Image from "next/image";

export const EmptySearch = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/logo.svg" height={60} width={60} alt="logo" />
      <h2 className="text-2xl font-semibold">No result found!</h2>
      <p>Try searching something else!</p>
    </div>
  );
};
