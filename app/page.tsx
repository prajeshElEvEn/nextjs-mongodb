import { DeleteForm } from "@/components/delete-form";
import { PostForm } from "@/components/post-form";
import { PutForm } from "@/components/put-form";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

export default function Dashboard() {
  return (
    <main className="container mx-auto py-8">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        GET
      </h2>
      <p className="leading-7 my-4">
        Getting all the entries from the database.
      </p>
      <Button>Get</Button>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>Updated At</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Text</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium ">INV001</TableCell>
            <TableCell>2024-01-25</TableCell>
            <TableCell>2024-01-25</TableCell>
            <TableCell>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
              reprehenderit?
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <blockquote className="my-4 border-l-2 pl-6 italic">
        Hence, all the entires are retrieved.
      </blockquote>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        POST
      </h2>
      <p className="leading-7 my-4">Posting an entry to database.</p>
      <PostForm />
      <blockquote className="my-4 border-l-2 pl-6 italic">
        Hence, the entry is posted.
      </blockquote>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        PUT
      </h2>
      <p className="leading-7 my-4">Updating an entry in database.</p>
      <PutForm />
      <blockquote className="my-4 border-l-2 pl-6 italic">
        Hence, the entry is updated.
      </blockquote>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        DELETE
      </h2>
      <p className="leading-7 my-4">Deleting an entry from database.</p>
      <DeleteForm />
      <blockquote className="my-4 border-l-2 pl-6 italic">
        Hence, the entry is deleted.
      </blockquote>
    </main>
  );
}
