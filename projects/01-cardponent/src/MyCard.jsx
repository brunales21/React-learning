export function MyCard({ nombre, apellido, char, tarea}) {
    const username= (char + nombre + apellido).toLowerCase()
    return (
        <div>
            <button onClick={() => tarea(nombre)}>BOTON KLK</button>

            <h1>Nombre: {nombre}</h1>
            <h2> Apellido: {apellido}</h2>
            <h3> Username: {username}</h3>

            <img src={`https://unavatar.io/${username}`} alt="" />
        </div>
    )
}