export type task = {
   id: string,
   title: string,
   description: string,
   deadline: string,
   authorId: string
}

export type createTaskInput = {
   title: string,
   description: string,
   deadline: string,
   authorId: string
}