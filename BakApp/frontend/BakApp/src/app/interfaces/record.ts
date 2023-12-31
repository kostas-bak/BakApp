export interface Record {
    project: number,
    task: number,
    progress?: number | null,
    persons_working?: number | null,
    machines_working?: number | null,
    hours?: number | null,
    date?: Date | null
}