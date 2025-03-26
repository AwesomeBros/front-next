"use server";

import axios from "axios";
import { SERVER_URL } from "../constants";
import { FormState, insertPostFormSchema } from "../schema";

export async function insertPost(
  state: FormState,
  formData: FormData
): Promise<FormState> {
  const validationFields = insertPostFormSchema.safeParse({
    title: formData.get("title"),
    author: formData.get("author"),
    content: formData.get("content"),
  });

  if (!validationFields.success) {
    return { error: validationFields.error.flatten().fieldErrors };
  }

  const response = await axios.post(`${SERVER_URL}/api/post`);

  if (response.status === 400) {
    return { error: response.data.error };
  }
  return {
    status: "success",
    message: "게시글이 작성되었습니다.",
  };
}
