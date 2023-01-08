export const typeDefs = `#graphql
type Tarea {
  _id: String
  titulo: String 
  descripcion: String
  fecha_inicio: String
  fecha_fin: String
  estado: Boolean
}
type Panel {
  _id: String
  titulo: String
  descripcion: String
  tareas: [Tarea]
}

type Query {
  hello: String

  panel(_id: ID): Panel
  tarea(_id: ID): Tarea

  allPaneles: [Panel]
  allTareas: [Tarea]
}

type Mutation {
  addTarea(
    idPanel: String,
    titulo: String,
    descripcion: String,
    fecha_inicio: String,
    fecha_fin: String,
    estado: Boolean
  ): Tarea
  addPanel(
    titulo: String,
    descripcion: String,
  ): Panel
}
`

export const mongoDbUrl = 'mongodb+srv://bdAdmin:1234@bduoc.kd8xpcw.mongodb.net/test'
