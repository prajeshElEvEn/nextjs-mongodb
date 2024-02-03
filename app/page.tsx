import React from "react";

export default function Dashboard() {
  return (
    <main className="container mx-auto py-8">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        GET
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Getting all the entries from the database.
      </p>
      <blockquote className="my-6 border-l-2 pl-6 italic">
        Hence, all the entires are retrieved.
      </blockquote>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        POST
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Posting an entry to database.
      </p>
      <blockquote className="my-6 border-l-2 pl-6 italic">
        Hence, the entry is posted.
      </blockquote>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        PUT
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Updating an entry in database.
      </p>
      <blockquote className="my-6 border-l-2 pl-6 italic">
        Hence, the entry is updated.
      </blockquote>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        DELETE
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Deleting an entry from database.
      </p>
      <blockquote className="my-6 border-l-2 pl-6 italic">
        Hence, the entry is deleted.
      </blockquote>
    </main>
  );
}
