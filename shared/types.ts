// Core types for the video production website
export interface Video {
  id: number;
  title: string;
  description: string;
  vimeoId: string | null;
  youtubeId: string | null;
  thumbnailUrl: string | null;
  category: 'music' | 'corporate';
  isFeatured: boolean;
  isActive: boolean;
  displayOrder: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface VideoFormData {
  title: string;
  description: string;
  vimeoId?: string;
  youtubeId?: string;
  thumbnailUrl?: string;
  category: 'music' | 'corporate';
  isFeatured: boolean;
  isActive: boolean;
  displayOrder: number;
}

export interface Admin {
  id: number;
  username: string;
  passwordHash: string;
  createdAt: Date;
}

export interface AdminLoginData {
  username: string;
  password: string;
}