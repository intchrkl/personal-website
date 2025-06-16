import { Typewriter } from "react-simple-typewriter";
import "./Banner.css";

export function Banner() {
    return (
        <div className="banner">
            <h1 style={{
                fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                fontWeight: 500,
                fontSize: "3rem",
                marginBottom: "1rem",
            }}>
                <Typewriter
                    words={["In Development...", "Hello World", "I'm Intat", "Welcome!"]}
                    loop={Infinity}
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={60}
                    delaySpeed={1000}
                />
            </h1>
        </div>
    )
}