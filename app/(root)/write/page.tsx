"use client";
import { Input } from "@/components/ui/input";
import SubmitButton from "@/components/ui/submit-button";
import { Textarea } from "@/components/ui/textarea";
import { insertPost } from "@/lib/actions/post.actions";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { toast } from "react-toastify";

export default function WritePage() {
  const router = useRouter();
  const [state, action] = useActionState(insertPost, undefined);

  useEffect(() => {
    const errorFields = ["title", "author", "content"];
    errorFields.forEach((field) => {
      const errorMessage = (
        state?.error as Record<string, string[]> | undefined
      )?.[field]?.[0];
      if (errorMessage) {
        toast.error(errorMessage);
      }
    });
  }, [state?.error]);

  useEffect(() => {
    if (state?.status === "success") {
      toast.success(state.message);
      router.push("/");
    }
  }, [state?.status]);

  return (
    <form
      action={action}
      className="flex items-center justify-center h-[calc(100vh-56px)] flex-col gap-5"
    >
      <Input type="text" name="title" placeholder="제목" />
      <Input type="text" name="author" placeholder="작성자" />
      <Textarea placeholder="내용" name="content" className="h-[400px]" />
      <div className="w-full flex justify-end">
        <SubmitButton className="w-15">작성</SubmitButton>
      </div>
    </form>
  );
}
