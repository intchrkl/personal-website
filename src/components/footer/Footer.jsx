import reactLogo from "../../assets/react-logo.png";
import "./footer.css";

export function Footer() {
    return (
        <>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                marginTop: "4rem",
                marginBottom: "1rem"
            }}>
                <h4 style={{ margin: 0 }}>Built with React</h4>
                <img src={reactLogo} alt="ReactJs logo" width="20" height="20" />
            </div>
        </>
    )
}