// submit.js

export const SubmitButton = () => {

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <button
                style={{
                    backgroundColor: "#2563eb",
                    color: "#fff",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "500",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.15)",
                    transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#1d4ed8")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#2563eb")}
            >
                Submit
            </button>
        </div>
    );
}
