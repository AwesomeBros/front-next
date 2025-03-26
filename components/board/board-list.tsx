import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { DeleteButton } from "./delete-button";
import UpdateButton from "./update-button";

const POSTS = [
  {
    id: 1,
    title: "제목1",
    author: "작성자1",
    createdAt: "2025.09.01",
  },
  {
    id: 2,
    title: "제목1",
    author: "작성자1",
    createdAt: "2025.09.01",
  },
  {
    id: 3,
    title: "제목1",
    author: "작성자1",
    createdAt: "2025.09.01",
  },
  {
    id: 4,
    title: "제목1",
    author: "작성자1",
    createdAt: "2025.09.01",
  },
  {
    id: 5,
    title: "제목1",
    author: "작성자1",
    createdAt: "2025.09.01",
  },
  {
    id: 6,
    title: "제목1",
    author: "작성자1",
    createdAt: "2025.09.01",
  },
  {
    id: 7,
    title: "제목1",
    author: "작성자1",
    createdAt: "2025.09.01",
  },
  {
    id: 8,
    title: "제목1",
    author: "작성자1",
    createdAt: "2025.09.01",
  },
  {
    id: 9,
    title: "제목1",
    author: "작성자1",
    createdAt: "2025.09.01",
  },
  {
    id: 10,
    title: "제목1",
    author: "작성자1",
    createdAt: "2025.09.01",
  },
];

export function BoardList() {
  return (
    <Table className="mt-10 border-t border-b">
      <TableHeader>
        <TableRow className="\text-lg leading-16 bg-secondary text-center">
          <TableHead className="w-[10%] text-center">번호</TableHead>
          <TableHead className="w-[60%] text-center">제목</TableHead>
          <TableHead className="w-[10%] text-center">작성자</TableHead>
          <TableHead className="w-[10%] text-center">작성일</TableHead>
          <TableHead className="w-[10%] text-center">액션</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {POSTS.map((post) => (
          <TableRow key={post.id} className="leading-10">
            <TableCell className="font-medium text-center">{post.id}</TableCell>
            <Link
              className="hover:underline"
              href={`/${post.id}`}
              key={post.id}
            >
              <TableCell className="">{post.title}</TableCell>
            </Link>
            <TableCell className="text-center">{post.author}</TableCell>
            <TableCell className="text-center">{post.createdAt}</TableCell>
            <TableCell className="text-center">
              <UpdateButton id={post.id} />
              <DeleteButton id={post.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
