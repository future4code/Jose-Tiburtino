export type PostInputDTO = {
  token: string;
  photo: string;
  description: string;
  type: string;
};

export type PostInfo = {
  id: string;
  photo: string;
  description: string;
  type: string;
  createdAt: string;
  authorId: string;
};

export type AllPosts = {
  name: string;
  created_at: string;
  description: string;
  photo: string;
};

export type PostById = {
  id: string;
  token: string;
};

enum POST_TYPE {
  NORMAL = "normal",
  EVENT = "event",
}

export class Post {
  constructor(
    private id: string,
    private photo: string,
    private description: string,
    private type: string,
    private created_at: string,
    private author_id: string
  ) {
    if (type === POST_TYPE.NORMAL) {
      this.type = POST_TYPE.NORMAL;
    } else if (type === POST_TYPE.EVENT) {
      this.type = POST_TYPE.EVENT;
    } else {
      throw new Error(
        "Please send a type valid. The valid values are 'NORMAL' and 'EVENT'"
      );
    }
  }
  public getId(): string {
    return this.id;
  }
  public getPhoto(): string {
    return this.photo;
  }
  public getDescription(): string {
    return this.description;
  }
  public getType(): string {
    return this.type;
  }
  public getCreatedAt(): string {
    return this.created_at;
  }
  public getAuthorId(): string {
    return this.author_id;
  }
}
