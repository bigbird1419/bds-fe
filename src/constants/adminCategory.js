import routes from "./routes"

const adminCategory = [
    { path: routes.adminHome, title: 'Bảng điều khiển', icon: <i className="fa-solid fa-house"></i> },
    {
        path: routes.adminHome,
        title: 'Bảng điều khiển',
        icon: <i className="fa-solid fa-house"></i>,
        children: [
            { path: routes.adminHome, title: 'Sua' },
            { path: routes.adminHome, title: 'Xoa' },
        ]
    },
    {
        path: routes.adminHome,
        title: 'Bảng điều khiển',
        icon: <i className="fa-solid fa-house"></i>,
        children: [
            { path: routes.adminHome, title: 'Sua' },
            { path: routes.adminHome, title: 'Sua' },
        ]
    },
    {
        path: routes.adminHome,
        title: 'Bảng điều khiển',
        icon: <i className="fa-solid fa-house"></i>,
        children: [
            { path: routes.adminHome, title: 'Sua' },
            { path: routes.adminHome, title: 'Sua' },
        ]
    },
]

export default adminCategory