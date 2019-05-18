import App from './App'

const { app } = App

const PORT = process.env.PORT || 9503

app.listen(PORT,() => {
    console.log(`Server is started on port ${PORT}`)
})
