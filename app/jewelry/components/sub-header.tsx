"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { PackageIcon, TrolleyIcon } from "@sanity/icons";
import { ClerkLoaded, useUser } from "@clerk/nextjs";

export function SubHeader() {
  const { user } = useUser();
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get('query');
    if (query) {
      router.push(`/jewelry/search?query=${query}`);
    }
  };
  
  return (
    <div className="flex flex-wrap justify-between items-center bg-gray-100 shadow-lg px-4 py-2">
      <form onSubmit={handleSearch} className="w-full sm:w-auto sm:flex-1">
        <input type="text" name="query" placeholder="Search for products" className="bg-gray-100 text-gray-800 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 border w-full max-w-4xl" />
      </form>
      <Link href="/basket" className="flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center shadow-lg space-x-2 border border-gray-300 bg-green-100 hover:bg-teal-500 text-black font-bold py-2 px-4 rounded-full mt-2 sm:mt-0">
        <TrolleyIcon className="w-6 h-6" />
        <span>My Basket</span>
      </Link>

      <ClerkLoaded>
        {user && (
          <Link href="/orders" className="flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center shadow-lg space-x-2 border border-gray-300 bg-green-100 hover:bg-teal-500 text-black font-bold py-2 px-4 rounded-full mt-2 sm:mt-0">
            <PackageIcon className="w-6 h-6" />
            <span>My Orders</span>
          </Link>
        )}
      </ClerkLoaded>
    </div>
  );
}