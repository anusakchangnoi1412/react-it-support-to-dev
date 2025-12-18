export default function Ticket() {
    const arrData = [{},
    { id: 1, title: "Reset password", priority: "high" },
    { id: 2, title: "VPN not working", priority: "high" }
    ]

    return (
        <div>
            {
                arrData.map((i) => i.priority === "high" ? (
                    <li key={i.id} > {i.title} </li>
                ) : null )
            }
        </div >
    )
}