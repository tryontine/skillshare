import { conversationThreads, threadMessages } from "@/lib/mock-data";

export function getThreads() {
  return conversationThreads;
}

export function getThreadById(id: string) {
  return conversationThreads.find((thread) => thread.id === id);
}

export function getMessagesByThreadId(id: string) {
  return threadMessages[id] ?? [];
}
