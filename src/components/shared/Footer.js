export default function Footer({ developer }) {
    return (
        <footer className="Footer">
            <a href={developer.link} target="_blank" rel="noreferrer noopener">
                {developer.label}
                <strong>{developer.name}</strong>
            </a>
        </footer>
    )
}