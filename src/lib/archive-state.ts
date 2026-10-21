export interface ArchiveState { category: string; topic: string; page: number }
export interface ArchiveRow { category: string; topics: string[] }
export const PAGE_SIZE = 12;

export function readArchiveState(params: URLSearchParams, categories: string[], topics: string[]): ArchiveState {
  const category = params.get("category") || "";
  const topic = params.get("topic") || "";
  const value = params.get("page") || "1";
  return {
    category: categories.includes(category) ? category : "",
    topic: topics.includes(topic) ? topic : "",
    page: /^\d{1,6}$/.test(value) && Number(value) > 0 ? Number(value) : 1,
  };
}

export function selectArchive<T extends ArchiveRow>(rows: T[], state: ArchiveState) {
  const matches = rows.filter((row) => (!state.category || row.category === state.category)
    && (!state.topic || row.topics.includes(state.topic)));
  const pages = Math.max(1, Math.ceil(matches.length / PAGE_SIZE));
  const page = Math.min(state.page, pages);
  const start = (page - 1) * PAGE_SIZE;
  return { matches, page, pages, visible: matches.slice(start, start + PAGE_SIZE), start };
}
