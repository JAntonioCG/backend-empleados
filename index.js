import express from 'express'
import empleadosRoutes from './routes/empleadoRoutes'

const app = express()

app.use(express.json())
app.use('/api/empleado', empleadosRoutes)

const PORT = process.env.PORT || 3020

app.listen(PORT, () => {
  console.log(`servidor en ejecución: ${PORT}`)
})