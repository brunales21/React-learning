export function BrunalesCard({ name, username }) {
    return (
        <article style={{ display: "flex", alignItems: "center", color: "#fff" }}>
            <h1>{username}</h1>
            <header>
                <img src={`https://unavatar.io/${username}`} />
                <div>
                    <strong>{name}</strong>
                    <span>@{username}</span>
                </div>
            </header>
            <aside>
                <button>Follow</button>
            </aside>
        </article>
    )
}