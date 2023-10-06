export enum EStage {
    TODO = "todo",

    INVESTIGATING = "investigating",
    INPROGRESS = "in progress",
    QA = "QA",
    DONE = "done",
    CANCEL = "cancel",
}
export interface ITodo {
    id: string;
    title: string;
    description: string;
    createdAt: string;
}
