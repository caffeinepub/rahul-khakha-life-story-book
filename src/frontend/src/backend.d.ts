import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Chapter {
    id: bigint;
    contentHindi: string;
    title: string;
    chapterNumber: bigint;
    ageRange: string;
    contentEnglish: string;
    subtitle: string;
}
export interface backendInterface {
    getAllChapters(): Promise<Array<Chapter>>;
    getChapter(id: bigint): Promise<Chapter>;
}
