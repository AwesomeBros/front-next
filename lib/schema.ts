import { z } from "zod";

export type FormState =
  | {
      error?: {
        title?: string[];
        author?: string[];
        content?: string[];
      };
      status?: string;
      message?: string;
    }
  | undefined;

export const insertPostFormSchema = z.object({
  title: z
    .string()
    .min(1, "제목을 입력해주세요. (1~100자)")
    .max(100, "제목을 100자 이내로 입력해주세요."),
  author: z
    .string()
    .min(1, "작성자를 입력해주세요. (1~20자)")
    .max(20, "작성자를 20자 이내로 입력해주세요."),
  content: z
    .string()
    .min(1, "내용을 입력해주세요. (1~1000자)")
    .max(1000, "내용을 1000자 이내로 입력해주세요."),
});
