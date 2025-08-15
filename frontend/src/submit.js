import { useStore } from "./store";

export const SubmitButton = () => {
    const { nodes, edges } = useStore();

    const handleSubmit = async () => {
        try {
            const res = await fetch("http://127.0.0.1:8000/pipelines/parse", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nodes,
                    edges
                })
            });
            const data = await res.json();
            alert(`Nodes: ${data.num_nodes}\nEdges: ${data.num_edges}\nIs DAG: ${data.is_dag}`);

        } catch (err) {
            console.error(err);
            alert("Error sending data to backend.");
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                onClick={handleSubmit}
            >
                Submit
            </button>
        </div>
    );
};
