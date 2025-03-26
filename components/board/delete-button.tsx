"use client";
import { Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function DeleteButton({ id }: { id: number }) {
  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer" asChild>
        <Button type="button" variant="outline" size="icon">
          <Trash2 />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>삭제</DialogTitle>
        </DialogHeader>
        <div className="flex items-center justify-center">
          <p className="text-lg">{id}번 게시글을 정말로 삭제하시겠습니까?</p>
        </div>
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button type="button" variant="ghost" className="cursor-pointer">
              취소
            </Button>
          </DialogClose>
          <Button
            type="button"
            variant="destructive"
            className="cursor-pointer"
          >
            삭제
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
