import routes from "./routes"

const adminCategory = [
    { path: routes.userHome, title: 'Bảng điều khiển', icon: <i className="fa-solid fa-house"></i> },
    {
        path: routes.userHome,
        title: 'Bảng điều khiển',
        icon: <i className="fa-solid fa-house"></i>,
        children: [
            { path: routes.userHome, title: 'Sua' },
            { path: routes.userHome, title: 'Xoa' },
        ]
    },
    {
        path: routes.userHome,
        title: 'Bảng điều khiển',
        icon: <i className="fa-solid fa-house"></i>,
        children: [
            { path: routes.userHome, title: 'Sua' },
            { path: routes.userHome, title: 'Sua' },
        ]
    },
    {
        path: routes.userHome,
        title: 'Bảng điều khiển',
        icon: <i className="fa-solid fa-house"></i>,
        children: [
            { path: routes.userHome, title: 'Sua' },
            { path: routes.userHome, title: 'Sua' },
        ]
    },
]

export default adminCategory