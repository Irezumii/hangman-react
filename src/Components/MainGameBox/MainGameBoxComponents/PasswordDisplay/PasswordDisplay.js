export default function PasswordDisplay({ blankPassword }) {
    return (
        <>
            <div id="word">
                {blankPassword && blankPassword.map((item, index) => {
                    return (
                        <div key={item + index} className="temp-displays">
                            <div className="temp-upper-part">{item}</div>
                            <div className="temp-lower-part">_</div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}