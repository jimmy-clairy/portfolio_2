export async function fetchData(url) {
    const res = await fetch(url)
    if (res.ok) {
        return res.json()
    }
    throw new Error("Probleme serveur")
}