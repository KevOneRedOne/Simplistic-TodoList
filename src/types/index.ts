export type Priority = 'low' | 'medium' | 'high';

export type Task = {
  id: number;
  name: string;
  dateCompleted: Date | string;
  completed: boolean;
  priority: Priority;
};
