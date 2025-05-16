import reactLogo from "../../assets/react-logo.png"

export function Footer() {
    return (
        <>
            <h3>Footer</h3>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                <h4 style={{ margin: 0 }}>Built with React</h4> 
                <img src={reactLogo} alt="ReactJs logo" width="20" height="20"/>
            </div>
        </>
    )
}