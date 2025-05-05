"use client";

import Link from "next/link";
import Form from "next/form";
import { PackageIcon, TrolleyIcon } from "@sanity/icons";
import { ClerkLoaded, useUser } from "@clerk/nextjs";

export function SubHeader() {
  const { user } = useUser();
  
  return (
    <div className="flex flex-wrap justify-between items-center px-4 py-2">
      <Form action="/search" className="w-full sm:w-auto sm:flex-1">
        <input type="text" name="query" placeholder="Search for products" className="bg-gray-100 text-gray-800 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 border w-full max-w-4xl" />
      </Form>
      <Link href="/basket" className="flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-green-100 hover:bg-teal-500 text-black font-bold py-2 px-4 rounded-full">
        <TrolleyIcon className="w-6 h-6" />
      </Link>

      <ClerkLoaded>
        {user && (
          <Link href="/orders" className="flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-green-100 hover:bg-teal-500 text-black font-bold py-2 px-4 rounded-full">
            <PackageIcon className="w-6 h-6" />
            <span>My Orders</span>
          </Link>
        )}
      </ClerkLoaded>
    </div>
  );
}