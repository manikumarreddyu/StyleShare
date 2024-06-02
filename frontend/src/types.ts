export interface IPost {
  id: string;
  title: string;
  description: string;
  codeSnippet: string;
  tags: string[];
  author: {
    id: string;
    username: string;
    email: string;
  };
}

export interface IUser {
  id: string;
  username: string;
  email: string;
  verified: boolean;
  posts: IPost[];
}
