export interface User {
  id: string;
  email: string;
  displayName: string;
  photoUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Role {
  id: string;
  userId: string;
  name: string;
  description?: string;
  color: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Goal {
  id: string;
  userId: string;
  roleId: string;
  title: string;
  description?: string;
  week: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Task {
  id: string;
  userId: string;
  goalId?: string;
  roleId: string;
  title: string;
  description?: string;
  dayOfWeek: number;
  startTime: string;
  endTime: string;
  completed: boolean;
  isMustDo: boolean;
  week: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface TimeEntry {
  id: string;
  userId: string;
  taskId: string;
  roleId: string;
  startTime: Date;
  endTime: Date;
  duration: number;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface WeeklyNote {
  id: string;
  userId: string;
  week: string;
  notesForNextWeek: string;
  createdAt: Date;
  updatedAt: Date;
}
