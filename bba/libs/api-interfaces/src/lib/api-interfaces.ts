export interface BaseEntity {
  id: string | null;
  title?: string | null;
}

export interface Login {
  email: string;
  password: string;
}

export interface User extends BaseEntity {
  title: string;
  role: string;
  description: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  profilePic: string;
}

export interface Collection extends BaseEntity {
  title: string;
  description: string;
  thumbnail: string;
  guitar?: Guitar[];
}

export interface Guitar extends BaseEntity {
  title: string;
  description: string;
  guitarId: any;
  make: string;
  model: string;
  type: string;
}
